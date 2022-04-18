window.onload = init;


function init() {

	
	//Code to hide or show the Mobile Menu Bars 'on click//
	document.querySelector('.mob-bars').onclick = showHideMobileMenu;

	// Code for the JQuery function attached to the submit event of the form with the id "form"
	$('#form').submit(function (e) {
		// e.preventDefault avoids the form being submitted to the page specified in the action attribute 
   		 e.preventDefault();
   		 // This code is for passing the current form (this) to the variable form 
   		 $("#fresults").removeClass('reveal');
   		 var form = this;
   		 // fadeIn is a jQuery function to fadeIn an element 
   		 $(".overlay-container").fadeIn(1000, function(){
   		 		//This code is to call the showFormValues function and pass the variable form to it as an argument
   		 		showformValues(form);
		   		 // fadeOut is a jQuery function to fadeOut an element 
   		 		$('.overlay-container').delay(500).fadeOut(500);
   		 		$("#fresults").addClass('reveal');
   		 });
	});

}



//Code to show or hide the Mobile Navigation Menu 'on click' of the Mobile Menu Bars//
function showHideMobileMenu() {

	var mobileNav = document.querySelector('.mobile-nav');

	// in a if statement == is used to compare two value, if the values matches then the condition is true
	// an if statement is followed by an else statement which runs when the given condition is not met
	if(mobileNav.style.display=="block") {
		mobileNav.style.display="none";
	} else {
		mobileNav.style.display="block";
	}
}

// This code is to show the form values in the fresults div with the argument "form"
function showformValues(form){
	//serializeArray is a jQuery function used to get the values of a form as a js object
	var formValues = $(form).serializeArray(); 
	// $.each is a jQuery alternative to the 'for' loop to iterate through a JS array or object; this is especially beneficial when the length of array is not known
	// index is the index  of the current element i.e 0,1,2,3 etc. 
		//'field' is the actual field being accessed 
		
	$.each(formValues, function(index, field){

		// This code does the following: 
		// 1) $("#results") -- (Gets the/selects the div with the id 'fresults')
		// 2) .fund("#"+field.name+"_result") -- finds the element with the id equal to the name of the field being accessed along with text ("_result") Eg : name_result, postal_result, email_result
		// 3) Modifies the text inside the selected element and replaces it with the value of this field   
		$("#fresults").find("#"+field.name+"_result").text(field.value);

		// This code is a special check for email to add a link instead of just a string
		if(field.name=="email"){
			$("#fresults").find("#"+field.name+"_result").attr("href", "mailto:"+field.value);
		}
	});				
}