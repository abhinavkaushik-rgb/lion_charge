$(document).ready(function(){

    new WOW().init();

    $('#commercial_residentail_slider').owlCarousel({
        loop: true,
        margin: 0,
        dots: false,
        nav: false,
        autoplay:true,
        autoplayTimeout:8000,
        items:1
    });

    $('#slider_evc').owlCarousel({
        loop: true,
        margin: 0,
        dots: false,
        nav: false,
        autoplay:true,
        autoplayTimeout:4000,
        animateOut: 'fadeOut',
        autoplaySpeed: 300,
        items:1,
        mouseDrag: false,
        touchDrag: false,
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



    $(".step_slider").owlCarousel({
        loop: true,
        rewind: true,
        margin: 0,
        dots: true,
        nav: true,
        // autoplay:true,
        // autoplayTimeout:8000,
        // autoplayHoverPause:false,
        items:1,
        autoplaySpeed: 500
    });

    $("#services_tabs li").click(function(){
        index = $(this).index();
        services_slider.trigger('to.owl.carousel', index);
    });

    $("#home_contact_form").validate({
        submitHandler: submitFrom
    });

    $(".tabs li").click(function(){
        id = $(this).data("id");
        $(".hidden_data").fadeOut(0);
        $("#"+id).fadeIn();
        $("#banner-"+id).fadeIn();
        $(".tabs li").removeClass("active");
        $(this).addClass("active");
    });


    $(".navic").click(function(){
        $("#mobile_menu").fadeIn(200);
    });
    $("#mobile_menu .arrow-popup-close").click(function(){
        $("#mobile_menu").fadeOut(200);
    });



});

function submitFrom(form) {
    var obj = $('form#'+form.id);
    var formData = $('form#'+form.id).serialize()+'&command='+form.id;
    $.post("home/form_submit.php",  formData , function(data) {
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