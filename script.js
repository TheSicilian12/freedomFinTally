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
    $(document).on('submit', '.myForm', function (event) {
        event.preventDefault();
        let inputValue = $(this).find('.input').val(); // Get input value from the submitted form
        $(this).closest('div').find('.content').append('<div>' + inputValue + '</div>'); // Append to the closest content section relative to the form
        console.log('submit')
    });

    // Event delegation for clear button click
    $(document).on('click', '#clearButton', function (event) {
        event.preventDefault();
        $(this).closest('form').find('.content').empty();
        console.log('clear')
    });
});
