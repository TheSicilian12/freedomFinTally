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
    // Event delegation for form submission
    $(document).on('submit', '.myCheckForm, .myCashForm', function (event) {
        event.preventDefault();
        let inputValue = Number($(this).find('.input').val()); // Get input value from the submitted form
        console.log(inputValue)
        if(inputValue > 0) {
            let currentSubTotal = Number($(this).find('#subTotal').text())
            let currentTotal = Number($('#total').text())

            let newSubTotal = currentSubTotal + inputValue;
            let newTotal = currentTotal + inputValue;

            $(this).closest('div').find('.content').append('<div>' + inputValue + '</div>'); // Append to the closest content section relative to the form
            $(this).find('#subTotal').text(newSubTotal);
            $('#total').text(newTotal);
            $(this).closest('form').find('.input').val(''); // Clear the input field
        }
    });

    // Event delegation for clear button click
    $(document).on('click', '#clearButton', function (event) {
        event.preventDefault();
        $(this).closest('form').find('.content').empty();
        $(this).closest('form').find('.input').val(''); // Clear the input field

        let currentTotal = Number($('#total').text());
        let subTotal =  Number($(this).closest('form').find('#subTotal').text());

        let newTotal = currentTotal - subTotal;
        $('#total').text(newTotal)
        $(this).closest('form').find('#subTotal').text('0');
    });
});
