// $(document).ready(function(){
//     $(".hello").on('click', function(){
//         $(this).addClass('blue');
//     });


//     $("#myForm").on('submit', function(event){
//         event.preventDefault();

//         let inputValue = $('.input').val();
//         $('.content').append('<div>' + inputValue + '</div>')
//     })

//     $("#clearButton").on('click', function(event){
//         event.preventDefault();

//         $('.content').empty()
//     })

// });

// $(document).ready(function () {
//     $(".hello").on('click', function () {
//         $(this).addClass('blue');
//     });

//     // Event delegation for form submission
//     $(document).on('submit', '.myForm', function (event) {
//             event.preventDefault();
//             // let inputValue = $('.input').val();
//         //    $('.content').append('<div>' + inputValue + '</div>');
//         let inputValue = $(this).find('.input').val();
//         $(this).closest('.content').append('<div>' + inputValue + '</div>');
//     });

//     // Event delegation for clear button click
//     $(document).on('click', '#clearButton', function (event) {
//         event.preventDefault();
//         $('.content').empty();
//     });
// });

$(document).ready(function () {
    let totalVal = 0;
    let cashSubTotal = 0;
    let checkSubTotal = 0;
    let checkCounter = 0;

    // Event delegation for form submission
    $(document).on('submit', '#checkForm, #cashForm', function (event) {
        event.preventDefault();

        let inputValue = Number($(this).find('.input').val());
        let formId = $(this).attr('id');
        let formSource = $(this).data('source');

        if (inputValue > 0) {
            let currentSubTotal = Number($(this).find('#subTotal').text().split(',').join(''))
            let currentTotal = Number($('#total').text().split(',').join(''))

            let newSubTotal = currentSubTotal + inputValue;
            let newTotal = currentTotal + inputValue;

            // totalVal += inputValue;
            // console.log(formId, formId === "cashForm")
            // if (formId === "cashForm") {
            //     cashSubTotal += inputValue;
            // }
            // else {
            //     checkSubTotal += inputValue;
            //     checkCounter++;
            // }

            $(this).closest('div').find('.content').append('<div class="check-info-container"><div class= "check-info"> ' + '$' + inputValue.toLocaleString('en', { useGrouping: true }) + '</div> <button id="clearCheck" class="button-clear">X</button></div > '); // Append to the closest content section relative to the form
            $(this).find('#subTotal').text(newSubTotal.toLocaleString('en', { useGrouping: true }));
            $('#total').text(newTotal.toLocaleString('en', { useGrouping: true }));
            $(this).closest('form').find('.input').val(''); // Clear the input field


            $("#report-total").text(newTotal)
            $("#report-cash-subTotal").text(cashSubTotal);
            $("#report-check-subTotal").text(checkSubTotal);
            $("#report-check-tally").text(checkCounter);
        }
    });

    // Event delegation for clear button click
    $(document).on('click', '#clearButton', function (event) {
        event.preventDefault();
        $(this).closest('form').find('.content').empty();
        $(this).closest('form').find('.content').append('<div class="checks-text">Checks</div>');
        $(this).closest('form').find('.input').val(''); // Clear the input field

        let currentTotal = Number($('#total').text().split(',').join(''));
        let subTotal = Number($(this).closest('form').find('#subTotal').text().split(',').join(''));

        // totalVal -= subTotal;

        currentTotal -= subTotal;

        let clearType = $(this).attr('id');

        // let newTotal = currentTotal - subTotal;
        $('#total').text(currentTotal.toLocaleString('en', { useGrouping: true }))
        $(this).closest('form').find('#subTotal').text('0');
    });

    $(document).on('click', '#clearCheck', function (event) {
        event.preventDefault();
        console.log("clearCheck")
        let formId = $(this).attr('id');
        console.log(formId)

        let parent = $(this).parent();
        let checkDiv = parent.find('.check-info');
        let checkVal = parseFloat(checkDiv.text().replace('$', '').replace(/,/g, ''));

        let currentTotal = Number($('#total').text().split(',').join(''));
        let subTotal = Number($(this).closest('form').find('#subTotal').text().split(',').join(''));


        currentTotal -= 0.5 * checkVal;
        subTotal -= checkVal;

        $('#total').text(currentTotal.toLocaleString('en', { useGrouping: true }))
        $(this).closest('form').find('#subTotal').text(subTotal);

        parent.remove();
    })
});
