$( document ).ready(function() {

  // if (onclick = "entrance"){
  //     document.getElementById("select_entrance");
  // }
  

    function changeColor() {
      $("#area_selector").css("color", "#ff9900");
    }

    $("#area_selector").click(changeColor);

  $(".sent_button").click(function(){
    var name = $(this).siblings("h3");
     $(this).append( '<img class="thanks_img" src="assets/ThankYou_Locate_A_Rep_WhtBkg.png">' );
  });
});


