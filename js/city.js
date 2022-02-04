

const city = $('.city')
const optionsContainer = $(".options-container")

const optionsList = $('.option')

$(".city").on('click', () => {
    optionsContainer.toggleClass('active')
    city.toggleClass('active')
})


optionsList.each(function () {
    $(this).on('click', function () {
        let cur = $(this).find('label').html()
        $('.city').html(cur)
        optionsContainer.removeClass('active')
    })
});





// linkList.each(function () {
//     $('.nav-link').on('click', function (){
//         let nav = $(this).find('nav-link')
//     })
// })

// const activePage = .prop(pathname).attr('href');
// const link = $('.nav-link').each(link => {
//        if(link.href.includes(`${activePage}`)){
//         toggleClass('active');
//     };
// })


