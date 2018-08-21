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

$( ".cross2" ).hide();
$( ".filter2" ).hide();
$( ".apply" ).click(function() {
$( ".filter2" ).slideToggle( function() {
$( ".apply" ).hide();
$( ".cross2" ).show();
});
});

$( ".cross2" ).click(function() {
$( ".filter2" ).slideToggle( function() {
$( ".cross2" ).hide();
$( ".apply" ).show();
});
});

//data-filter-view属性値を操作する処理
//DOM構造を組み替えずにCSSによる描画処理の力で要素の出しわけが行える
var widget = document.getElementById('filterContent');
var checkboxes = widget.querySelectorAll('input[type="checkbox"]');
var checkedList = [];
//チェックボックスの値が変更されるタイミングで、filter関数が呼び出し
var filter = function () {
    checkedList = [];

  //選択されているチェックボックスのvalue属性値を配列に格納します
    Array.prototype.forEach.call(checkboxes, function (input) {
        if (input.checked) {
            checkedList.push(input.value);
        }
    });

  //ルートの要素に、配列を半角スペースで.join()した値を持つdata-filter-view属性をセット
    widget.setAttribute('data-filter-view', checkedList.join(' '));
};

Array.prototype.forEach.call(checkboxes, function (checkbox) {
    checkbox.addEventListener('change', filter);
});





});


