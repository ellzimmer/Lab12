$(document).ready(function(){

	$("li").hover(function(){
		$(this).fadeTo("slow",0.25);
	}, function(){
		$(this).fadeTo("slow",1.0);
	});

	$("li").click(function(){
		$(this).toggleClass("highlight");
		var items= $(this).text();
		if($(this).text()==="") {
			$(this).text("Clicked!");
     	}	else {
			$(this).text("");
		}


	});
		
	
});
















	