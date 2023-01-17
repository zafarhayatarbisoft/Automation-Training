/* Create a SavingsAccount class. 
Use a static data member annualInterestRate to store the annual interest rate for each of the savers. 
Each member of the class contains a private data member savingsBalance indicating the amount the saver currently has on deposit.
Provide member function calculateMonthlyInterest that calculates the monthly
interest by multiplying the  balance  by  annualInterestRate  divided  by  12;  this  interest
should be added to savingsBalance.
Provide a static member function modifyInterestRate that sets the static annualInterestRate to a new value. 
Write a driver program to test class SavingsAccount.
Instantiate two different objects of class SavingsAccount, saver1 and saver2, with balances of 2000 and 3000,respectively. 
Set the annualInterestRate to 3 percent. Then calculate the monthly interest and print the new balances for each of the savers. Then set the annualInterestRate to 4 percent, calculate the next month's interest and print the new
balances for each of the savers.
*/

class SavingsAccount {
    static annualInterestRate = 0; // static data member
    constructor(savingsBalance) {
      this.savingsBalance = savingsBalance; // private data member
    }
  
    calculateMonthlyInterest() {
      let monthlyInterest = (this.savingsBalance * SavingsAccount.annualInterestRate) / 12;
      this.savingsBalance += monthlyInterest;
    }
  
    static modifyInterestRate(newRate) {
      SavingsAccount.annualInterestRate = newRate;
    }
  }
  let saver1 = new SavingsAccount(2000);
  let saver2 = new SavingsAccount(3000);
  
  SavingsAccount.modifyInterestRate(0.03); // set annualInterestRate to 3%
  saver1.calculateMonthlyInterest();
  saver2.calculateMonthlyInterest();
  console.log("Monthly 3% Interest for saver1 is: "+saver1.savingsBalance); // should be 2060
  console.log("Monthly 3% interest for saver2 is: "+saver2.savingsBalance); // should be 3090
  
  SavingsAccount.modifyInterestRate(0.04); // set annualInterestRate to 4%
  saver1.calculateMonthlyInterest();
  saver2.calculateMonthlyInterest();
  console.log("Monthly 4% interest for saver1 is: "+saver1.savingsBalance); // should be 2115.2
  console.log("Monthly 4% interest for saver2 is: "+saver2.savingsBalance); // should be 3170.4 