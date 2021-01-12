function registrationFormSubmit(e) {
  console.log("Form is submitted");
  var payload = {
    name: $("#register-name-input").val(),
    email: $("#register-email-input").val(),
    phone: $("#register-phone-input").val(),
    location: $("#register-location-input").val(),
  };
  console.log(payload);
  const request = $.ajax({
    type: "POST",
    url: "http://139.59.84.64/api/1.0/users",
    data: JSON.stringify(payload),
    contentType: "application/json; charset=utf-8",
    dataType: "json",
  });
  request.done(function (resp) {
    var token = resp.token;
    localStorage.setItem("_wos_token", token);
    window.location.href = "/event.html";
  });
  request.fail(function (err, status) {
    const { validationErrors } = JSON.parse(err.responseText);
    const { name, email, phone } = validationErrors;
    $("#name-error").html(name);
    $("#email-error").html(email);
    $("#phone-error").html(phone);
  });
}

function contactFormSubmit(e) {
  // e.preventDefault();
  var payload = {
    name: $(".form-tab.active .contact-name-input").val(),
    email: $(".form-tab.active .contact-email-input").val(),
    phone: $(".form-tab.active .contact-phone-input").val(),
    location: $(".form-tab.active .contact-location-input").val(),
    budget: $(".form-tab.active .contact-budget-input").val(),
    carpetArea: $(".form-tab.active .contact-carpetArea-input").val(),
    profile: $(".profile").val() || "",
    query: $(".form-tab.active .query").val() || "",
  };
  console.log(payload);

  // Commenting out this code because EMAIL will go to client. Please check the payload in console.log above

  // const request = $.ajax({
  //   type: "POST",
  //   url: "http://localhost:8000/api/1.0/contact",
  //   data: JSON.stringify(payload),
  //   contentType: "application/json; charset=utf-8",
  //   dataType: "json",
  // });
  // request.done(function (resp) {
  //   $(".contact-name-input").val("");
  //   $(".contact-email-input").val("");
  //   $(".contact-phone-input").val("");
  //   $(".contact-location-input").val("");
  //   $(".contact-budget-input").val("");
  //   $(".contact-carpetArea-input").val("");
  //   $(".query").val("");
  //   $("#name-error").html("");
  //   $("#email-error").html("");
  //   $("#phone-error").html("");
  // });
  // request.fail(function (err, status) {
  //   const { validationErrors } = JSON.parse(err.responseText);
  //   const { name, email, phone } = validationErrors;
  //   console.log(validationErrors, "********");
  //   $("#name-error").html(name);
  //   $("#email-error").html(email);
  //   $("#phone-error").html(phone);
  // });
}
