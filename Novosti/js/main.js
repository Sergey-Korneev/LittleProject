$(document).ready(function () {
    news_form_on();
    forexEUR();
    manu_port();

});

function news_form_on() {
    var body = document.getElementsByTagName('body')[0];
   $('.button-left').click(function () { 
    disableScrolling();
    // body.classList.add("no-scroll");
    $("body").css("overflow", "hidden");
    $('.popup-back').fadeIn(500);
    return false;
    
    
    
   });
   $('.popup-back').click(function (event) {
       if (event.target == this) {
            $(this).fadeOut(500);
            enableScrolling();
            // body.classList.remove("no-scroll");
            $("body").css("overflow", "auto");
       } 
       
    });
       
};   
function disableScrolling(){
    var x=window.scrollX;
    var y=window.scrollY;
    window.onscroll=function(){window.scrollTo(x, y);};
}  
function enableScrolling(){
    window.onscroll=function(){};
}      
function forexEUR() {  
        $.getJSON('http://data.fixer.io/api/latest',
        {'access_key': '2279effee172e1f44e1cf44e52d5f328','symbols' : 'USD, RUB'
    },function (EUR) {
            $('.forex-EUR').append(EUR.rates.RUB.toFixed(1));
            $('.forex-USD').append((EUR.rates.RUB / EUR.rates.USD).toFixed(1));
            console.log(EUR);
        });
}

function manu_port() {
    $('.burger').click(function () {
        var body = $('body');
        var weather = $('.color-menu');
        if (weather.css("margin-bottom") == '50px') {
           $('.color-menu').css('margin-bottom', '10px');
           $('.weather').slideToggle();
            $('.time-mob').slideToggle();
            $('.deta-mob').slideToggle();
        }else if (weather.css("margin-bottom") == '10px') 
        {
            $('.color-menu').css('margin-bottom', '50px');
            $('.weather').slideToggle();
            $('.time-mob').slideToggle();
            $('.deta-mob').slideToggle();
        }
        $(body).toggleClass('no-scroll'); 
        $('.manu-port').slideToggle();
        
    });
}
