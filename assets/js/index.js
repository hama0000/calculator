$(function () {

    var $val = '';
    var $result = '';

    $('button').on('click', function () {

        var $textbox = $('#textbox');


        if ($(this).text() != 'AC') {
            $val += $(this).text();
            $textbox.text($val);
            console.log($val);
        } else {
            $val = '';
            $textbox.text('0');
        }
    });


    /*
    $('.iqual').on('click', function () {

    });
    */


});