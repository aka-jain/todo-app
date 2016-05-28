$(document).ready(function(){

$(".error").hide();

var color=['red','green','orange','black']
	
Array.prototype.pick = function(){
  return this[Math.floor(Math.random()*this.length)];
}

	$(".todo-head i").click(function(){
		var content=$("input").val();
		if(content==''){
			$(".error").hide().fadeIn();
		}
		else{
			c='one';
			$(".error").hide();
			$("input").val("");
			// console.log(color.pick())
			// $(".color-diff").css({
			// 	'background': color.pick()
			// })
			
			$('<li id='+c+' id="drag" draggable="true" ondragstart="drag(event)"><div class="color-diff" style="background:'+ color.pick()+'"></div><i class="fa fa-times"></i>' + content + '</li>').appendTo('.todo-head ul').fadeIn(2000);
			$(".todo-head ul li i").click(function(){
				$(this).parent().remove();
			})

			


		}
		
	})

})