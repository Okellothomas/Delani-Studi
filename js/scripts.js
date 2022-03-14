// implementation

$(document).ready(function() {
    $("#blanks form").submit(function(e) {
      var nameInput = $("input#name").val()
      var emailInput = $("input#emil").val()
      var messageTextArea= $("input#message").val()

      $(".person1").text(person1Input);
      $(".person2").text(person2Input);
      $(".animal").text(animalInput);
      $(".exclamation").text(exclamationInput);
      $(".verb").text(verbInput);
      $(".noun").text(nounInput);

      $("#story").show();

      e.preventDefault();
    });
  });


  