$(document).ready(function(){

 
    
   $('.burger').on('click', function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        $('.overlay').toggleClass('visible');
    });

   /* $('.burger').click(function(){
        $('.overlay').toggleClass('visible');
    });*/

   $('.btn-submit').on(click,function(){

    var name = $('name').val();
    var email = $('email').val();
    var message = $('message').val();

    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        if (!regex.test(email)) {
            alert('Please enter valid email');
            return false;
        }else{
            return true
        }

   });

   $(window).scroll( function(){
	
	var current_scroll = $(window).scrollTop();
	
        
        if( $(this).scrollTop() > 200){
            
            $('.go-to-top').fadeIn(200);
        }else{
            $('.go-to-top').fadeOut(300);
        }
        
    });

   $(window).scroll( function(){
	
	var current_scroll = $(window).scrollTop();
	
	
	if( current_scroll > 200){
		
		$('#top-header').addClass('header-white');
	}else{
		$('#top-header').removeClass('header-white');
	}
	
	});
	


});