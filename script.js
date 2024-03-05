$(document).ready(function () {
    $(document).on('submit', '#ottawa-cash-form, #ottawa-check-form, #lima-cash-form, #lima-check-form', function (event) {
        event.preventDefault();

        let totalValue = Number($('#total').text().split(',').join(''));
        let ottawaCashSubTotal = Number($('#ottawa-cash-subTotal').text().split(',').join(''));
        let ottawaCheckSubTotal = Number($('#ottawa-check-subTotal').text().split(',').join(''));
        let limaCashSubTotal = Number($('#lima-cash-subTotal').text().split(',').join(''));
        let limaCheckSubTotal = Number($('#lima-check-subTotal').text().split(',').join(''));


        let ottawaCashVal = Number($("#ottawa-cash-input").val().split(',').join(''));
        $('#ottawa-cash-input').val('');

        let ottawaCheckVal = Number($("#ottawa-check-input").val().split(',').join(''));
        $('#ottawa-check-input').val('');

        let limaCashVal = Number($("#lima-cash-input").val().split(',').join(''));
        $('#lima-cash-input').val('');

        let limaCheckVal = Number($("#lima-check-input").val().split(',').join(''));
        $('#lima-check-input').val('');

        $('#total').text((totalValue + ottawaCashVal + ottawaCheckVal + limaCashVal + limaCheckVal).toLocaleString('en', { useGrouping: true }));

        $('#ottawa-cash-subTotal').text((ottawaCashVal + ottawaCashSubTotal).toLocaleString('en', { useGrouping: true }));
        $('#ottawa-check-subTotal').text((ottawaCheckVal + ottawaCheckSubTotal).toLocaleString('en', { useGrouping: true }));

        $('#lima-cash-subTotal').text((limaCashVal + limaCashSubTotal).toLocaleString('en', { useGrouping: true }));
        $('#lima-check-subTotal').text((limaCheckVal + limaCheckSubTotal).toLocaleString('en', { useGrouping: true }));

        let newTotal = $('#total').text();
        $('#report-total').text(newTotal);

        if (ottawaCheckVal) {
            $('#ottawa-add-checks').append('<div class="check-info-container"><div class= "check-info"> ' + '$' + ottawaCheckVal.toLocaleString('en', { useGrouping: true }) + '</div> <button class="button-clear ottawa-clearCheck">X</button></div > ');
        }
        if (limaCheckVal) {
            $('#lima-add-checks').append('<div class="check-info-container"><div class= "check-info"> ' + '$' + limaCheckVal.toLocaleString('en', { useGrouping: true }) + '</div> <button class="button-clear lima-clearCheck">X</button></div > ');
        }
    });

    $(document).on('click', '#ottawa-cash-clearButton', function (event) {
        event.preventDefault();

        let totalValue = Number($('#total').text().split(',').join(''));
        let ottawaCashSubTotal = Number($('#ottawa-cash-subTotal').text().split(',').join(''));

        $('#ottawa-cash-subTotal').text(0);
        $('#total').text((totalValue - ottawaCashSubTotal).toLocaleString('en', { useGrouping: true }));
    });

    $(document).on('click', '#lima-cash-clearButton', function (event) {
        event.preventDefault();

        let totalValue = Number($('#total').text().split(',').join(''));
        let limaCashSubTotal = Number($('#lima-cash-subTotal').text().split(',').join(''));

        $('#lima-cash-subTotal').text(0);
        $('#total').text((totalValue - limaCashSubTotal).toLocaleString('en', { useGrouping: true }));
    });

    $(document).on('click', '#ottawa-check-clearButton', function (event) {
        event.preventDefault();

        let totalValue = Number($('#total').text().split(',').join(''));
        let ottawaCheckSubTotal = Number($('#ottawa-check-subTotal').text().split(',').join(''));

        $('#total').text((totalValue - ottawaCheckSubTotal).toLocaleString('en', { useGrouping: true }));
        $('#ottawa-check-subTotal').text(0);
        $('#ottawa-add-checks').empty();
    });

    $(document).on('click', '#lima-check-clearButton', function (event) {
        event.preventDefault();

        let totalValue = Number($('#total').text().split(',').join(''));
        let limaCheckSubTotal = Number($('#lima-check-subTotal').text().split(',').join(''));

        $('#total').text((totalValue - limaCheckSubTotal).toLocaleString('en', { useGrouping: true }));
        $('#lima-add-checks').empty();
        $('#lima-check-subTotal').text(0);
    });


    // individual checks
    $(document).on('click', '.lima-clearCheck', function (event) {
        event.preventDefault();

        let totalValue = Number($('#total').text().split(',').join(''));
        let limaCheckSubTotal = Number($('#lima-check-subTotal').text().split(',').join(''));

        let parent = $(this).parent();
        let checkDiv = parent.find('.check-info');
        let checkVal = parseFloat(checkDiv.text().replace('$', '').replace(/,/g, ''));

        $('#lima-check-subTotal').text((limaCheckSubTotal - checkVal).toLocaleString('en', { useGrouping: true }));
        $('#total').text((totalValue - checkVal).toLocaleString('en', { useGrouping: true }));

        parent.remove();
    });

    $(document).on('click', '.ottawa-clearCheck', function (event) {
        event.preventDefault();

        let totalValue = Number($('#total').text().split(',').join(''));
        let ottawaCheckSubTotal = Number($('#ottawa-check-subTotal').text().split(',').join(''));

        let parent = $(this).parent();
        let checkDiv = parent.find('.check-info');
        let checkVal = parseFloat(checkDiv.text().replace('$', '').replace(/,/g, ''));

        $('#ottawa-check-subTotal').text((ottawaCheckSubTotal - checkVal).toLocaleString('en', { useGrouping: true }));
        $('#total').text((totalValue - checkVal).toLocaleString('en', { useGrouping: true }));

        parent.remove();
    });
});
