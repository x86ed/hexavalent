$(document).ready(function(){
	if($('.vim-init').length )
	{
		$.getScript( wr+'js/ajax/..', function()
		{
			setTimeout(function()
			{
			}, 200);	
		});
	};
	$(document).keyup(function(e) { e.preventDefault(); alert(e.keyCode)});
});
