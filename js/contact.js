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
    $("button#Submit").click(function(e) {
      //  alert('begining is fine');
        var nameInput = $("input#nameone").val();
        var email2Input = $("input#emailone").val();
        var messageTextarea = $("textarea#messageone").val();
        $(".name1").text(nameInput);
        $(".email1").text(email2Input);
        $(".message1").text(messageTextarea).append('Your Message is received, Thank you!');

        e.preventDefault();
    });

    $("button#Refresh").click(function(e) {

      location.reload();

       e.preventDefault();
  
   });
});