var divs = ['#home', '#skills', '#projects', '#contact'];
var index = 0;

$(document).ready(function() {
	    $('#next').on('click', function() {
	        if(index == 3)
    		{
    			$("#next").attr("disabled", true);
    		}
    		else
    		{
    			$("#next").attr("disabled", false);
    			$(divs[index]).fadeOut('slow', function() {
    				index ++;
    				console.log(index);
    				$(divs[index]).fadeIn('slow');
    				setTimeout(function(){}, 1500);
    			});
    		}
	    });
	    $('#prev').on('click', function() {
	        if(index == 0)
    		{
    			$("#prev").attr("disabled", true);
    		}
    		else
    		{
    			$("#prev").attr("disabled", false);
    			$(divs[index]).fadeOut('slow', function() {
    				index --;
    				//console.log(index);
    				$(divs[index]).fadeIn('slow');
    				setTimeout(function(){}, 1500);
    			});
    		}
	    });
});
