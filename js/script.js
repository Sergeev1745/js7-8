$(document).ready(function() {
$('.textblock').hide()
$('#tabs-1').show()

$(".prion").click(function(){
	$('.textblock').hide()
	$('#tabs-1').show()
	$('.href').removeClass('active')
	$(this).addClass('active')

})
$('.morbi').click(function(){
	$('.textblock').hide()
	$('#tabs-2').show()
	$('.href').removeClass('active')
	$(this).addClass('active')


})
$('.mauris').click(function(){
	$('.textblock').hide()
	$('#tabs-3').show()
	$('.href').removeClass('active')
	$(this).addClass('active')


})


// form
 var i = 0;
 var inp = $('form input');

 inp.hover(function(event){
 	event.preventDefault();
 	var title = $(this).attr('title')
 	var row = $(this).parent();
 	if (i == 0){
 	row.append('<p>' + title)}
 },
 	function(){
 		if(i == 0){ $(this).next().remove()}
 	}
 );

$('.helpBtn').click(function(){
	if(i == 0) {inp.each(function(){
		var title = $(this).attr('title')
 	var row = $(this).parent();
 	row.append('<p>' + title)
 	i = 1
	})} else {
		$('.row p').remove()
	i = 0;
	}
	
	})


});