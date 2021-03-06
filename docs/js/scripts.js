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
		
		if( _$item.parents('.fg-tree').length && _$item.siblings('.fg-control.glyphicon').length === 0 ){

			if( _$item.hasClass('in') ){
				_glyphicon_state = 'minus';    
			}
			else{
			    _glyphicon_state = 'plus';
			}
			
			var _$elem = $('<div class="fg-control glyphicon glyphicon-' + _glyphicon_state + '"></div>');
			
			_$item.before(_$elem);
			
			_$elem.parent().addClass('fg-relative');
			
			_$elem.on('click', function(e){			
				if( _$item.hasClass('in') ){					
					_$item.removeClass('in');
					_$elem.removeClass('glyphicon-minus').addClass('glyphicon-plus');
				}
				else{
					_$item.addClass('in');
					_$elem.removeClass('glyphicon-plus').addClass('glyphicon-minus');
				}
			});    
		}
	});
	
});  

SyntaxHighlighter.all();


