$(document).ready(function(){

    
    $('#inc').click(function(){
        var x= $('#display').val();
        if(x>=10){
            $('#display').css("border-color","red");
            $('#error').text("please enter the less than ten");
            x.stop();

        }
        
        else {
        $('#display').val(parseInt($('#display').val())+1);
        $('#display').css("border-color","black");
        $('#error').text("");
        }
       
    });
 

    $('#dec').click(function(){
        
        var x= $('#display').val();
        if(x > 0){
             $('#display').val(parseInt($('#display').val())-1);
            
        }
        else{
            
            $('#display').css("border-color","red");
            $('#error').text("please enter the  more than zero");
            x.stop();
        }
        if(x<=10){
            $('#display').css("border-color","black");
            $('#error').text("");
            x.stop();
        }
        
    });
     
    $('#reset').click(function(){
        $('#display').val(0);
        $('#display').css("border-color","black");
        $('#error').text("");
    });
    $('#display').change(function(){
        var x= $('#display').val();
        if((x==10) || (x==0)){
            $('#display').css("border-color","red");
            $('#error').text("please enter the less than ten");
            x.stop();
        }
        $('#display').css("border-color","black");
        $('#error').text("");
        
    });

    
    var max_field = 10;
    var addbtn = $('#add');
    var wrapper = $('.container');
    var field_html = '<div><input type="text" name="product[]" value=""><button id="remove">Remove</button></div>';
    var x = 1;
    $(addbtn).click(function(){
        if(x < max_field){
            x++;
            $(wrapper).append(field_html);
        }
    });
    $(wrapper).on('click','#remove',function(e){
        e.preventDefault();
        $(this).parent('div').remove(); 
        x--;
    });
    /*swal*/
    $('#submit').click(function(){
        swal("Good job!", "You clicked the button!", "success");
        //alert("good job")
        window.location.href = "file:///C:/Users/maithili/OneDrive/Documents/website/practice%20files/practice.html";
        
    });
    $('#newfile').click(function(){
        swal("Good job!", "You clicked the button!", "success");
        //alert("good job")
        
    });
});