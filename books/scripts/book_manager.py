import os
import sys
from pathlib import Path
from typing import List, Dict, Tuple, Optional

class MultiBookManager:
    def __init__(self, books_base_dir: str = "books"):
        self.books_base_dir = Path(books_base_dir)
        print('books_base_dir:',self.books_base_dir)
        self.current_book = None
        self.current_book_path = None
        
    def get_available_books(self) -> List[str]:
        """Get list of available books in books directory"""
        if not self.books_base_dir.exists():
            return []
        
        books = []
        for item in self.books_base_dir.iterdir():
            if item.is_dir() and not item.name.startswith('.'):
                # Check if it has a main.tex file
                if (item / "main.tex").exists():
                    books.append(item.name)
        return sorted(books)
    
    def select_book(self) -> bool:
        """Interactive book selection"""
        books = self.get_available_books()
        
        if not books:
            print("❌ No books found in 'books/' directory")
            return False
        
        print("\n📚 Available Books:")
        print("=" * 60)
        for idx, book in enumerate(books, 1):
            print(f"{idx}. {book}")
        
        while True:
            choice = input("\nSelect a book (number): ").strip()
            try:
                choice_idx = int(choice) - 1
                if 0 <= choice_idx < len(books):
                    self.current_book = books[choice_idx]
                    self.current_book_path = self.books_base_dir / self.current_book
                    print(f"\n✓ Selected book: {self.current_book}")
                    return True
                else:
                    print("❌ Invalid selection!")
            except ValueError:
                print("❌ Please enter a valid number!")
    
    def get_parts_directory(self) -> Path:
        """Get the parts directory for current book"""
        if not self.current_book_path:
            raise ValueError("No book selected!")
        return self.current_book_path / "parts"