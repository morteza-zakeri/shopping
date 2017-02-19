$('.special.cards .image').dimmer({
  on: 'hover'
});

$( document ).ready(function() {
				
	$('.special.cards .image').click(
		  function(){
		  	if($('#test').hasClass('dimmed')){
				$(this).dimmer('hide');
			}
			else{
				$(this).dimmer('show');
			}					  			
		}
	);
	$('.special.cards .image').mouseleave(
	  	function(){
	  		$(this).dimmer('hide')
	  	}
	);
});
