
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