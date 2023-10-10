console.log("conn");

let emailNode = document.getElementById("emailId");
let passwordNode = document.getElementById("pawdId");
let confPasswordNode = document.getElementById("confPwd");

// now make a display error message for the email address and password make span
function displayErrorMessage(){

}


function formValidation(e) {
    e.preventDefault();
    if (
        emailNode.value === "" &&
        passwordNode.value === "" &&
        confPasswordNode.value === ""
    ) {
        alert("Please enter all required fields");
        return;
    } else {
        if (emailNode.value === "") {
            alert("Please enter email fields");
            console.log("connecting to node ---->", emailNode.value);
        }
        if (passwordNode === "") {
                    console.log("connecting to", passwordNode.value);
                }
        if (confPasswordNode === "") {
                    console.log("connecting to", confPasswordNode.value);
                }
    }
}
