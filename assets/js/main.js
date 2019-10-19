// theme dark
$(document).ready(function() {
    $('#dark').click(function(){
        $('#bright').show();
        $('#dark').hide();
        $('#body').css("backgroundColor", "#000");
        $('#body').css("backgroundImage", "none");
        $('#body').css("color", "#fff");
    });
});
// theme bright
$(document).ready(function() {
    $('#bright').click(function(){
        $('#dark').show();
        $('#bright').hide();
        $('#body').css("backgroundImage", "url('/assets/img/bg-img.jpg')");
        $('#body').css("color", "#000");
    });
});
//mouse event
$(document).ready(function () {  
    $('#mouseover').mouseover(function () { 
        var date = new Date();
        $('#hover').css("color", "#67a272");
        $('#date').text(date);
    });

    $('#mouseover').mouseout(function () { 
        $('#hover').css("color", "#e84646");
        $('#date').text("");
    });
});
//change name
$(document).ready(function() {
  $("#changeName").click(function() {
    var fname = $("#fname").val();
    $("#name").text(fname);
    $("#fname").val("");
    console.log(fname);
  });
});
// add hard skill
$(document).ready(function() {
  $("#btnAdd1").click(function(e) {
    var list = $("#hSkill").val();
    $("<li>")
      .text(list)
      .prependTo("#hardSkill");
    $("#hSkill").val("");
  });
});
// add soft skill
$(document).ready(function() {
  $("#btnAdd2").click(function(e) {
    var list = $("#sSkill").val();
    $("<li>")
      .text(list)
      .prependTo("#softSkill");
    $("#sSkill").val("");
  });
});
//delete skill
$(document).ready(function() {
  $("#softSkill, #hardSkill").on("click", "li", function() {
    $(this).toggleClass("select");
  });

  $("#btnRemove").click(function() {
    $("li.select").remove();
  });
});
