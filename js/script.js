$(document).ready(function(){
	// slow scroll
	var offset = 100;
	$("#navMenu").on("click","a", function (event) {
	    event.preventDefault();
	    var id  = $(this).attr('href'),
	        top = $(id).offset().top - offset;
	    $('body,html').animate({scrollTop: top}, 1500);
	});
	$("#first-navMenu").on("click","a", function (event) {
	    event.preventDefault();
	    var id  = $(this).attr('href'),
	        top = $(id).offset().top - offset;
	    $('body,html').animate({scrollTop: top}, 1500);
	});

	// blog more
	$('.all-posts-button').on('click', function(e) {
		e.preventDefault();
	    $('.blog-more').toggleClass('blog-more-show');

	    if (($(this).find('span').text()) === "AllPosts")
			$(this).find('span').text('Hide');
		else 
			$(this).find('span').html('All<br>posts');
	});

	// blog post text more
	$('.post-text-more-button').on('click', function(e) {
		e.preventDefault();
		$(this).next(".post-more-text").toggleClass('post-more-text-show');
		$(this).css("display", "none");

	});
	
});

