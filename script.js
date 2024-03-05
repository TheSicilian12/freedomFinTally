$(document).ready(function () {
    $(document).on('submit', '#ottawa-cash-form, #ottawa-check-form', function (event) {
        event.preventDefault();

        let totalValue = Number($('#total').text());
        let ottawaCashSubTotal = Number($('#ottawa-cash-subTotal').text());
        let ottawaCheckSubTotal = Number($('#ottawa-check-subTotal').text());


        let ottawaCashVal = Number($("#ottawa-cash-input").val());
        $('#ottawa-cash-input').val('');

        let ottawaCheckVal = Number($("#ottawa-check-input").val());
        $('#ottawa-check-input').val('');

        $('#total').text(totalValue + ottawaCashVal + ottawaCheckVal);
        $('#ottawa-cash-subTotal').text(ottawaCashVal + ottawaCashSubTotal);
        $('#ottawa-check-subTotal').text(ottawaCheckVal + ottawaCheckSubTotal);



        if (ottawaCheckVal) {
           $('#ottawa-check-content').append('<div class="check-info-container"><div class= "check-info"> ' + '$' + ottawaCheckVal.toLocaleString('en', { useGrouping: true }) + '</div> <button id="clearCheck" class="button-clear">X</button></div > ');
        }


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
