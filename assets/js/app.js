(function($){
	'use strict';
	
	$.fn.parcel = function(options){
  
      var defaults = {
          length : null,
          breadth: null,
          height:  null,
          weight:  null,
          message: null,
          calc:    null,
          mult:    null
      };
      
      var settings = $.extend(true, {}, defaults, options);
      
      //Parcel sizes
      var size = {
      	Small:  settings.small.Length  * settings.small.Breadth  * settings.small.Height,
        Medium: settings.medium.Length * settings.medium.Breadth * settings.medium.Height,
        Large:  settings.large.Length  * settings.large.Breadth  * settings.large.Height
      };
      
      var fnc = {
          Init: function () {
						
            //Cache objects
            settings.length  = $("#length");
            settings.breadth = $("#breadth");
            settings.height  = $("#height");
            settings.weight  = $("#weight");
            settings.message = $("#message");
            settings.calc    = $("#calc");
          },
          
          Calc: function () {
          
          		settings.calc.click(function(){
              	//Check required values
                if( settings.length.val()  < 0 || settings.length.val()  == ""  ||
                    settings.breadth.val() < 0 || settings.breadth.val() == ""  ||
                    settings.height.val()  < 0 || settings.height.val()  == ""  ||
                    settings.weight.val()  < 0 || settings.weight.val()  == ""  ){
                	 
                   	settings.message.html("<div class='msg alert'>Enter all measurements please.</div>");
                	return;
                }
              
              	//Max weight allowed 25KG
              	if( settings.weight.val() > settings.maxKG){
                	settings.message.html("<div class='msg alert'>Enter package with a maximum weight of " + settings.maxKG + "KG</div>");
                	return;
                }
                
                //Parcel sizing calc
                var parcel = settings.length.val() * settings.breadth.val() * settings.height.val();
                
                if ( parcel <= size.Small ){ 
                    settings.message.html("<div class='msg success'>Small Package: <span>$5</span></div>");
                    return;
                }else if( parcel > size.Small && parcel <= size.Medium ){
                	settings.message.html("<div class='msg success'>Medium Package: <span>$7.50</span></div>");
                    return;
                }else if( parcel > size.Medium){
                	settings.message.html("<div class='msg success'>Large Package: <span>$8.50</span></div>");
                    return;
                }
               
              });
          },
          
      };
      
      //Init
      fnc.Init();
      fnc.Calc();
      
	}//end $.fn
	
})(jQuery);





