$('.owl-carousel').owlCarousel({
loop:true,
items:5,
center: true,
margin:30,
nav:true,
autoplay: true,
autoPlaySpeed: 900,
autoPlayTimeout: 900,
autoplayHoverPause: true,
responsive:{
0:{
    items:1
},
600:{
    items:3
},
1000:{
    items:5
}
}
})      