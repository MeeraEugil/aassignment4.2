function validateForm() {
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let dob = document.getElementById("dob").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let ageField = document.getElementById("age");
    
    let birthYear = new Date(dob).getFullYear();
    let currentYear = new Date().getFullYear();
    let age = currentYear - birthYear;
    
    if (age < 15 || age > 30) {
        alert("Age must be between 15 and 30 years.");
        return;
    }
    ageField.value = age;
    
    let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!password.match(passwordPattern)) {
        alert("Password must be at least 8 characters long, contain one uppercase, one lowercase letter, and one number.");
        return;
    }
    
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }
    
    alert("First Name: " + firstName + "\nLast Name: " + lastName);
    document.getElementById("output").innerHTML = `<p>First Name: ${firstName}</p><p>Last Name: ${lastName}</p>`;
}
