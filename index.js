function validate() {
    var name = document.reg_form.name;
    var address = document.reg_form.address;
    var gender = document.reg_form.gender;
    var email = document.reg_form.email;
    var mobile = document.reg_form.mobile;
    var course = document.reg_form.course;
    var dept = document.reg_form.dept;
    var p = document.reg_form.pass;  
    var cp = document.reg_form.cpass;  
    if (name.value.length <= 0) {
        alert("Name is required");
        fname.focus();
        return false;
    }
    if (address.value.length <= 0) {
        alert("Address is required");
        address.focus();
        return false;
    }
    if (gender.value.length <= 0) {
        alert("Gender is required");
        gender.focus();
        return false;
    }
    if (course.value == "select course") {
        alert("Course is required");
        course.focus();
        return false;
    }
    if (dept.value == "Department") {
        alert("Department is required");
        dept.focus();
        return false;
    }
    if (email.value.length <= 0) {
        alert("Email Id is required");
        email.focus();
        return false;
    }
    if (mobile.value.length <= 10) {
        alert("Mobile number is required");
        mobile.focus();
        return false;
    }
    if(p.value.length==0)
    {
        alert("Password is required")
        return false
    }
    if(p.value.length<8)
    {
        alert("The password should be 8 characters");
        return false;
    }  
    if(p.value !== cp.value)  
    {   
        alert("Passwords did not match"); 
        return false
    } 
    return true;
}