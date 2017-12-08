

$(document).ready(function () {
    
    $("#first_section").mouseenter(function(){
    $("#h2").fadeOut("fast");
    $("#h2").fadeIn(3300);
    });

    $("#forth_section").mouseenter(function(){
    $("#h2").fadeOut(4400);
    $("#h2").fadeIn(3300);
    });

   $("#second_section").mouseenter(function(){
    $("#h1").fadeOut("fast");
     $("#h1").fadeIn(3300);
    });

   $("#second_section").mouseenter(function(){
    $("#h1").fadeOut(4400);
     $("#h1").fadeIn(3300);
    });

    $('#slide').hide();
    $('#slide_button').click(function () {
    $('#slide').slideToggle("slow");
    });

     $('#slide2').hide();
    $('#slide_button2').click(function () {
      $('#slide2').slideToggle("slow");
    });


 $('#form').on('submit',function (e) {

              $.ajax({
                type: 'post',
                url: 'form.php',
                data: $('#form').serialize(),
                success: function () {
                 alert("Email has been sent!");
                }
              });
          e.preventDefault();
        });

});





