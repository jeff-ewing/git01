dojo.require("dojo.NodeList-traverse");

dojo.addOnLoad(function() { 

	var path_name = window.location.pathname;
	path_name = path_name.substring(1, path_name.length);
	var path_array = path_name.split('/')
	if(path_array[(path_array.length-1)] == "" || path_array[(path_array.length-1)] == "index.html"){
		var page_class = 'ibm-me-overview-page';
	}else{
		var page_name = path_array[0];
		var page_class = 'ibm-me-'+page_name+'-page';
	}
	
	var body = dojo.byId("ibm-com");
	dojo.addClass(body, page_class);		

	dojo.query("#ibm-leadspace-body h1").html('IBM Mobile<strong>First</strong>');
	
	//if(dojo.query('.card_container').length !== 0){
		//var _buttons = dojo.query('.card_toggle');
		_//buttons.forEach(function(obj, index){
			//dojo.connect(obj, 'click', function(e){
				//var _container = dojo.byId(dojo.attr(obj, 'rel'));
				//if(dojo.hasClass(_container, 'hover')){
					//dojo.removeClass(_container, 'hover');
				//}else{
					//dojo.addClass(_container, 'hover');
				//}
				//e.preventDefault();
			//});
		//});
	}
	
	if(dojo.query('.ibm-module-container').length !== 0){
		var _curr_ad = 'ibm-module-piece-1', 
			_buttons = dojo.query('.ibm-module-bttn');
		_buttons.forEach(function(_obj, _index){
			dojo.connect(_obj, 'click', function(e){
				var _rel = dojo.attr(_obj, 'rel');
				console.log(_rel);
				if(_rel != _curr_ad){
					dojo.removeClass(dojo.query('.ibm-module-piece.display')[0], 'display');
					dojo.removeClass(dojo.query('.ibm-module-bttn.display')[0], 'display');
					var _new_piece = dojo.byId(_rel);
					dojo.addClass(_new_piece, 'display');
					dojo.addClass(_obj, 'display');
					_curr_ad = _new_piece;
				}
				e.preventDefault();
			});
		});
	}
	
	


});
