window.addEventListener('DOMContentLoaded', function () {
    
    'use strict';
    
    let tabsHead = document.querySelector('.info'),
        tabsItems = tabsHead.querySelectorAll('.info-header-tab'),
        tabsContent = document.querySelectorAll('.info-tabcontent');
    
    function hideTabsContent (a) {
        for (let i = a; i < tabsContent.length; i++) {
            tabsContent[i].classList.remove('show');
            tabsContent[i].classList.add('hide');
        }
    };
    hideTabsContent(1);
    
    function showTabContent (b) {
        if (tabsContent[b].classList.contains('hide')) {
            tabsContent[b].classList.remove('hide');
            tabsContent[b].classList.add('show');
        }
    };
    
    tabsHead.addEventListener('click', function (event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tabsItems.length; i++) {
                if (target == tabsItems[i]) {
                    hideTabsContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });
    
    // Timer
    
    let deadline = '2019-01-30';
    
    function getTime(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date());
        
        if (t <= 0) {
            return {
                'total': 0,
                'hours': 0,
                'minutes': 0,
                'seconds': 0
            }
        } else {
            let seconds = Math.floor((t/1000) % 60),
                minutes = Math.floor((t/1000/60) % 60),
                hours = Math.floor(t/1000/60/60);
            
            return {
                'total': t,
                'hours': hours,
                'minutes': minutes,
                'seconds': seconds
            }
        }
    }
    
    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInt = setInterval(updateTimer, 1000);
        
        function checkLength(number) {
            if (number.toString().length <= 1) {
                return "0" + number.toString();
            } else {
                return number;
            }
        }
        
        function updateTimer() {
            let t = getTime(endtime);
            
            hours.textContent = checkLength(t.hours);
            minutes.textContent = checkLength(t.minutes);
            seconds.textContent = checkLength(t.seconds);
            
            if (t.total < 0) {
                clearInterval(timeInt);
            }
        }
    };
    setClock('timer', deadline);
   
    // Modal
    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = overlay.querySelector('.popup-close');
    
    more.addEventListener('click', function () {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });
    close.addEventListener('click', function () {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    });

    let tabsWrrapper = document.querySelector('.info'),
        moreBtns = tabsWrrapper.querySelectorAll('.description-btn');

    function showPopup (a) {
        overlay.style.display = 'block';
        document.body.style.overflow = 'hidden';
    };

    tabsWrrapper.addEventListener('click', function (event) {
        let target = event.target;
        if (target && target.classList.contains('description-btn')) {
            for (let item of moreBtns) {
                if (target == item) {
                    showPopup(item);
                    break;
                }
            }
        }
    });

    /*
    Второе задание
    <input id="age" value="30">
    let age = document.getElementById('age');
    function showUser(surname, name) {
        alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
    }
    showUser.apply(age, ["Ivan", "Popov"]);
    */

});