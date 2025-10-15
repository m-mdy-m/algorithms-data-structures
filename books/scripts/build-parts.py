#!/usr/bin/env python3
# This script helps us avoid repetitive tasks like creating chapters or deleting and adding different parts.
import os
import sys
from pathlib import Path
from typing import List, Dict, Tuple
from book_manager import MultiBookManager
class BookStructureManager:
    def __init__(self, parts_dir: Path):
        self.base_dir = parts_dir
        self.default_chapters_per_part = 8
        self.part_template = self.get_part_template()
        self.chapter_template = self.get_chapter_template()
    def get_part_template(self) -> str:
        return ''

    def get_chapter_template(self) -> str:
        return ''

    def create_directory_structure(self):
        self.base_dir.mkdir(parents=True, exist_ok=True)
        print(f"✓ Base directory created: {self.base_dir}")

    def format_number(self, num: int) -> str:
        return f"{num:02d}"

    def get_existing_parts(self) -> List[int]:
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

    def create_part(self, part_num: int, part_title: str = None, chapters: List[int] = None) -> bool:

        part_dir_name = f"part{self.format_number(part_num)}"
        part_dir = self.base_dir / part_dir_name
        
        if part_dir.exists():
            print(f"⚠️  Part {part_num} already exists. Skipping...")
            return False
        
        part_dir.mkdir(parents=True, exist_ok=True)
        
        if part_title is None:
            part_title = f"Part {part_num} Title"
        
        if chapters is None:
            chapters = list(range(1, self.default_chapters_per_part + 1))
        
        chapter_includes = []
        for chapter_num in chapters:
            if self.create_chapter(part_num, chapter_num):
                chapter_includes.append(f"\\input{{parts/part{self.format_number(part_num)}/chapter{self.format_number(chapter_num)}/chapter{self.format_number(chapter_num)}}}")
        
        part_content = self.part_template.format(
            part_num=self.format_number(part_num),
            part_title=part_title,
            chapter_includes='\n'.join(chapter_includes)
        )
        
        part_file = part_dir / f"part{self.format_number(part_num)}.tex"
        with open(part_file, 'w', encoding='utf-8') as f:
            f.write(part_content)
        
        print(f"✓ Part {part_num} created with {len(chapters)} chapters")
        return True

    def create_chapter(self, part_num: int, chapter_num: int, chapter_title: str = None) -> bool:
        part_dir = self.base_dir / f"part{self.format_number(part_num)}"
        chapter_dir_name = f"chapter{self.format_number(chapter_num)}"
        chapter_dir = part_dir / chapter_dir_name
        
        if chapter_dir.exists():
            print(f"⚠️  Chapter {chapter_num} in Part {part_num} already exists. Skipping...")
            return False
        

        chapter_dir.mkdir(parents=True, exist_ok=True)
        
        if chapter_title is None:
            chapter_title = f"Chapter {chapter_num} Title"
        
        chapter_content = self.chapter_template.format(
            chapter_num=self.format_number(chapter_num),
            chapter_title=chapter_title
        )
        
        chapter_file = chapter_dir / f"chapter{self.format_number(chapter_num)}.tex"
        with open(chapter_file, 'w', encoding='utf-8') as f:
            f.write(chapter_content)
        
        print(f"  ✓ Chapter {chapter_num} created")
        return True

    def delete_part(self, part_num: int) -> bool:
        part_dir = self.base_dir / f"part{self.format_number(part_num)}"
        
        if not part_dir.exists():
            print(f"❌ Part {part_num} does not exist")
            return False
        
        import shutil
        shutil.rmtree(part_dir)
        print(f"🗑️  Part {part_num} deleted")
        return True

    def add_chapters_to_part(self, part_num: int, start_chapter: int, num_chapters: int):
        part_dir = self.base_dir / f"part{self.format_number(part_num)}"
        
        if not part_dir.exists():
            print(f"❌ Part {part_num} does not exist")
            return
        
        existing_chapters = self.get_existing_chapters(part_num)
        new_chapters = []
        
        for i in range(num_chapters):
            chapter_num = start_chapter + i
            if chapter_num not in existing_chapters:
                if self.create_chapter(part_num, chapter_num):
                    new_chapters.append(chapter_num)
        
        if new_chapters:
            self.update_part_file(part_num)
            print(f"✓ Added {len(new_chapters)} new chapters to Part {part_num}")

    def update_part_file(self, part_num: int):
        part_dir = self.base_dir / f"part{self.format_number(part_num)}"
        part_file = part_dir / f"part{self.format_number(part_num)}.tex"
        
        existing_chapters = self.get_existing_chapters(part_num)
        chapter_includes = []
        
        for chapter_num in existing_chapters:
            chapter_includes.append(f"\\input{{parts/part{self.format_number(part_num)}/chapter{self.format_number(chapter_num)}/chapter{self.format_number(chapter_num)}}}")
        
        part_content = self.part_template.format(
            part_num=self.format_number(part_num),
            part_title=f"Part {part_num} Title",
            chapter_includes='\n'.join(chapter_includes)
        )
        
        with open(part_file, 'w', encoding='utf-8') as f:
            f.write(part_content)

    def show_structure(self):
        print("\n📚 Current Book Structure:")
        print("=" * 50)
        
        existing_parts = self.get_existing_parts()
        if not existing_parts:
            print("No parts found.")
            return
        
        for part_num in existing_parts:
            print(f"📖 Part {self.format_number(part_num)}")
            chapters = self.get_existing_chapters(part_num)
            for chapter_num in chapters:
                print(f"   📄 Chapter {self.format_number(chapter_num)}")
            print()

