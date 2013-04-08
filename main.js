console.log('check out this js!');

// when the document is ready
$(document).ready(function() {

	// when a tab is clicked
	$('.tab').click(function() {

		// remove active class from all .tab elements
		// $(this).siblings().removeClass('mob-tab')
		$('.tab').removeClass('tab-active');
		
		// add active class to clicked .tab
		$(this).addClass('tab-active');

		// console.log($(this).attr(id));
		// store clicked tab's id
		var id = $(this).attr('id');

		// remove active class from all tab-data divs
		$('.maincontainer').removeClass('data-active')

		// finally, apply active to any div whose class is the same as clicked div's folder
		$('.' + id).addClass('data-active')
	})

})