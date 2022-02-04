$("#selectPage ul li a").on('click' , function(e) {
    e.preventDefault();
    $("#selectPage ul li a").removeClass('active');
    $(this).addClass('active');
})
