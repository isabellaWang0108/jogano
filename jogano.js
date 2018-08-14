$(document ).ready(function() {

$( ".cross" ).hide();
$( ".navi2" ).hide();
$( ".hamburger" ).click(function() {
$( ".navi2" ).slideToggle( function() {
$( ".hamburger" ).hide();
$( ".cross" ).show();
});
});

$( ".cross" ).click(function() {
$( ".navi2" ).slideToggle( function() {
$( ".cross" ).hide();
$( ".hamburger" ).show();
});
});


$('input').click(function() {
    var category = $(this).val();

    $(this).attr('checked') $ (except('.' + category)).hide();
    
});


});


