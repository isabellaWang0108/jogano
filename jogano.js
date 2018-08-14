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
    var selector = $('input:checkbox').map(function(){ 
        return this.checked ? '.' + this.id : ''; 
    }).get().join('');
    console.log(selector);  

    var all = $('div[class^="category"]');
    if(selector.length)
      all.hide().filter(selector).show()
    else all.show();
});


});