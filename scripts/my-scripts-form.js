// A $( document ).ready() block.
$( document ).ready(function(){
  //alert("My Alert");
  
  //This is for the Sign Up Form
  $(document).on('change', '#t-size', chkSize);
  
  function chkSize(){
    var t_size = $('#t-size').val();
    
    if(t_size == 'other') {
      $('#other').removeAttr('disabled');
    }
    else{
        $('#other').attr('disabled', true);
        $('#other').val('');
      }
  }//end function
  //End of Sign Up Form  
});
