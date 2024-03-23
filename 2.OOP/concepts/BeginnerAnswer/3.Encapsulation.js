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
  