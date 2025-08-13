class BankAccount {
  public accountNumber: string;
  protected balance: number;
  protected history: string[];
  protected status: string;

  constructor(accountNumber: string) {
    this.accountNumber = accountNumber;
    this.balance = 0;
    this.history = [];
    this.status = "active";
  }

  deposit(amount: number): void {
    if (amount > 0 && this.status === "active") {
      this.balance += amount;
      this.history.push(`Nạp tiền: +${amount} VND vào lúc 09:51 AM +07, 13/08/2025`);
    }
  }

  withdraw(amount: number): void {
    if (amount > 0 && this.balance >= amount && this.status === "active") {
      this.balance -= amount;
      this.history.push(`Rút tiền: -${amount} VND vào lúc 09:51 AM +07, 13/08/2025`);
    }
  }

  showHistory(): void {
    console.log(`Lịch sử giao dịch tài khoản ${this.accountNumber}:`);
    if (this.history.length === 0) {
      console.log("Không có giao dịch nào.");
    } else {
      this.history.forEach((entry, index) => {
        console.log(`${index + 1}. ${entry}`);
      });
    }
  }
}

class SavingAccount extends BankAccount {
  protected interestRate: number;

  constructor(accountNumber: string, interestRate: number) {
    super(accountNumber);
    this.interestRate = interestRate;
  }

  withdraw(amount: number): void {
    if (amount > 0 && this.balance >= amount && this.balance - amount >= 0 && this.status === "active") {
      this.balance -= amount;
      this.history.push(`Rút tiền: -${amount} VND vào lúc 09:51 AM +07, 13/08/2025`);
    }
  }
}

const savingAccount = new SavingAccount("SAV001", 0.05);

savingAccount.deposit(1000000); 
savingAccount.withdraw(500000); 
savingAccount.withdraw(600000); 

savingAccount.showHistory();