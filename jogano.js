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


var widget = document.getElementById('filterContent');
var checkboxes = widget.querySelectorAll('input[type="checkbox"]');
var checkedList = [];
var filter = function () {
    checkedList = [];

    Array.prototype.forEach.call(checkboxes, function (input) {
        if (input.checked) {
            checkedList.push(input.value);
        }
    });


    widget.setAttribute('data-filter-view', checkedList.join(' '));
};

Array.prototype.forEach.call(checkboxes, function (checkbox) {
    checkbox.addEventListener('change', filter);
});




});


