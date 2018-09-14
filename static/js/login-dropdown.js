	function DropDown(el) {
		    this.ld = el;
		    this.initEvents();
		}
		DropDown.prototype = {
		    initEvents : function() {
		        var obj = this;
		
		        obj.ld.on('click', function(event){
		            $(this).addClass('active');
		            event.stopPropagation();
		        });
		    }
		}
		
		$(function() {
	
			$(document).click(function() {
				// all dropdowns
				$('.login-dropdown').addClass('active');
			});							
						
			});