def main():
    print("📚 Book Structure Manager")
    print("=" * 50)
    # Initialize multi-book manager
    book_manager = MultiBookManager()
    if not book_manager.select_book():
        print("❌ No book selected. Exiting...")
        return
    parts_dir = book_manager.get_parts_directory()
    manager = BookStructureManager(parts_dir)
    manager.create_directory_structure()
    print(f"\n📖 Working on: {book_manager.current_book}")
    print(f"📁 Parts directory: {parts_dir}")
    while True:
        print("\n🔧 Available Options:")
        print("1. Create default structure (8 parts, 8 chapters each)")
        print("2. Create specific part")
        print("3. Add chapters to existing part")
        print("4. Delete part")
        print("5. Show current structure")
        print("6. Create custom range of parts")
        print("0. Exit")
        
        choice = input("\nEnter your choice (0-6): ").strip()
        
        if choice == '0':
            print("👋 Goodbye!")
            break
            
        elif choice == '1':
            print("\n🏗️  Creating default structure...")
            for part_num in range(1, 9):
                manager.create_part(part_num)
            print("✅ Default structure created!")
            
        elif choice == '2':
            try:
                part_num = int(input("Enter part number: "))
                part_title = input("Enter part title (or press Enter for default): ").strip()
                if not part_title:
                    part_title = None
                
                chapters_input = input("Enter chapter numbers (e.g., 1,2,3 or press Enter for default 1-8): ").strip()
                if chapters_input:
                    chapters = [int(x.strip()) for x in chapters_input.split(',')]
                else:
                    chapters = None
                
                manager.create_part(part_num, part_title, chapters)
                
            except ValueError:
                print("❌ Invalid input!")
                
        elif choice == '3':
            try:
                part_num = int(input("Enter part number: "))
                start_chapter = int(input("Enter starting chapter number: "))
                num_chapters = int(input("Enter number of chapters to add: "))
                
                manager.add_chapters_to_part(part_num, start_chapter, num_chapters)
                
            except ValueError:
                print("❌ Invalid input!")
                
        elif choice == '4':
            try:
                part_num = int(input("Enter part number to delete: "))
                confirm = input(f"Are you sure you want to delete Part {part_num}? (y/N): ").strip().lower()
                
                if confirm == 'y':
                    manager.delete_part(part_num)
                else:
                    print("Cancelled.")
                    
            except ValueError:
                print("❌ Invalid input!")
                
        elif choice == '5':
            manager.show_structure()
            
        elif choice == '6':
            try:
                start_part = int(input("Enter starting part number: "))
                end_part = int(input("Enter ending part number: "))
                chapters_per_part = input("Enter chapters per part (or press Enter for 8): ").strip()
                
                if not chapters_per_part:
                    chapters_per_part = 8
                else:
                    chapters_per_part = int(chapters_per_part)
                
                print(f"\n🏗️  Creating parts {start_part} to {end_part}...")
                for part_num in range(start_part, end_part + 1):
                    chapters = list(range(1, chapters_per_part + 1))
                    manager.create_part(part_num, chapters=chapters)
                    
                print("✅ Custom range created!")
                
            except ValueError:
                print("❌ Invalid input!")
        
        else:
            print("❌ Invalid choice!")

if __name__ == "__main__":
    main()