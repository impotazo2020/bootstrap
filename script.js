$( document ).ready(function() {
/***************** Start docuement ready **********/



$( ".navnav-logo" ).click(function() {
    $( ".zone-dektop" ).slideToggle( 220 );
});
$( ".home-page" ).click(function() {
    $( ".homepage-content" ).slideToggle( 220 );
});
$( ".Pages-page" ).click(function() {
    $( ".Pages-page-content" ).slideToggle( 220 );
});
$( ".email-page" ).click(function() {
    $( ".email-page-content" ).slideToggle( 220 );
});
$( ".authentication-page" ).click(function() {
    $( ".authentication-page-content" ).slideToggle( 220 );
});
$( ".ecommerce-page" ).click(function() {
    $( ".ecommerce-page-content" ).slideToggle( 220 );
});
$( ".Components-page" ).click(function() {
    $( ".Components-page-content" ).slideToggle( 220 );
});
$( ".Utilities-page" ).click(function() {
    $( ".Utilities-page-content" ).slideToggle( 220 );
});
$( ".Plugins-page" ).click(function() {
    $( ".Plugins-page-content" ).slideToggle( 220 );
});
$( ".Documentations-page" ).click(function() {
    $( ".Documentations-page-content" ).slideToggle( 220 );
});

$( ".navnav-text-2" ).hide();
$( ".buuton-aside-bar" ).click(function() {
    if($( ".vertical-nav-bar" ).width()==20) {
        $( ".vertical-nav-bar" ).animate({"width":"100%"},{duration:20});
        $( ".to-hide-side-bar" ).show(5);
        $( ".side-baar" ).removeClass(" col-xl-1");
        $( ".side-baar" ).addClass("col-xl-2");
        $( ".main-center" ).removeClass("col-xl-11");
        $( ".main-center" ).addClass("col-xl-10 ");
        $( ".navnav-text-2" ).hide();
        
        }
    else{ 
        $( ".vertical-nav-bar" ).animate({width:20},{duration:20});
        $( ".to-hide-side-bar" ).hide(5);
        $( ".side-baar" ).removeClass("col-xl-2");
        $( ".side-baar" ).addClass("col-xl-1");
        $( ".main-center" ).removeClass("col-xl-10");
        $( ".main-center" ).addClass("col-xl-11");
        $( ".navnav-text-2" ).show();
        
    }
});








/***************** end docuement ready **********/
});