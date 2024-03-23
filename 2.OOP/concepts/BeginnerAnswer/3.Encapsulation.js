'1:'
class BankAccount {
    constructor(balance, accountNumber, owner) {
      this._balance = balance;
      this._accountNumber = accountNumber;
      this._owner = owner;
    }
  
    // Method to check the account balance
    checkBalance() {
      return this._balance;
    }
  
    // Method to retrieve account information
    infoAccount() {
      return {
        accountNumber: this._accountNumber,
        owner: this._owner,
        balance: this._balance
      };
    }
  
    // Method for depositing money into the account
    deposit(amount, accountNumber) {
      if (accountNumber === this._accountNumber) {
        this._balance += amount;
      } else {
        throw new Error('Account number not found');
      }
    }
  
    // Method for withdrawing money from the account
    withdraw(amount, accountNumber) {
      if (accountNumber === this._accountNumber) {
        if (amount > this._balance) {
          throw new Error('Insufficient funds');
        } else if (amount === this._balance) {
          throw new Error('Cannot withdraw all funds');
        }
        this._balance -= amount;
      } else {
        throw new Error('Account number not found');
      }
    }
  }
  
  // Example usage:
  const account = new BankAccount(1000, 234, 'Mahdi');
  console.log(account.checkBalance()); // Output: 1000
  account.deposit(500, 234);
  console.log(account.checkBalance()); // Output: 1500
  account.withdraw(200, 234);
  console.log(account.checkBalance()); // Output: 1300
  console.log(account.infoAccount()); // Output: { accountNumber: 234, owner: 'Mahdi', balance: 1300 }
  
  '2:'
  class Book {
    constructor(title, author, ISBN) {
      this._title = title;
      this._author = author;
      this._ISBN = ISBN;
    }
  
    // Method to get book title
    getTitle() {
      return this._title;
    }
  
    // Method to get book author
    getAuthor() {
      return this._author;
    }
  
    // Method to get book ISBN
    getISBN() {
      return this._ISBN;
    }
  }
  
  class Library {
    constructor() {
      this._catalog = [];
    }
  
    // Method to add a book to the library catalog
    addBook(book) {
      this._catalog.push(book);
    }
  
    // Method to remove a book from the library catalog
    removeBook(ISBN) {
      this._catalog = this._catalog.filter(book => book.getISBN() !== ISBN);
    }
  
    // Method to search for a book by title
    searchByTitle(title) {
      return this._catalog.filter(book => book.getTitle().toLowerCase().includes(title.toLowerCase()));
    }
  
    // Method to search for a book by author
    searchByAuthor(author) {
      return this._catalog.filter(book => book.getAuthor().toLowerCase().includes(author.toLowerCase()));
    }
  
    // Method to search for a book by ISBN
    searchByISBN(ISBN) {
      return this._catalog.find(book => book.getISBN() === ISBN);
    }
  
    // Method to check out a book
    checkoutBook(ISBN, borrowerName) {
      const book = this.searchByISBN(ISBN);
      if (book) {
        book._borrower = borrowerName;
        return `${book.getTitle()} has been checked out by ${borrowerName}.`;
      } else {
        return `Book with ISBN ${ISBN} not found in the library.`;
      }
    }
  
    // Method to check in a book
    checkinBook(ISBN) {
      const book = this.searchByISBN(ISBN);
      if (book) {
        book._borrower = null;
        return `${book.getTitle()} has been checked in successfully.`;
      } else {
        return `Book with ISBN ${ISBN} not found in the library.`;
      }
    }
  }
  
  // Example usage:
  const book1 = new Book("Shah nameh", "Lord of the Rings", "1234");
  const book2 = new Book("Hobbit", "The Power of Imperfect Starts", "5678");
  
  const library = new Library();
  library.addBook(book1);
  library.addBook(book2);
  
  console.log(library.searchByTitle("great")); // Output: [Book]
  console.log(library.searchByAuthor("harper")); // Output: [Book]
  console.log(library.searchByISBN("1234")); // Output: Book
  
  console.log(library.checkoutBook("1234", "Mahdi")); // Output: "Shah nameh has been checked out by Mahdi."
  console.log(library.checkinBook("1234")); // Output: "Shah nameh has been checked in successfully."
  