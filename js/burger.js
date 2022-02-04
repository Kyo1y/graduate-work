let hamburger = $('button.hamburger');
let navList = $('.nav-list');
let navCont = $('.nav-container')
let navTitle = $('.nav-title')
let cont = $('.container')
let bgblack = $('.bgblack')
let navButton = $('.nav-button')
hamburger.on('click', function() {
	hamburger.toggleClass('active');
	navList.toggleClass('active');
	navCont.toggleClass('active');
	navTitle.toggleClass('active');
	cont.toggleClass('active');
	bgblack.toggleClass('active');
	navButton.toggleClass('active');
});
