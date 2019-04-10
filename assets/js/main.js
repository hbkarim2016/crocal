
// Main Script Jquery

$(document).ready(function(){

  // == Nice Scroll
  $(".doNicescroll").niceScroll({
    cursorcolor:"#ffad33",
    cursorwidth:"4px",
    cursorborder:"0px solid",
    cursorborderradius:0
  });

  // == URL Value

  var url = window.location.href ;
  var filename = url.substring(url.lastIndexOf('='));
  var indexfile = url.substring(url.lastIndexOf('/')+1);
  var home = "index.html";
  var about = "=about";
  var classes = "=classes";
  var schedule = "=schedule";
  var location = "=location";

  if ( home === indexfile ){
    // Show Homepage
    $('.homepage-content').addClass('d-block');
    $('.homepage-content').removeClass('d-none');
    $('title').remove();
    $('.homepage-content').append('<title>CROCAL</title>');
    // Remove All Page
    $('.error-content').addClass('d-none');
    $('.about-content').addClass('d-none');
    $('.classes-content').addClass('d-none');
    $('.schedule-content').addClass('d-none');
    $('.location-content').addClass('d-none');
    }else{

      switch(filename) {

       case about:
        //execute code block 1
        // Show About
        $('.about-content').addClass('d-block');
        $('.about-content').removeClass('d-none');
        $('title').remove();
        $('.about-content').append('<title>CROCAL | About</title>');
        $('.about_link').addClass('link_active');
        $('.classes_link').removeClass('link_active');
        $('.schedule_link').removeClass('link_active');
        $('.location_link').removeClass('link_active');
        // Remove All Page
        $('.error-content').addClass('d-none');
        $('.homepage-content').addClass('d-none');
        $('.classes-content').addClass('d-none');
        $('.schedule-content').addClass('d-none');
        $('.location-content').addClass('d-none');
        break;

      case classes:
       //execute code block 1
       // Show Classes
       $('.classes-content').addClass('d-block');
       $('.classes-content').removeClass('d-none');
       $('title').remove();
       $('.classes-content').append('<title>CROCAL | Classes</title>');
       $('.classes_link').addClass('link_active');
       $('.about_link').removeClass('link_active');
       $('.schedule_link').removeClass('link_active');
       $('.location_link').removeClass('link_active');
       // Remove All Page
       $('.error-content').addClass('d-none');
       $('.homepage-content').addClass('d-none');
       $('.about-content').addClass('d-none');
       $('.schedule-content').addClass('d-none');
       $('.location-content').addClass('d-none');
       break;

       case schedule:
        //execute code block 1
        // Show Schedule
        $('.schedule-content').addClass('d-block');
        $('.schedule-content').removeClass('d-none');
        $('title').remove();
        $('.schedule-content').append('<title>CROCAL | Schedule</title>');
        $('.schedule_link').addClass('link_active');
        $('.classes_link').removeClass('link_active');
        $('.about_link').removeClass('link_active');
        $('.location_link').removeClass('link_active');
        // Remove All Page
        $('.error-content').addClass('d-none');
        $('.homepage-content').addClass('d-none');
        $('.classes-content').addClass('d-none');
        $('.about-content').addClass('d-none');
        $('.location-content').addClass('d-none');
        break;

      case location:
       //execute code block 1
       // Show Location
       $('.location-content').addClass('d-block');
       $('.location-content').removeClass('d-none');
       $('title').remove();
       $('.location-content').append('<title>CROCAL | Location</title>');
       // Remove All Page
       $('.error-content').addClass('d-none');
       $('.homepage-content').addClass('d-none');
       $('.about-content').addClass('d-none');
       $('.schedule-content').addClass('d-none');
       $('.classes-content').addClass('d-none');
       $('.location_link').addClass('link_active');
       $('.classes_link').removeClass('link_active');
       $('.schedule_link').removeClass('link_active');
       $('.about_link').removeClass('link_active');
       // Show Maps
       $(".map1").mapael({
         "map" : {
            "name" : "world_countries"
          }
        });
       break;


       default:

         // Show Homepage
         $('.error-content').addClass('d-block');
         $('.error-content').removeClass('d-none');
         $('title').remove();
         $('.error-content').append('<title>CROCAL | ERROR </title>');
         // Remove All Page
         $('.homepage-content').addClass('d-none');
         $('.about-content').addClass('d-none');
         $('.classes-content').addClass('d-none');
         $('.schedule-content').addClass('d-none');
         $('.location-content').addClass('d-none');
      }
    }

  $('.preloader-page').delay(1000).fadeOut(500);
  // == Animation
  AOS.init();
});
