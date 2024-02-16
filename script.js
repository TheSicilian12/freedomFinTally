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
    $(".hello").on('click', function () {
        $(this).addClass('blue');
    });

    // Event delegation for form submission
    $(document).on('submit', '.myCheckForm', function (event) {
        event.preventDefault();
        let inputValue = $(this).find('.input').val(); // Get input value from the submitted form
        let currentTotal = Number($(this).find('#total').text())
        $(this).closest('div').find('.content').append('<div>' + inputValue + '</div>'); // Append to the closest content section relative to the form

        let newTotal = currentTotal + Number(inputValue);

        $(this).find('#total').text(newTotal);
        $(this).closest('form').find('.input').val(''); // Clear the input field
    });

    // Event delegation for clear button click
    $(document).on('click', '#clearButton', function (event) {
        event.preventDefault();
        $(this).closest('form').find('.content').empty();
        $(this).closest('form').find('.input').val(''); // Clear the input field
        $(this).closest('form').find('#total').text('0');
    });
});
