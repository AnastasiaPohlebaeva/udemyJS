window.addEventListener('DOMContentLoaded', function () {
    'use strict';
    let wrapper = document.querySelector('.info'),
        tabsHead = wrapper.querySelectorAll('.info-header-tab'),
        tabsContent = wrapper.querySelectorAll('.info-tabcontent');
    function hideTabsContent () {
        for (let i = 0; i < tabsContent.length; i++) {
            tabsContent[i].classList.add('hide');
            tabsContent[i].classList.remove('show');
        }
    };
    hideTabsContent();
});