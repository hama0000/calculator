$(function () {

    var $val = '';
    var $result = '';

    $('button').on('click', function () {
        $val += $(this).text();
        $('#textbox').text($val);
        console.log($val);
    });


    /*
    $('.iqual').on('click', function () {

    });
    */


});