//Isotope active js code:
//************************

// Active isotope with jQuery code:


var $grid = $('.main-iso').isotope({
	itemSelector: '.item',
	layoutMode: 'fitRows'
});

// BVB added code for imagesLoaded, it re-renders the layout after each image is loaded

// layout Isotope after each image loads
$grid.imagesLoaded().progress( function() {
  $grid.isotope('layout');
});


// Isotope click function
$('.iso-nav ul li').click(function(){
	$('.iso-nav ul li').removeClass('active');
	$(this).addClass('active');

	var selector = $(this).attr('data-filter');
	$('.main-iso').isotope({
		filter: selector
	});
	return false;
});

// BVB removed lazy loading code