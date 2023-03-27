"use strict";


$(function(){
    alert( 'The DOM has finished loading !')
});

// let first = $('#auriel').html();
// alert(first);

// let first = $('#aurielPara').html();
// alert(first);

// $('.codeup').css('border', '1px solid red');

// $('li').css('font-size', '20px');
// $('h1').css('background', 'peru');
// $('p').css('background', 'pink');
// $('li').css('background', 'salmon');

// let last =$('h1').html();
// alert(last);
//
//
//
// $('p,li,h1').css("background", 'yellow');

$('h1').click(function() {
    $('h1').css('background', 'hotpink');
});

$('p').dblclick(function() {
    $('p').css('font-size', '18px');
});

$('li').hover(
    function() {
        $(this).css('background-color', 'red');
    },
    function() {
        $(this).css('background-color', 'black');
    }
);