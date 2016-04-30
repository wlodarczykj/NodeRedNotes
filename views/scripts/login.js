$("#registerForm").submit(function(e) {
  e.preventDefault();
  var email = $("#registerEmail").val();
  var password = $("#registerPassword").val();
  var verifyPassword = $("#verifyPassword").val();
  var newUser = {"name" : email, "password" : password};

  $.post("user/", newUser , function( data ) {
    if(data == "OK"){
      var pathname = $(location).attr('href');
      window.location.replace(pathname + "main");
    }
  });
});
