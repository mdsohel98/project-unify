// navbar style
// =================================
$('.all-slider').slick({
	dots: true,
	infinite: true,
	speed: 300,
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows:false,
	autoplay:true,
	responsive: [
	  {
		breakpoint: 1024,
		settings: {
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  infinite: true,
		  dots: true
		}
	  },
	  {
		breakpoint: 600,
		settings: {
		  slidesToShow:1,
		  slidesToScroll: 1
		}
	  },
	  {
		breakpoint: 575,
		settings: {
		  slidesToShow: 1,
		  slidesToScroll: 1
		}
	  }
	  // You can unslick at a given breakpoint now by adding:
	  // settings: "unslick"
	  // instead of a settings object
	]
  });
		  
//   ====================MIXITuP===============================

var containerEl = document.querySelector('.galary-content');

			var mixer = mixitup(containerEl);

//===============Our client slider=============================================== 


$('.allItem-slider').slick({
	dots: true,
	infinite: true,
	speed: 300,
	slidesToShow: 2,
	slidesToScroll: 1,
	arrows:false,
	// autoplay:true,
	responsive: [
	  {
		breakpoint: 1024,
		settings: {
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  infinite: true,
		  dots: true
		}
	  },
	  {
		breakpoint: 600,
		settings: {
		  slidesToShow: 1,
		  slidesToScroll: 1
		}
	  },
	  {
		breakpoint: 480,
		settings: {
		  slidesToShow: 1,
		  slidesToScroll: 1
		}
	  }
	  // You can unslick at a given breakpoint now by adding:
	  // settings: "unslick"
	  // instead of a settings object
	]
  });

//   ============ Blog slider ==================================================
$('.blog-slider').slick({
	dots: true,
	infinite: true,
	speed: 300,
	slidesToShow: 2,
	slidesToScroll: 1,
	arrows:false,
	autoplay:true,
	responsive: [
	  {
		breakpoint: 1024,
		settings: {
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  infinite: true,
		  dots: true
		}
	  },
	  {
		breakpoint: 600,
		settings: {
		  slidesToShow: 1,
		  slidesToScroll: 1
		}
	  },
	  {
		breakpoint: 480,
		settings: {
		  slidesToShow: 1,
		  slidesToScroll: 1
		}
	  }
	  // You can unslick at a given breakpoint now by adding:
	  // settings: "unslick"
	  // instead of a settings object
	]
  });
//   ========= our partner slider =======================

$('.slide-partner').slick({
	dots: true,
	infinite: true,
	speed: 300,
	slidesToShow: 5,
	slidesToScroll: 1,
	arrows:false,
	autoplay:true,
	// centerMode:true,
	// centerPadding:true,
	responsive: [
	  {
		breakpoint: 1024,
		settings: {
		  slidesToShow: 3,
		  slidesToScroll: 1,
		  infinite: true,
		  dots: true
		}
	  },
	  {
		breakpoint: 600,
		settings: {
		  slidesToShow: 2,
		  slidesToScroll: 1
		}
	  },
	  {
		breakpoint: 480,
		settings: {
		  slidesToShow: 2,
		  slidesToScroll: 1
		}
	  }
	  // You can unslick at a given breakpoint now by adding:
	  // settings: "unslick"
	  // instead of a settings object
	]
  });
