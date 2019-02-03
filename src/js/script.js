// some scripts

// jquery ready start
$(document).ready(function() {
	// jQuery code


});
// jquery end

$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') ) {
        $(this).collapse('hide');
    }
});