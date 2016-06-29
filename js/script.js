console.log("loaded");
// event.preventDefault();

$("document").ready(function(){
	var slideIndex = 0;
	showSlides();

	function showSlides(){
			console.log("working!");
		var i;
		var slides = $(".mySlides");
		var dots = $(".dot");
		for (i = 0; i < slides.length; i++) {
        	slides[i].style.display = "none"; 	
    	}
    	//creates a loop so after the 3rd slide it loops back to displaying first one
    	for (i = 0; i < dots.length; i++) {
      		dots[i].className = dots[i].className.replace(" active", ""); 
  		}
    	slideIndex++;
    	    if (slideIndex> slides.length) {slideIndex = 1} 
    	    slides[slideIndex-1].style.display = "block"; 
    		dots[slideIndex-1].className += " active";
    		//animates the dots and loops back to the first one after the 3rd
    	    setTimeout(showSlides, 3000); // Change image every 3 seconds
    	}

	  $("#search-input input[type=text]").click(function() {
	  
	  $(this).attr( "placeholder", "");
	});
	  //when click inside search bar function clears placeholder text and returns an empty string
	  $("#search-input input[type=text]").keypress(function(e) {
	  if(e.which == 13){
	  		  	  	// console.log($(this));
	  		$(this).val(""); 
	  	 	
	  		$(this).attr("placeholder", "search site"); 	
	  }
	});
	  //when click enter key code #13 the placeholder text is returned
	  $("#search a").click(function() {
	  $(this).attr( "placeholder", "search site");
	});

	   $("#email-input input[type=email]").click(function() {
	  $("#email-input input[type=email]").attr( "placeholder", "");
	});
	   //when click inside email bar function clears placeholder text and returns an empty string
	   $("#submit-btn").click(function() {
	  		$("#email-input input[type=email]").val(""); 
	  	 	
	  		$("#email-input input[type=email]").attr("placeholder", "search site"); 	
	 });
		//when submit button is clicked the input is set to empty value & returns placeholder text	   
  	  $("#search a").click(function() {
        // var toggleWidth = $("#search-input input[type=text]").width() == 182 ? 0 : 182;
        $("#search-input input[type=text]").toggle("fast");
        console.log("working");
        // $("#search-input input[type=text]").animate({ width: toggleWidth });
        // sets search bar to toggle function from display none to fully displayed when #search a (magnify img) is clicked
 	});
  	  
  	  /*when you scroll to specific pt. on y axis, the testimonial bar will slide down from 90px to 380px
  	  and reveal the blockquotes*/
  	  $("#testimonial a").click(function(){
  	  	event.preventDefault();

  	  $("#testimonial").removeClass("open")
  	});
  	  var count = 0
  	  $(window).scroll (function () {
//detects everytime pg scrolls 
        var sT = $(window).scrollTop();
        //setting variable to detect when scroll down to height of 225 on screen
        var testimonialOffset = $("#testimonial").offset().top
        var aboveTestimonial = testimonialOffset - sT
        
        console.log("above testimonial", aboveTestimonial);
        var offsetLessWindow = testimonialOffset-window.innerHeight;
        console.log("offsetLessWindow", Math.floor(offsetLessWindow))
        //targets position of top of #testimonial element to then perform the .open function
        console.log(sT);
            if (sT >= 225) {
            	//sT=scroll top
                $('header').addClass('navfixed')
                $("#slideshow").css("margin-top", "80px")
            }
            else {
                $('header').removeClass('navfixed')
                $("#slideshow").css("margin-top", "10px")
            }
            //targets header to get into fixed position when scrolling past 225
            console.log("testimonial offset",testimonialOffset)

            // if (sT>=testimonialOffset-aboveTestimonial){
            	if (sT>=Math.floor(offsetLessWindow) && count ==0){
            //math.floor dictates the position height exact with no decimals (1576 instead of 1576.3432)
            	$("#testimonial").addClass("open")
            	count = count + 1;
            	console.log(count);
            //once scrolling goes past position of sT with no decimals then #testimonial stops opening
            }
            
    });
  	   $("a, input[type=email], input[type=submit]").click(function() {
	  event.preventDefault();

	});
});
