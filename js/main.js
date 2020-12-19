$(document).ready(function () {
    // 漢堡選單點後下拉選單出現
    $('.navBar__burger').click(function (e) { 
        e.preventDefault();
        $('.navBar__burger').toggleClass('navBar__burger--open');  
    });
}); 