class Account {
  #balance;

  constructor(balance) {
    this.#balance = balance;
  }

  getInfo() {
    return `Balance: ${this.#balance}`;
  }
}

class SavingsAccount extends Account {
  getInfo() {
    return `Savings ${super.getInfo()}`;
  }
}

const account1 = new Account(1000);
const account2 = new SavingsAccount(2500);

console.log(account1.getInfo());
console.log(account2.getInfo());
