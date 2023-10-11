console.log("conn");

let emailNode = document.getElementById("emailId");
let passwordNode = document.getElementById("pawdId");
let confPasswordNode = document.getElementById("confPwd");
let errorMesssage = document.getElementsByClassName("emailErrorIcon");

// now i will use the font awesome plugin to create the email error message when the user clicks


function displayErrorMessage( ) {
    errorMesssage.style.display = "inline-block";

    setTimeout(function () {
        errorMesssage.remove();
    }, 3000);


}
// this function will execute the when the use clicks agin
function again() {
    errorMesssage.style.display = "inline-block";
    // now we will put shake effect on the error message if user clicks again
    errorMesssage.style.color = "red";
    errorMesssage.classList.add("fa-shake");
    setTimeout(function () {
        errorMesssage.classList.remove("fa-shake");
    }, 1000);
    setTimeout(function () {
        errorMesssage.remove();
    }, 3000);

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
        if (emailNode.value.trim() === "") {
            return again();
            console.log( "working");
        }
        if (passwordNode.value.trim() === "") {
            return again();
        }
        if (confPasswordNode.value.trim() === "") {
            return again();
        }
    }
}


// emailNode.addEventListener("click", function () {
//     if (emailNode.value === "") {
//     displayErrorMessage();}
// });

// passwordNode.addEventListener("click", function () {
//     if (passwordNode.value === "") {
        
//         displayErrorMessage();
//     }
// });

// confPasswordNode.addEventListener("click", function () {
//     if (confPasswordNode.value === "") {
//         displayErrorMessage();
        
//     }
// });