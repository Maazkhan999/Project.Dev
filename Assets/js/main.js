$(document).ready(function(){

    //slider js//
    $('#hero-slider').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        items:1,
        dots:false,
        smartspeed:1000,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:false,
        navText :['PREV','NEXT'],
        responsive:{
            0:{
               nav:false 
            },
            780:{
                nav:true
            },
            1000:{
               
            }
        }
    })

});

$(document).ready(function(){

    //project slider js//
    $('#project-slider').owlCarousel({
        loop:true,
        margin:0,
        dots:true,
        margin:24,
        smartspeed:1000,
        responsive:{
            0:{
              items:1,
              nav:false,
              margin:0,
            },
            780:{
               items:2,
            },
            1140:{
               items:2,
               center:true,
            }
        }
    })

});

$(document).ready(function(){

    //review slider js//
    $('#reviews-slider').owlCarousel({
        loop:true,
        margin:0,
        dots:true,
        margin:10,
        smartspeed:1000,
        items:1,
        
    })

});