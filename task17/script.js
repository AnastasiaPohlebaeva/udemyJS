$(document).ready(function () {
    
    $('a[href="#sheldure"], a[href="#tour"], .main_btn').click(function () {
        $('.overlay').fadeIn(500);
        $('.modal').slideDown(500);
    });
    
    $('[data-dismiss="modal"]').click(function () {
        $('.modal').slideUp(500);
        $('.overlay').fadeOut(500);
    })
});