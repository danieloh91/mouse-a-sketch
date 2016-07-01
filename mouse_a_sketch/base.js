console.log("this is a sanity check");

$(document).ready(function(){
  console.log("Let's get coding!");
  $("td").on("mouseover", function (e) {
    $(this).css("background-color", $("input").val());
  });
});
