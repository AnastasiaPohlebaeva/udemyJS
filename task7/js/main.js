let btnStart = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    daybudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalexpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthsavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearsavingsValue = document.getElementsByClassName('yearsavings-value')[0],
    inputsExp = document.getElementsByClassName('expenses-item'),
    expensesBtn = document.getElementsByTagName('button')[0],
    optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBudgetBtn = document.getElementsByTagName('button')[2],
    optionalExpensesItems = document.querySelectorAll('.optionalexpenses-item'),
    chooseIncomes = document.querySelector('.choose-income'),
    savingsCheck = document.querySelector('#savings'),
    chooseSum = document.querySelector('#sum'),
    choosePercent = document.querySelector('#percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

let money, time;


let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};

optionalExpensesBtn.disabled = true;
countBudgetBtn.disabled = true;
optionalExpensesItems.disabled = true;

btnStart.addEventListener('click', function () {
    time = prompt('Введите дату в формате YYYY-MM-DD', '2019-02-01');
    money = +prompt('Ваш бюджет на месяц?');

    while (money == null || money == "" || isNaN(money)) {
        money = +prompt('Ваш бюджет на месяц?');
    }

    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = appData.budget;
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDay();

    optionalExpensesBtn.disabled = false;
    countBudgetBtn.disabled = false;
    optionalExpensesItems.disabled = false;
});

expensesBtn.addEventListener('click', function () {
    let sum = 0;
    for (let i = 0; i < inputsExp.length; i++) {
        let a = inputsExp[i].value,
            b = inputsExp[++i].value;

        if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 30) {
            appData.expenses[a] = b;
            sum += +b;
        } else {
            i = i - 1;
        }
        expensesValue.textContent = sum;
    }
});

countBudgetBtn.addEventListener('click', function () {
    appData.dailyMoney = ((appData.budget - +expensesValue.textContent) / 30).toFixed();
    daybudgetValue.textContent = appData.dailyMoney;

    if (appData.dailyMoney <= 100) {
        levelValue.textContent = 'Минимальный уровень достатка';
    } else if (appData.dailyMoney > 100 && appData.dailyMoney <= 2000) {
        levelValue.textContent = 'Средний уровень достатка';
    } else if (appData.dailyMoney > 2000) {
        levelValue.textContent = 'Высокий уровень достатка';
    } else {
        levelValue.textContent = 'Что-то пошло не так';
    }
});

optionalExpensesBtn.addEventListener('click', function () {
    for (let i = 0; i < optionalExpensesItems.length; i++) {
        let opt = optionalExpensesItems[i].value;
        appData.optionalExpenses[i] = opt;
        optionalexpensesValue.textContent += appData.optionalExpenses[i] + " ";
    }
});

chooseIncomes.addEventListener('input', function () {
    let items = chooseIncomes.value;
    appData.income = items.split(', ');
    incomeValue.textContent = appData.income;
});

savingsCheck.addEventListener('click', function () {
    if (appData.savings) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

chooseSum.addEventListener('input', function () {
    if (appData.savings) {
        let summ = +chooseSum.value,
            percent = +choosePercent.value;
        appData.monthIncome = summ/100/12*percent;
        appData.yearIncome = summ/100*percent;
        monthsavingsValue.textContent = appData.monthIncome.toFixed();
        yearsavingsValue.textContent = appData.yearIncome.toFixed();
    }
});

choosePercent.addEventListener('input', function () {
    if (appData.savings) {
        let summ = +chooseSum.value,
            percent = +choosePercent.value;
        appData.monthIncome = summ/100/12*percent;
        appData.yearIncome = summ/100*percent;
        monthsavingsValue.textContent = appData.monthIncome.toFixed();
        yearsavingsValue.textContent = appData.yearIncome.toFixed();
    }
});