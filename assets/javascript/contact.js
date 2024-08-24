function submitForm() {
    var form = document.getElementById("contact-form");
    var name = document.getElementById("name").value;
    var lastName = document.getElementById("last-name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var telephone = document.getElementById("telephone").value;
    var message = document.getElementById("message").value;

    var mailtoLink = "mailto:bogus.kilian@outlook.de"
        + "?subject=" + encodeURIComponent(subject)
        + "&body=" + encodeURIComponent("Name: " + name + "\n"
            + "Nachname: " + lastName + "\n"
            + "E-Mail: " + email + "\n"
            + "Telefonnummer: " + telephone + "\n"
            + "Nachricht: " + message);

    window.location.href = mailtoLink;

    // Reset the form fields
    form.reset();
}
