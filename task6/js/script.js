let navMenu = document.querySelector('.menu'),
    menuItem = navMenu.querySelectorAll('.menu-item'),
    menuItemNew = document.createElement("li"),
    title = document.getElementById("title"),
    adv = document.getElementsByClassName("adv")[0],
    feedback = document.getElementById("prompt");
    
navMenu.insertBefore(menuItem[2], menuItem[1]);

menuItemNew.classList.add('menu-item');
menuItemNew.textContent = "Пятый элемент";
navMenu.appendChild(menuItemNew);


title.textContent = "Мы продаем только подлинную технику Apple";

document.body.style.backgroundImage = "url('./img/apple_true.jpg')";

adv.remove();

feedback.textContent = prompt("Как вы относитесь к технике Apple?");