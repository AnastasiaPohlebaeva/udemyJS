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
    
});