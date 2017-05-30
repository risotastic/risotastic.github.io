//Isotope active js code:
//************************

// Active isotope with jQuery code:

// $(function() {
//     $("img.lazy").lazyload();
// });



$('.main-iso').isotope({
	itemSelector: '.item',
	layoutMode: 'fitRows'
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



 $("img").lazyload({
    event : 'scroll'
    ,effect : "fadeIn"
    ,appear:function(){console.log('loaded image')}
  });



 // $(window).load(function(){$('.main-iso').isotope('reLayout');});

//console.log( $('.main-iso').imagesLoaded );

// $('#imgcontainer').imagesLoaded( function() {
//   // images have loaded
//   console.log("loaded")
// });



 $('.main-iso').imagesLoaded()
  .always( function( instance ) {
    console.log('all images loaded');
  })
  .done( function( instance ) {
    console.log('all images successfully loaded');
  })
  .fail( function() {
    console.log('all images loaded, at least one is broken');
  })
  .progress( function( instance, image ) {
    var result = image.isLoaded ? 'loaded' : 'broken';
    console.log( 'image is ' + result + ' for ' + image.img.src );
  });



