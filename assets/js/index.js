$(function () {

    var $val = '';
    var $ope = '';
    var $result = '';

    $('.num').on('click', function () {
        $val += $(this).val();
        $('.textbox').val($val);
        console.log($val);
    });

    $('.ope').on('click', function () {
        $ope += $(this).val();
        $('.textbox').val($ope);

        /*
        if ($result == '') {
            $result += $val;
        } else {
            $result = ;
        }
        */
        console.log($result);
        $val = '';
        $ope = '';
    });

    $('.iqual').on('click', function () {
        $ope += $(this).val();
        $ope = '';
    });


});