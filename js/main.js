$(document).ready(function(){

    new WOW().init();

    $('#Home-Slider').owlCarousel({
        loop: true,
        margin: 0,
        dots: false,
        nav: false,
        autoplay:true,
        autoplayTimeout:8000,
        items:1,
        mouseDrag: false,
        touchDrag: false
    });

    $('#testimonials_slider').owlCarousel({
        loop: true,
        margin: 0,
        dots: false,
        nav: true,
        autoplay:true,
        autoplayTimeout:8000,
        autoplayHoverPause:false,
        items:1,
        mouseDrag: false,
        touchDrag: false
    });

    slider_how_to_use = $('#slider_how_to_use');
    slider_how_to_use.owlCarousel({
        loop: false,
        rewind: true,
        margin: 0,
        dots: false,
        nav: false,
        autoplay:true,
        autoplayTimeout: 5000,
        autoplayHoverPause:false,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        items:1
    });

    $('#client_logos_slider').owlCarousel({
        loop: true,
        margin: 0,
        dots: false,
        nav: false,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:false,
        responsive:{
            0:{
                items:3,
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });



    services_slider = $('#services_slider');
    services_slider.owlCarousel({
        loop: false,
        rewind: true,
        margin: 0,
        dots: false,
        nav: true,
        autoplay:true,
        autoplayTimeout:8000,
        autoplayHoverPause:false,
        items:1,
        mouseDrag: false,
        touchDrag: false,
        animateOut: 'fadeOut',
        autoplaySpeed: 300,
        responsive:{
            0:{
                dots: true,
                nav: false,
                autoHeight: true
            },
            600:{
                dots: false,
                nav: true
            },
            1000:{
                dots: false,
                nav: true
            }
        }
    });
    services_slider.on('changed.owl.carousel', function(e) {
        $("#services_tabs li").removeClass("current");
        $("#services_tabs li:eq("+e.item.index+")").addClass("current");
    });

    $("#services_tabs li").click(function(){
        index = $(this).index();
        // alert(index);
        services_slider.trigger('to.owl.carousel', index);
    });


    $("#How-to-use ul li").click(function(){
        var index = $("#How-to-use ul li").index(this);
        slider_how_to_use.trigger('to.owl.carousel', index);
    });    

    // Listen to owl events:
    slider_how_to_use.on('changed.owl.carousel', function(event) {
        var currentItem = event.item.index;
        // alert("Call - " + currentItem);
        $("#How-to-use ul li").removeClass("current");
        $("#How-to-use ul li").eq(currentItem).addClass("current");
    });

    $("#location_dropdown").selectBox({
        keepInViewport: false,
        mobile: true
    });

    $("#location_dropdown").change(function(){
        val = $(this).val();
        // alert(val);
        if (val == "") {
            $("#locations li").fadeIn(0);
            return false;
        }
        $("#locations li").fadeOut(0);
        $("."+val).fadeIn();
    });


    $("#home_contact_form").validate({
        submitHandler: submitFrom
    });

    $(window).scroll(function() {
        if ($(window).scrollTop() > 100) {
          $("header").addClass("sticky_header");
        }
        else {
          $("header").removeClass("sticky_header");
        }
    });

    $(".navic").click(function(){
        $("#mobile_menu").fadeIn(200);
    });
    $("#mobile_menu .arrow-popup-close").click(function(){
        $("#mobile_menu").fadeOut(200);
    });


    $(".scroll_to").click(function() {
        scroll_to = $(this).attr("rel");
        $('html, body').animate({
            scrollTop: $("#"+scroll_to).offset().top - 80
        });
    });


    var stagePadding_01 = $(window).width() / 8;
    var margin_01 = $(window).width() / 60;
    if ($(window).width() < 768) {
        var stagePadding_01 = $(window).width() / 5;
    }
    $('#Our-Stations-Slider').owlCarousel({
        stagePadding: stagePadding_01,
        loop:true,
        margin:margin_01,
        nav:false,
        dots: false,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:3
            }
        }
    });

    $('#Blog-Gallery-Slider').owlCarousel({
        stagePadding: stagePadding_01,
        loop:true,
        margin:margin_01,
        nav:false,
        dots: false,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:3
            }
        }
    });

    /*$(".locations_inner li h6").click(function(){
        loc = $(this).parent().parent("li").attr("class");
        if ($(this).parent().parent("li").hasClass("active")) {
            $(this).parent().parent("li").removeClass("active");
            $(".marker").removeClass("active");
            return false;
        }
        $(this).parent().parent("li").addClass("active");
        $("#"+loc).addClass("active");

    });
    $(".locations_inner li img").click(function(){
        loc = $(this).parent("li").attr("class");
        if ($(this).parent("li").hasClass("active")) {
            $(this).parent("li").removeClass("active");
            $(".marker").removeClass("active");
            return false;
        }
        $(this).parent("li").addClass("active");
        $("#"+loc).addClass("active");
    });*/


    $(".locations_inner li").click(function(){
        loc = $(this).attr("class");
        if (!$(this).hasClass("active")) {
            $(this).addClass("active");
            $(this).find(".close_popup").fadeIn(0);
            $(".marker_"+loc).addClass("active");
            return false;
        }
    });

    $(".close_popup").click(function(){
        $(this).parent("li").find(".close_popup").fadeOut(0);
        $(this).parent("li").removeClass("active");
        $(".marker").removeClass("active");
        return false;
    });


    $('#Testimonials-Slider').owlCarousel({
        loop: true,
        margin: 0,
        dots: false,
        nav: false,
        autoplay: true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        autoHeight: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:2
            }
        }
    });

    $('#Blog-Slider').owlCarousel({
        loop: false,
        margin: 0,
        // dots: true,
        dots: false,
        nav: false,
        autoplay: true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        autoHeight: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:2
            }
        }
    });

    $('#Testimonials-Slider .owl-dot').each(function(){
        $(this).children('span').text($(this).index()+1);
    });


    $("#mobile_menu li a").click(function(){
        $(this).next().slideToggle();
    });
    
});




function submitFrom(form) {
    var obj = $('form#'+form.id);
    var formData = $('form#'+form.id).serialize()+'&command='+form.id;
    $.post("form_submit.php",  formData , function(data) {
        if(data.status=='success') {
            // alert("Success");
            $("#home_contact_form input:submit").animate({'opacity': '0.5'});
            $("#home_contact_form input:submit").attr('disabled', 'disabled');
            $("#contact_msg_status").fadeIn(0);
        } else {
            // alert("Failed");
            obj.hide();
            obj.parent().append(data.message);
        }
    }, "json");
    return false;
}