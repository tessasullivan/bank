// Business logic for Bank
function Bank() {
  this.accounts = [],
  this.currentId = 0
}

Bank.prototype.addAccount = function(account) {
  account.id = this.assignId();
  this.accounts.push(account);
}

Bank.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

function Account(name, balance) {
  this.name = name,
  this.balance = balance
}

Account.prototype.getBalance = function() {
  return this.balance;
}

Account.prototype.depositMoney = function(depositAmt) {
  this.balance += depositAmt;
}
Account.prototype.withdrawMoney = function(withdrawalAmt) {
  this.balance -= withdrawalAmt;
}
var myAccount = new Account("Tessa", 450);
myAccount.withdrawMoney(500);
console.log(myAccount.getBalance());

// User logic

$(document).ready(function() {

  $("form#new-contact").submit(function(event) {

  });
});
