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

    // task13

    let msg = {
        loading: 'Загрузка',
        success: 'Спасибо, мы скоро с вами свяжемся',
        error: 'Что-то пошло не так'
    };

    let form = document.getElementsByTagName('form')[0],
        modalForm = document.getElementsByTagName('form')[1],
        statMsg = document.createElement('div');

    statMsg.classList.add('status');
    
    function sendForm(element) {
        element.addEventListener('submit', function (e) {
            e.preventDefault();
            element.appendChild(statMsg);
            
            let request = new XMLHttpRequest();
            request.open('POST', 'server.php');
            request.setRequestHeader('Content-Type', 'application/json; charset=utf-8;');
    
            let formData = new FormData(element);
            console.log(formData);
            let obj = {};
            formData.forEach(function(value, key) {
                obj[key] = value;
            });
            console.log(obj);
            let json = JSON.stringify(obj);
            console.log(json);
            request.send(json);
            
            request.addEventListener('readystatechange', function () {
                if (request.readyState < 4) {
                    statMsg.innerHTML = msg.loading;
                } else if (request.readyState === 4 && request.status == 200) {
                    statMsg.innerHTML = msg.success;
                } else {
                    statMsg.innerHTML = msg.error;
                }
            });
    
            let inputs = element.getElementsByTagName('input');
            for (let i = 0; i < inputs.length; i++) {
                inputs[i].value = '';
            };
        })
    };
    
    sendForm(form);
    sendForm(modalForm);
    
    // Slider
    
    let sliderIndex = 1,
        sliderWrap = document.querySelector('.slider'),
        slides = sliderWrap.querySelectorAll('.slider-item'),
        dotsWrap = sliderWrap.querySelector('.slider-dots'),
        dots = dotsWrap.querySelectorAll('.dot'),
        prevBtn = sliderWrap.querySelector('.prev'),
        nextBtn = sliderWrap.querySelector('.next');
    
    
    function showSlide(sliderIndex) {
        
        if (sliderIndex < 1) {
            sliderIndex = slides.length;
        } else if (sliderIndex > slides.length) {
            sliderIndex = 1;
        }
        
        slides.forEach((item) => item.style.display = 'none');
        dots.forEach((item) => item.classList.remove('dot-active'));
        
        slides[sliderIndex - 1].style.display = 'block';
        dots[sliderIndex - 1].classList.add('dot-active');
    };
    
    showSlide(sliderIndex);
    
    function plusSlide(n) {
        showSlide(sliderIndex += n);
    };
    
    function currentSlide(n) {
        showSlide(sliderIndex = n);
    };
    
    prevBtn.addEventListener('click', function () {
        plusSlide(-1);
    });
    
    nextBtn.addEventListener('click', function () {
        plusSlide(1);
    });
    
    dotsWrap.addEventListener('click', function (e) {
        for (let i = 0; i < dots.length + 1; i++) {
            let target = e.target;
            if (target == dots[i - 1] && target.classList.contains('dot')) {
                currentSlide(i);
            }
        }
    });
    
});