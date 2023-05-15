function validate() {
    var name = document.reg_form.name.value;
    var address = document.reg_form.address.value;
    var gender = document.reg_form.gender.value;
    var email = document.reg_form.email.value;
    var mobile = document.reg_form.mobile.value;
    var course = document.reg_form.course.value;
    var dept = document.reg_form.dept.value;
    var p = document.reg_form.pass.value;  
    var cp = document.reg_form.cpass.value; 
    const nameRegex = /^[a-zA-Z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    if (!nameRegex.test(name)) {
        alert('Please enter a valid name.');
        return false;
    }
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return false;
    }
    if (!phoneRegex.test(mobile)) {
        alert('Please enter a valid 10-digit phone number.');
        return false;
    }
    if (!passwordRegex.test(p)) {
        alert('Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, and one digit.');
        return false;
    }
    if (p !== cp) {
        alert('Passwords do not match.');
        return false;
    }
    if (address.length <= 0) {
        alert("Address is required");
        address.focus();
        return false;
    }
    if (gender.length <= 0) {
        alert("Gender is required");
        return false;
    }
    if (course == "select course") {
        alert("Course is required");
        return false;
    }
    if (dept == "Department") {
        alert("Department is required");
        return false;
    }
    return true;
}
