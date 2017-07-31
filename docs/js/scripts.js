$(function() {
	
	$('.fg-panel.fg-left').resizable({
		handles: 'e',
		minWidth: 150,
		resize: function (event, ui){
			
		},
	});
	
	//<div class="glyphicon glyphicon-plus"></div>
	
	$('.fg-tree').each(function(){
		
		var _$item = $(this);
		
		if( !_$item.hasClass('fg-on, fg-on') ){
			_$item.addClass('fg-off');	
		}
		
		if( _$item.parents('.fg-tree').length && _$item.siblings('.fg-control.glyphicon').length === 0 ){

			var _$elem = $('<div class="fg-control glyphicon glyphicon-plus"></div>');
			
			_$item.before(_$elem);
			
			_$elem.on('click', function(e){			
				if( _$item.hasClass('fg-on') ){					
					_$item.removeClass('fg-on').addClass('fg-off')
					_$elem.removeClass('glyphicon-minus').addClass('glyphicon-plus');
				}
				else{
					_$item.removeClass('fg-off').addClass('fg-on')
					_$elem.removeClass('glyphicon-plus').addClass('glyphicon-minus');
				}
			});    
		}
	});
	
});  



