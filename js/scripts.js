$(document).ready(function() {
  //alert("jQuery is on the job...");
  $("#appointment form").submit(function(event) {
    event.preventDefault();

    var yournameInput = $("input#yourname").val();
    var yourdateInput = $("input#yourdate").val();
    var yourtimeInput = $("input#yourtime").val();
    alert(yourtimeInput);
    var ourtimeInput = parseInt(yourtimeInput) + 2;

    $(".yourname").text(yournameInput);
    $(".yourdate").text(yourdateInput);
    $(".yourtime").text(yourtimeInput);
    $(".ourtime").text(ourtimeInput);

    $("#appointment").hide();
    $("#confirm").show();
  });
});
