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
// var myAccount = new Account("Tessa", 450);
// myAccount.withdrawMoney(500);
// console.log(myAccount.getBalance());

// User logic

$(document).ready(function() {
  var action;
  $('#addAccount', '#changeAccount').click(function() {
    if (this.id === 'addAccount') {
      action = 'addAccount';
        console.log (action);
    } else if (this.id === 'changeAccount') {
      action = 'changeAccount';
        console.log (action);
    }
  });



  $("form#bank").submit(function(event) {
    event.preventDefault();
    var name = $("#userName").val();
    var initDeposit = parseFloat($("#initDeposit").val());
    var depositAmt = parseFloat($('#depositAmt').val());
    var withdrawalAmt = parseFloat($('#withdrawalAmt').val());

    if (action === 'addAccount') {
      var myAccount = new Account(name, initDeposit);
    } else if (action === 'changeAccount') {
      // if they have entered values in both fields, error
      if (depositAmt && withdrawalAmt) {
        alert ("Please enter either Deposit or Withdrawal, not both");
      } //else if (depositAmt)
    }

    // Check for valid input
    // if ( isNaN(parseFloat($('#initDeposit').val())) || isNaN(parseFloat($('#depositAmt').val())) || isNaN(parseFloat($('#withdrawalAmt').val()))) {
    //   alert ("Please enter a number");
    // }
  });
});
