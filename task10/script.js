window.addEventListener('DOMContentLoaded', function () {
    
    // Timer
    
    let deadline = '2019-12-23';
    
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
            seconds = timer.querySelector('.seconds');
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
});