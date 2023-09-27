$(document).ready(function(){

    //slider js//
    $('#hero-slider').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        items:1,
        dots:false,
        smartspeed:1000,
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
              
            },
            780:{
               items:2,
            },
            1000:{
               items:2,
               center:true,
            }
        }
    })

});