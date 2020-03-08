$(function () {

    const $button = $('button');
    var $distinction = 0;

    $button.on('click', function () {

        var $textbox = $('#textbox');
        var $pushed = $(this);
        var $pushedText = $(this).text();

        if ($pushedText == '=') {
            // イコールが押されたときの処理
            $textbox.text(eval($textbox.text()));

        } else if ($pushedText == 'AC') {
            // ACが押されたときの処理
            $textbox.text('0');

        } else {
            // その他のボタンが押されたときの処理
            if ($textbox.text() == '0') {
                // 0が押されたとき
                $textbox.text($pushedText);

            } else {
                if ($pushed.is('#operator')) {
                    // 演算子が押されたときの処理
                    if ($distinction == 0) {
                        // 直前に演算子が押されていないときの処理
                        $textbox.text($textbox.text() + $pushedText);
                        $distinction = 1;
                        console.log("演算子が押されました");

                    } else {
                        // 直前に演算子が押されていたときの処理
                        return;
                    }

                } else {
                    // 演算子以外が押されたとき
                    $textbox.text($textbox.text() + $pushedText);
                    $distinction = 0;
                }

            }

        }

    });
});