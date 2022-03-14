// // Implementing the contact form. 

// $(document).ready(function() {
//     $("#texts form").submit(function(e) {
//       var content = ["name1", "email1", "message1"];

//       content.forEach(function(messages) {
//         var textMessage = $("input#" + messages).val();
//         $("." + messages).text(textMessage);
//       });

//       $("#messag").show();

//       e.preventDefault();
//     });
//   });

  $(document).ready(function() {
    $("form").submit(function(e) {
        var nameInput = $("input#nameone").val();
        var email2Input = $("input#emailone").val();
        var messageTextarea = $("textarea#messageone").val();
        $(".name1").text(nameInput);
        $(".email1").text(email2Input);
        $(".message1").text(messageTextarea);

        $("#massag").show();

        e.preventDefault();
    });
});