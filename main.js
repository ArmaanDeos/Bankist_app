'use Strict';

/* -------------------------------------------------------------------------- */
/*                          Bankist Application...                            */
/* -------------------------------------------------------------------------- */

// Data
const account1 = {
  owner: 'Armaan Ahmad',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

/* -------------------------------------------------------------------------- */
/*                                //  ! Elements                              */
/* -------------------------------------------------------------------------- */

const containerMovements = document.querySelector('.movements');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelLoginUser = document.querySelector('.login__input--user');
const labelLoginPin = document.querySelector('.login__input--pin');
const labelWelcome = document.querySelector('.welcome');
const loginBtn = document.querySelector('.login__btn');
const containerApp = document.querySelector('.app');
const InputAmountTransferTo = document.querySelector('.form__input--to');
const InputAmountTransfer = document.querySelector('.form__input--amount');
const transferBtn = document.querySelector('.form__btn--transfer');
const inputCloseUser = document.querySelector('.form__input--user');
const inputCloseUserPin = document.querySelector('.form__input--pin');
const inputCloseBtn = document.querySelector('.form__btn--close');
const inputRequestLoan = document.querySelector('.form__input--loan-amount');
const inputRequestLoanBtn = document.querySelector('.form__btn--loan');
const sortBtn = document.querySelector('.btn--sort');
/* -------------------------------------------------------------------------- */
/*                             //  ! Functionality                            */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                     // ? #1_Display transaction details                    */
/* -------------------------------------------------------------------------- */

// we perform sorting functionality into displayTransaction.

const displayTransaction = function (movement, sort = false) {
  // first empty html movements element
  containerMovements.innerHTML = '';

  // sorting movements
  const sortMovs = sort ? movement.slice().sort((a, b) => a - b) : movement;

  // looping over an array
  sortMovs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    // html
    const html = `
    <div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
    <div class="movements__value">${mov} Rs.</div>
  </div>
    `;

    // add the html to parent html
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

/* -------------------------------------------------------------------------- */
/*                       #2_Calculate Total Balance & Print                   */
/* -------------------------------------------------------------------------- */
const calcDisplayBalance = function (acc) {
  // acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  // // acc.balance = balance; // store balance
  // // console.log(`MyCurrentBalance - ${balance}`);
  // labelBalance.textContent = `${acc.balance} INR`;
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}INR`;
};

/* -------------------------------------------------------------------------- */
/*                        #3_Calculate Transaction Summary                    */
/* -------------------------------------------------------------------------- */

const calcDisplaySummary = function (acc) {
  // income/deposit
  const income = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${income} INR`;

  // outcome/withdrawal
  const outcome = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(outcome)} INR`;

  // suppose interest is 1.2 % per deposit

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    // Note: condition, bank wants to pay interest if interest amount will be >=1%
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest} INR`;
};

/* -------------------------------------------------------------------------- */
/*                           Update UI functionality                          */
/* -------------------------------------------------------------------------- */

const updateUI = function (acc) {
  // Display balance
  calcDisplayBalance(acc);
  // Display Transaction
  displayTransaction(acc.movements);
  // Display Summary
  calcDisplaySummary(acc);
};

/* -------------------------------------------------------------------------- */
/*                           #4_Login Functionality                           */
/* -------------------------------------------------------------------------- */
let currentAccount;
loginBtn.addEventListener('click', function (e) {
  // Prevent form submitting
  e.preventDefault();
  currentAccount = accounts.find(acc => acc.username === labelLoginUser.value);
  // console.log(currentAccount);
  if (currentAccount && currentAccount.pin === Number(labelLoginPin.value)) {
    // Display ui and welcome message
    labelWelcome.textContent = `Welcome back ${
      currentAccount.owner.split(' ')[0]
    }`;
    labelLoginUser.value = labelLoginPin.value = '';
    labelLoginPin.blur();
    // Display main screen
    containerApp.style.opacity = 100;

    // UpdateUi
    updateUI(currentAccount);
  }
});

/* -------------------------------------------------------------------------- */
/*                         #5_Transfer Implementation                         */
/* -------------------------------------------------------------------------- */

transferBtn.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(InputAmountTransfer.value);
  const receiverAcc = accounts.find(
    acc => acc.username === InputAmountTransferTo.value
  );
  // clean input field
  InputAmountTransfer.value = InputAmountTransferTo.value = '';
  // InputAmountTransferTo.blur();

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
});

// 1.check if the user account have sufficent amount to transfer to other accoutn,if amount is > user amount the denied it.

/* -------------------------------------------------------------------------- */
/*                       Delete Account / Close Account                       */
/* -------------------------------------------------------------------------- */

inputCloseBtn.addEventListener('click', function (e) {
  e.preventDefault();
  // check all credentials are correct or not

  if (
    inputCloseUser.value === currentAccount.username &&
    Number(inputCloseUserPin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);

    // Delete account
    accounts.splice(index, 1);

    // Delete UI / Hide Ui
    containerApp.style.opacity = 0;
    alert(`${currentAccount.owner}, Are you sure to delete Account?   `);
  }
  // clear input fields
  inputCloseUser = inputCloseUserPin = '';
});

/* -------------------------------------------------------------------------- */
/*                                Request Loan                                */
/* -------------------------------------------------------------------------- */

inputRequestLoanBtn.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputRequestLoan.value);
  // check condition deposite of 10%

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    //add movements
    currentAccount.movements.push(amount);
    // update ui
    updateUI(currentAccount);
  }
  alert(
    `Loan of amount ${amount} is add in your account ${currentAccount.owner}😊`
  );
  // clear input
  inputRequestLoan.value = '';

  // console.log('Loan Request');
});

/* -------------------------------------------------------------------------- */
/*                                   Sorting                                  */
/* -------------------------------------------------------------------------- */

let sorted = false;
sortBtn.addEventListener('click', function (e) {
  e.preventDefault();
  displayTransaction(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/* -------------------------------------------------------------------------- */
/*                           #_Compute username                              */
/* -------------------------------------------------------------------------- */

const createUserName = function (accs) {
  /* ---  create an object inside same array of object with name username --- */
  /* --- if we don't want any new array , modify same array then use forEach -- */

  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUserName(accounts);
// console.log(accounts);
