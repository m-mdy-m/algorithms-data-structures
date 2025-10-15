#!/usr/bin/env python3
"""
Advanced Chapter Management Script for LaTeX Book Projects
Handles insertion, deletion, and reordering of chapters with automatic renaming
"""

import os
import sys
import shutil
from pathlib import Path
from typing import List, Dict, Tuple, Optional
import re

class ChapterManager:
    def __init__(self, base_dir: str = "book/parts"):
        self.base_dir = Path(base_dir)
        self.backup_dir = Path(".backups")
        
    def format_number(self, num: int) -> str:
        """Format number with leading zero"""
        return f"{num:02d}"
    
    def get_existing_parts(self) -> List[int]:
        """Get list of existing part numbers"""
        if not self.base_dir.exists():
            return []
        
        parts = []
        for item in self.base_dir.iterdir():
            if item.is_dir() and item.name.startswith('part'):
                try:
                    part_num = int(item.name.replace('part', ''))
                    parts.append(part_num)
                except ValueError:
                    continue
        return sorted(parts)
    
    def get_existing_chapters(self, part_num: int) -> List[int]:
        """Get list of existing chapter numbers for a part"""
        part_dir = self.base_dir / f"part{self.format_number(part_num)}"
        if not part_dir.exists():
            return []
        
        chapters = []
        for item in part_dir.iterdir():
            if item.is_dir() and item.name.startswith('chapter'):
                try:
                    chapter_num = int(item.name.replace('chapter', ''))
                    chapters.append(chapter_num)
                except ValueError:
                    continue
        return sorted(chapters)
    
    def create_backup(self, part_num: int) -> str:
        """Create backup of part before making changes"""
        timestamp = __import__('datetime').datetime.now().strftime('%Y%m%d_%H%M%S')
        backup_name = f"part{self.format_number(part_num)}_backup_{timestamp}"
        backup_path = self.backup_dir / backup_name
        
        self.backup_dir.mkdir(exist_ok=True)
        
        part_dir = self.base_dir / f"part{self.format_number(part_num)}"
        if part_dir.exists():
            shutil.copytree(part_dir, backup_path)
            return str(backup_path)
        return ""
    
    def rename_chapter_directory(self, part_num: int, old_num: int, new_num: int) -> bool:
        """Rename chapter directory and its contents"""
        part_dir = self.base_dir / f"part{self.format_number(part_num)}"
        old_dir = part_dir / f"chapter{self.format_number(old_num)}"
        new_dir = part_dir / f"chapter{self.format_number(new_num)}"
        
        if not old_dir.exists():
            return False
        
        if new_dir.exists():
            print(f"Warning: Target directory chapter{self.format_number(new_num)} already exists")
            return False
        
        # Rename directory
        old_dir.rename(new_dir)
        
        # Rename the .tex file inside
        old_tex_file = new_dir / f"chapter{self.format_number(old_num)}.tex"
        new_tex_file = new_dir / f"chapter{self.format_number(new_num)}.tex"
        
        if old_tex_file.exists():
            old_tex_file.rename(new_tex_file)
        
        return True
    
    def update_tex_file_content(self, part_num: int, chapter_num: int, old_num: int):
        """Update references inside tex file after renaming"""
        part_dir = self.base_dir / f"part{self.format_number(part_num)}"
        tex_file = part_dir / f"chapter{self.format_number(chapter_num)}" / f"chapter{self.format_number(chapter_num)}.tex"
        
        if not tex_file.exists():
            return
        
        try:
            with open(tex_file, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Update chapter references in content if needed
            # This is a basic implementation - you might need more sophisticated regex
            content = re.sub(
                rf'chapter{self.format_number(old_num)}',
                f'chapter{self.format_number(chapter_num)}',
                content
            )
            
            with open(tex_file, 'w', encoding='utf-8') as f:
                f.write(content)
        
        except Exception as e:
            print(f"Warning: Could not update content in {tex_file}: {e}")
    
    def insert_chapter(self, part_num: int, position: int, chapter_title: str = None) -> bool:
        """Insert a new chapter at specified position, shifting others"""
        part_dir = self.base_dir / f"part{self.format_number(part_num)}"
        
        if not part_dir.exists():
            print(f"Error: Part {part_num} does not exist")
            return False
        
        # Create backup
        backup_path = self.create_backup(part_num)
        print(f"Backup created: {backup_path}")
        
        existing_chapters = self.get_existing_chapters(part_num)
        
        try:
            # Rename existing chapters from the end to avoid conflicts
            for chapter_num in sorted(existing_chapters, reverse=True):
                if chapter_num >= position:
                    old_num = chapter_num
                    new_num = chapter_num + 1
                    print(f"Moving chapter{self.format_number(old_num)} -> chapter{self.format_number(new_num)}")
                    
                    if not self.rename_chapter_directory(part_num, old_num, new_num):
                        raise Exception(f"Failed to rename chapter {old_num} to {new_num}")
                    
                    self.update_tex_file_content(part_num, new_num, old_num)
            
            # Create new chapter at the specified position
            self.create_new_chapter(part_num, position, chapter_title)
            
            # Update part file to include all chapters
            self.update_part_includes(part_num)
            
            print(f"Successfully inserted chapter {position} in part {part_num}")
            return True
            
        except Exception as e:
            print(f"Error during chapter insertion: {e}")
            print("You may need to restore from backup")
            return False
    
    def delete_chapter(self, part_num: int, chapter_num: int) -> bool:
        """Delete a chapter and shift remaining chapters down"""
        part_dir = self.base_dir / f"part{self.format_number(part_num)}"
        chapter_dir = part_dir / f"chapter{self.format_number(chapter_num)}"
        
        if not chapter_dir.exists():
            print(f"Error: Chapter {chapter_num} does not exist in part {part_num}")
            return False
        
        # Create backup
        backup_path = self.create_backup(part_num)
        print(f"Backup created: {backup_path}")
        
        existing_chapters = self.get_existing_chapters(part_num)
        
        try:
            # Remove the target chapter
            shutil.rmtree(chapter_dir)
            print(f"Deleted chapter{self.format_number(chapter_num)}")
            
            # Shift remaining chapters down
            for existing_num in sorted(existing_chapters):
                if existing_num > chapter_num:
                    old_num = existing_num
                    new_num = existing_num - 1
                    print(f"Moving chapter{self.format_number(old_num)} -> chapter{self.format_number(new_num)}")
                    
                    if not self.rename_chapter_directory(part_num, old_num, new_num):
                        raise Exception(f"Failed to rename chapter {old_num} to {new_num}")
                    
                    self.update_tex_file_content(part_num, new_num, old_num)
            
            # Update part file
            self.update_part_includes(part_num)
            
            print(f"Successfully deleted chapter {chapter_num} from part {part_num}")
            return True
            
        except Exception as e:
            print(f"Error during chapter deletion: {e}")
            return False
    
    def create_new_chapter(self, part_num: int, chapter_num: int, chapter_title: str = None):
        """Create a new chapter with default content"""
        part_dir = self.base_dir / f"part{self.format_number(part_num)}"
        chapter_dir = part_dir / f"chapter{self.format_number(chapter_num)}"
        
        chapter_dir.mkdir(exist_ok=True)
        
        if chapter_title is None:
            chapter_title = f"Chapter {chapter_num} Title"
        
        chapter_content = f"""% ==========================================
% CHAPTER {chapter_num}: {chapter_title.upper()}
% ==========================================

\\chapter{{{chapter_title}}}
% Timeline: 
% Focus: 

\\section{{Section 1}}
% Content here

\\section{{Section 2}}
% Content here

\\section{{Section 3}}
% Content here

\\section{{Section 4}}
% Content here
"""
        
        tex_file = chapter_dir / f"chapter{self.format_number(chapter_num)}.tex"
        with open(tex_file, 'w', encoding='utf-8') as f:
            f.write(chapter_content)
    
    def update_part_includes(self, part_num: int):
        """Update part file to include all chapters in correct order"""
        part_dir = self.base_dir / f"part{self.format_number(part_num)}"
        part_file = part_dir / f"part{self.format_number(part_num)}.tex"
        
        chapters = self.get_existing_chapters(part_num)
        
        if not part_file.exists():
            # Create basic part file if it doesn't exist
            part_content = f"""\\part{{Part {part_num} Title}}
\\section*{{Introduction}}
\\section*{{How to Read}}
"""
            for chapter_num in chapters:
                part_content += f"\\input{{parts/part{self.format_number(part_num)}/chapter{self.format_number(chapter_num)}/chapter{self.format_number(chapter_num)}}}\n"
            
            with open(part_file, 'w', encoding='utf-8') as f:
                f.write(part_content)
        else:
            # Update existing part file
            try:
                with open(part_file, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                # Remove all existing chapter includes
                content = re.sub(r'\\input\{parts/part\d+/chapter\d+/chapter\d+\}', '', content)
                
                # Add updated chapter includes at the end
                for chapter_num in chapters:
                    content += f"\\input{{parts/part{self.format_number(part_num)}/chapter{self.format_number(chapter_num)}/chapter{self.format_number(chapter_num)}}}\n"
                
                with open(part_file, 'w', encoding='utf-8') as f:
                    f.write(content)
            
            except Exception as e:
                print(f"Warning: Could not update part file: {e}")
    
    def reorder_chapters(self, part_num: int, new_order: List[int]) -> bool:
        """Reorder chapters according to new sequence"""
        existing_chapters = self.get_existing_chapters(part_num)
        
        if set(new_order) != set(existing_chapters):
            print("Error: New order must contain exactly the same chapters as existing")
            return False
        
        backup_path = self.create_backup(part_num)
        print(f"Backup created: {backup_path}")
        
        part_dir = self.base_dir / f"part{self.format_number(part_num)}"
        temp_dir = part_dir / "temp_reorder"
        temp_dir.mkdir(exist_ok=True)
        
        try:
            # Move all chapters to temporary location
            for chapter_num in existing_chapters:
                old_dir = part_dir / f"chapter{self.format_number(chapter_num)}"
                temp_chapter_dir = temp_dir / f"chapter{self.format_number(chapter_num)}"
                old_dir.rename(temp_chapter_dir)
            
            # Move chapters back in new order
            for new_pos, old_chapter_num in enumerate(new_order, 1):
                temp_chapter_dir = temp_dir / f"chapter{self.format_number(old_chapter_num)}"
                new_chapter_dir = part_dir / f"chapter{self.format_number(new_pos)}"
                temp_chapter_dir.rename(new_chapter_dir)
                
                # Rename the tex file
                old_tex = new_chapter_dir / f"chapter{self.format_number(old_chapter_num)}.tex"
                new_tex = new_chapter_dir / f"chapter{self.format_number(new_pos)}.tex"
                if old_tex.exists():
                    old_tex.rename(new_tex)
                    self.update_tex_file_content(part_num, new_pos, old_chapter_num)
            
            # Clean up temp directory
            shutil.rmtree(temp_dir)
            
            # Update part file
            self.update_part_includes(part_num)
            
            print(f"Successfully reordered chapters in part {part_num}")
            return True
            
        except Exception as e:
            print(f"Error during reordering: {e}")
            if temp_dir.exists():
                shutil.rmtree(temp_dir)
            return False
    
    def show_structure(self, part_num: Optional[int] = None):
        """Show current book structure"""
        print("\nCurrent Book Structure:")
        print("=" * 60)
        
        parts_to_show = [part_num] if part_num else self.get_existing_parts()
        
        if not parts_to_show:
            print("No parts found.")
            return
        
        for part in parts_to_show:
            print(f"Part {self.format_number(part)}")
            chapters = self.get_existing_chapters(part)
            if not chapters:
                print("   No chapters found")
            else:
                for chapter in chapters:
                    chapter_dir = self.base_dir / f"part{self.format_number(part)}" / f"chapter{self.format_number(chapter)}"
                    tex_file = chapter_dir / f"chapter{self.format_number(chapter)}.tex"
                    
                    # Try to extract chapter title from tex file
                    title = "Unknown Title"
                    if tex_file.exists():
                        try:
                            with open(tex_file, 'r', encoding='utf-8') as f:
                                content = f.read()
                                match = re.search(r'\\chapter\{([^}]+)\}', content)
                                if match:
                                    title = match.group(1)
                        except:
                            pass
                    
                    print(f"   Chapter {self.format_number(chapter)}: {title}")
            print()

def main():
    print("Advanced Chapter Management System")
    print("=" * 60)
    
    manager = ChapterManager()
    
    while True:
        print("\nAvailable Operations:")
        print("1. Show structure")
        print("2. Insert chapter")
        print("3. Delete chapter")
        print("4. Reorder chapters")
        print("5. Show specific part")
        print("6. List backups")
        print("0. Exit")
        
        choice = input("\nEnter your choice (0-6): ").strip()
        
        if choice == '0':
            print("Goodbye!")
            break
        
        elif choice == '1':
            manager.show_structure()
        
        elif choice == '2':
            try:
                part_num = int(input("Enter part number: "))
                position = int(input("Enter position to insert at: "))
                title = input("Enter chapter title (or press Enter for default): ").strip()
                
                if not title:
                    title = None
                
                if manager.insert_chapter(part_num, position, title):
                    print("Chapter inserted successfully!")
                    manager.show_structure(part_num)
                
            except ValueError:
                print("Error: Invalid input!")
            except Exception as e:
                print(f"Error: {e}")
        
        elif choice == '3':
            try:
                part_num = int(input("Enter part number: "))
                chapter_num = int(input("Enter chapter number to delete: "))
                
                confirm = input(f"Are you sure you want to delete chapter {chapter_num} from part {part_num}? (y/N): ").strip().lower()
                
                if confirm == 'y':
                    if manager.delete_chapter(part_num, chapter_num):
                        print("Chapter deleted successfully!")
                        manager.show_structure(part_num)
                else:
                    print("Operation cancelled.")
                
            except ValueError:
                print("Error: Invalid input!")
            except Exception as e:
                print(f"Error: {e}")
        
        elif choice == '4':
            try:
                part_num = int(input("Enter part number: "))
                existing_chapters = manager.get_existing_chapters(part_num)
                
                if not existing_chapters:
                    print(f"No chapters found in part {part_num}")
                    continue
                
                print(f"Current chapters: {existing_chapters}")
                new_order_input = input("Enter new order (comma-separated, e.g. 3,1,2,4): ").strip()
                
                new_order = [int(x.strip()) for x in new_order_input.split(',')]
                
                if manager.reorder_chapters(part_num, new_order):
                    print("Chapters reordered successfully!")
                    manager.show_structure(part_num)
                
            except ValueError:
                print("Error: Invalid input!")
            except Exception as e:
                print(f"Error: {e}")
        
        elif choice == '5':
            try:
                part_num = int(input("Enter part number: "))
                manager.show_structure(part_num)
                
            except ValueError:
                print("Error: Invalid input!")
        
        elif choice == '6':
            backup_dir = Path(".backups")
            if backup_dir.exists():
                backups = list(backup_dir.glob("part*_backup_*"))
                if backups:
                    print("\nAvailable backups:")
                    for backup in sorted(backups):
                        print(f"  {backup.name}")
                else:
                    print("No backups found.")
            else:
                print("No backup directory found.")
        
        else:
            print("Invalid choice!")

if __name__ == "__main__":
    main()