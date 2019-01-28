'use strict';

let money, time;

function start() {
    money = +prompt('Ваш бюджет на месяц?');
    time = prompt('Введите дату в формате YYYY-MM-DD', '2019-02-01');

    while (money == null || money == "" || isNaN(money)) {
        money = +prompt('Ваш бюджет на месяц?');
    }
}
start();

let appData = {
    
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
    
    chooseExpenses: function() {
        for (let i = 0; i < 2; i++) {
            let a = prompt('Введите обязательную статью расходов в этом месяце'),
                b = prompt('Во сколько обойдется?');
            
            if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 30) {
                appData.expenses[a] = b;
            } else {
                --i;
            }
        }
    },
    
    detectDayBudget: function() {
        /*let summ = 0;
        for (let i in appData.expenses) {
            if (appData.expenses.hasOwnProperty(i)) {
                summ += parseInt(appData.expenses[i], 10);
            }
        }*/
        appData.dailyMoney = appData.budget / 30;
        alert((appData.dailyMoney).toFixed(1) + 'руб в день');
    },
    
    detectLevel: function() {
        if (appData.dailyMoney < 100) {
            console.log('Минимальный уровень достатка');
        } else if (appData.dailyMoney > 100 && appData.dailyMoney < 2000) {
            console.log('Средний уровень достатка');
        } else if (appData.dailyMoney > 2000) {
            console.log('Высокий уровень достатка');
        } else {
            console.log('Что-то пошло не так');
        }
    },
    
    checkSavings: function() {
        if (appData.savings) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");
            appData.monthIncome = save/100/12*percent;
            alert("Доход в месяц с депозита: " + appData.monthIncome);
        }
    },
    
    chooseOptExpenses: function() {
        for (let i = 0; i < 3; i++) {
            let opt = prompt('Статья необязательных расходов', '');
            appData.optionalExpenses = opt;
        }
    },
    
    chooseIncome: function () {
        
        let items = prompt('Что принесет доп доход? Перечислите через запятую', '');
        
        if (typeof(items) != "string" || items == "" || typeof(items) == null) {
            console.log("Вы ввели некорректные данные или не ввели их вовсе");
        } else {
            appData.income = items.split(', ');
            appData.income.push(prompt('Может что-то еще?'));
            appData.income.sort();
        }
        
        appData.income.forEach(function (itemass, i) {
            alert('Способы доп заработка: ' + (i + 1) + ": " + itemass + "; ");
        });
    }
};

console.log(appData);

for (let key in appData) {
    console.log('Свойство ' + key + ' имеет значение ' + appData[key]);
}