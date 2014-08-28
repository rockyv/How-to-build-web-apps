var main = function(){
	"use strict";
	
	var $new_comment;
	
	//Add comment from hitting enter key
	$(".comment-input input").on("keypress", function(event){
		if(event.keyCode === 13){
			addComment();
		}
	});

	//Add comment from clicking on + button
	$(".comment-input button").on("click", function(event){
		addComment();
	});
	
	//Function to add comment
	var addComment = function(){
		$new_comment = $("<p>").text($(".comment-input input").val());
		$new_comment.hide();
		$(".comments").append($new_comment);
		$new_comment.fadeIn();
		$(".comment-input input").val("");
	};
};

$(document).ready(main);