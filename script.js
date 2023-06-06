var submit = document.getElementById('submit');
submit.addEventListener('click', function(e) {
  e.preventDefault();

  var fields = ['name', 'email', 'age', 'branch', 'division', 'position'];
  var formData = {};

  var enterAllFields = true; // Assume all fields are entered initially

  fields.forEach(function(field) {
    var value = document.getElementById(field).value;
    formData[field] = value;

    if (value === '') {
      enterAllFields = false; // Set to false if any field is empty
    }
  });

  if (!enterAllFields) {
    alert('Please enter all the fields.');
    return;
  }

  var body = Object.keys(formData).map(function(key) {
    return key + ': ' + formData[key];
  }).join('<br/> ');

  Email.send({
    SecureToken: "ef56893e-3640-40e4-87a0-dbb1bd075e53",
    To: '2021.rashmit.vartak@ves.ac.in',
    From: "rashmitvartak@gmail.com",
    Subject: "Details of the player:",
    Body: body
  }).then(function(message) {
    console.log(message);
    alert("Form has been submitted!");
    document.getElementById("teamForm").reset();
  });
});
