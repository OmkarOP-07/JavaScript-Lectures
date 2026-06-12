// Tasks

// Create the following functions:
// 1. checkBalance(account)
// Displays the current balance of the account.
// Example:
// Current Balance of Omkar: ₹50000

// 2. deposit(account, amount)
// Deposits the given amount into the account.
// Example:
// deposit(account1, 10000);
// Output:
// ₹10000 deposited successfully.
// New Balance: ₹60000

// 3. withdraw(account, amount)
// Withdraws the amount only if sufficient balance is available.
// Example:
// withdraw(account2, 5000);
// Output:
// ₹5000 withdrawn successfully.
// New Balance: ₹25000
// If balance is insufficient:
// Insufficient Balance!

// 4. transfer(sender, receiver, amount)
// Transfers money from one account to another.
// Example:
// transfer(account1, account2, 15000);
// Output:
// Transfer Successful!
// ₹15000 transferred from Omkar to Rohit.
// Balances should be updated accordingly.

// 5. displayAccountDetails(account)
// Displays all account information.
// Example:
// Account Number: 101
// Holder Name: Omkar
// Balance: ₹45000

const account1 = {
    name : "Omkar", 
    acc_no : 123,
    balance : 10000
};

const account2 = {
    name : "Jay", 
    acc_no : 124,
    balance : 20000
};

// deposit(account, amount)
// Deposits the given amount into the account.
// Example:
// deposit(account1, 10000);
// Output:
// ₹10000 deposited successfully.
// New Balance: ₹60000

function deposit(account, amount){
    account.balance += amount;
    console.log(`₹ ${amount} deposited successfully.`);
    console.log(`New Balance: ₹ ${account.balance}`)
}

// 4. transfer(sender, receiver, amount)
// Transfers money from one account to another.
// Example:
// transfer(account1, account2, 15000);
// Output:
// Transfer Successful!
// ₹15000 transferred from Omkar to Rohit.
// Balances should be updated accordingly.

function transfer(sender, receiver, amount){
    if(sender.balance < amount){
        console.log("Insufficient balance in sender account.")
    } else {
        sender.balance -= amount;
        receiver.balance += amount;
        console.log(`Transfer Successful!`);
        console.log(`₹ ${amount} transferred from ${sender.name} to ${receiver.name}`)
    }
}

transfer(account1, account2, 10000)

// 5. displayAccountDetails(account)
// Displays all account information.
// Example:
// Account Number: 101
// Holder Name: Omkar
// Balance: ₹45000

function displayAccountDetails(account){
    console.log(`Account Number: ${account.acc_no} \nHolder Name: ${account.name} \nBalance: ₹${account.balance}`);
}

displayAccountDetails(account1)