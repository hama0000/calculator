$(function () {

    $('button').on('click', function () {

        var $textbox = $('#textbox');
        var $pushed = $(this).text();

        if ($pushed == '=') {
            // イコールが押されたときの処理
            $textbox.text(eval($textbox.text()));

        } else if ($pushed == 'AC') {
            // ACが押されたときの処理
            $textbox.text('0');

        } else {
            // その他のボタンが押されたときの処理
            if ($textbox.text() == '0') {
                $textbox.text($pushed);

            } else {
                $textbox.text($textbox.text() + $pushed);
            }

        }

    });
});