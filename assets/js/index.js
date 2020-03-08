$(function () {

    const $button = $('button');
    var $distinction = 0;


    $button.on('click', function () {

        // 関数の定義
        var $textbox = $('#textbox');
        var $pushed = $(this);
        var $pushedText = $(this).text();

        const textChange = () => {
            $textbox.text($textbox.text() + $pushedText);
        }


        // ボタンの処理
        if ($pushedText == '=') {
            // イコールが押されたときの処理
            if ($distinction == 0) {
                $textbox.text(eval($textbox.text()));
            } // 直前に演算子が押されていたときの処理はなし

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
                        textChange();
                        //$textbox.text($textbox.text() + $pushedText);
                        $distinction = 1;
                        console.log("演算子が押されました");

                    } // 直前に演算子が押されていたときの処理はなし

                } else {
                    // 演算子以外が押されたとき
                    textChange();
                    //$textbox.text($textbox.text() + $pushedText);
                    $distinction = 0;
                }
            }

        }

    });
});