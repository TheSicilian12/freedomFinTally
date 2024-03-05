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


        if (ottawaCheckVal) {
            $('#ottawa-add-checks').append('<div class="check-info-container"><div class= "check-info"> ' + '$' + ottawaCheckVal.toLocaleString('en', { useGrouping: true }) + '</div> <button id="clearCheck" class="button-clear">X</button></div > ');
        }
        if (limaCheckVal) {
            $('#lima-add-checks').append('<div class="check-info-container"><div class= "check-info"> ' + '$' + limaCheckVal.toLocaleString('en', { useGrouping: true }) + '</div> <button id="clearCheck" class="button-clear">X</button></div > ');
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
        let ottawaCheckSubTotal = Number($('#lima-cash-subTotal').text().split(',').join(''));

        $('#ottawa-check-subTotal').text(0);
        $('#ottawa-add-checks').empty();
        $('#total').text((totalValue - ottawaCheckSubTotal).toLocaleString('en', { useGrouping: true }));
    });

    $(document).on('click', '#lima-check-clearButton', function (event) {
        event.preventDefault();

        let totalValue = Number($('#total').text().split(',').join(''));
        let limaCheckSubTotal = Number($('#lima-cash-subTotal').text().split(',').join(''));

        $('#lima-check-subTotal').text(0);
        $('#lima-add-checks').empty();
        $('#total').text((totalValue - limaCheckSubTotal).toLocaleString('en', { useGrouping: true }));
    });

});





//     // Event delegation for form submission
//     $(document).on('submit', '#checkForm, #cashForm', function (event) {
//         event.preventDefault();

//         let inputValue = Number($(this).find('.input').val());
//         let formId = $(this).attr('id');
//         let formSource = $(this).data('source');

//         if (inputValue > 0) {
//             let currentSubTotal = Number($(this).find('#subTotal').text().split(',').join(''))
//             let currentTotal = Number($('#total').text().split(',').join(''))

//             let newSubTotal = currentSubTotal + inputValue;
//             let newTotal = currentTotal + inputValue;

//             $(this).closest('div').find('.content').append('<div class="check-info-container"><div class= "check-info"> ' + '$' + inputValue.toLocaleString('en', { useGrouping: true }) + '</div> <button id="clearCheck" class="button-clear">X</button></div > '); // Append to the closest content section relative to the form
//             $(this).find('#subTotal').text(newSubTotal.toLocaleString('en', { useGrouping: true }));
//             $('#total').text(newTotal.toLocaleString('en', { useGrouping: true }));
//             $(this).closest('form').find('.input').val(''); // Clear the input field
//         }
//     });

//     // Event delegation for clear button click
//     $(document).on('click', '#clearButton', function (event) {
//         event.preventDefault();
//         $(this).closest('form').find('.content').empty();
//         $(this).closest('form').find('.content').append('<div class="checks-text">Checks</div>');
//         $(this).closest('form').find('.input').val(''); // Clear the input field

//         let currentTotal = Number($('#total').text().split(',').join(''));
//         let subTotal = Number($(this).closest('form').find('#subTotal').text().split(',').join(''));

//         currentTotal -= subTotal;

//         let clearType = $(this).attr('id');

//         // let newTotal = currentTotal - subTotal;
//         $('#total').text(currentTotal.toLocaleString('en', { useGrouping: true }))
//         $(this).closest('form').find('#subTotal').text('0');
//     });

//     $(document).on('click', '#clearCheck', function (event) {
//         event.preventDefault();
//         console.log("clearCheck")
//         let formId = $(this).attr('id');
//         console.log(formId)

//         let parent = $(this).parent();
//         let checkDiv = parent.find('.check-info');
//         let checkVal = parseFloat(checkDiv.text().replace('$', '').replace(/,/g, ''));

//         let currentTotal = Number($('#total').text().split(',').join(''));
//         let subTotal = Number($(this).closest('form').find('#subTotal').text().split(',').join(''));

//         currentTotal -= 0.5 * checkVal;
//         subTotal -= checkVal;

//         $('#total').text(currentTotal.toLocaleString('en', { useGrouping: true }))
//         $(this).closest('form').find('#subTotal').text(subTotal);

//         parent.remove();
//     })
// });
