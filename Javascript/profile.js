document.addEventListener("DOMContentLoaded", function() {
    var image = document.getElementById("aport1");
    if (image) {
        image.onclick = function() {
            window.open("https://disha-0704.github.io/Aports.github.io/", "_blank");
        };
    }
});


document.addEventListener("DOMContentLoaded", function() {
    var image1 = document.getElementById("cz1");
    if (image1) {
        image1.onclick = function() {
            window.open("https://disha-0704.github.io/Ecommerce.github.io/index.html", "_blank");
        };
    }
});


document.addEventListener("DOMContentLoaded", function() {
    var image2 = document.getElementById("eet1");
    if (image2) {
        image2.onclick = function() {
            window.open("https://eet-frontend.azurewebsites.net/home", "_blank");
        };
    }
});

document.addEventListener("DOMContentLoaded", function() {
    var image2 = document.getElementById("fit2be1");
    if (image2) {
        image2.onclick = function() {
            window.open("https://disha-0704.github.io/FiT2Be.github.io/", "_blank");
        };
    }
});



document.addEventListener("DOMContentLoaded", function() {
    var image3 = document.getElementById("desawar_1");
    if (image3) {
        image3.onclick = function() {
            window.open("https://disha-0704.github.io/Desawar.github.io/", "_blank");
        };
    }
});


document.addEventListener("DOMContentLoaded", function() {
    var image4 = document.getElementById("friendsbook_1");
    if (image4) {
        image4.onclick = function() {
            window.open("https://disha-0704.github.io/Friendsbook.github.io/", "_blank");
        };
    }
});



document.addEventListener('DOMContentLoaded', function() {
    // Scroll to the element with id "nav_23"
    var element = document.getElementById("about1");

    if (element) {
        // Set the initial style
        element.style.top = '100px';

        // Add a scroll event listener
        window.addEventListener('scroll', function() {
            // Check if the user has scrolled
            if (window.scrollY > 0) {
                // If scrolled, set the style to '0'
                element.style.top = '0';
            } else {
                // If at the top, set the style back to '100px'
                element.style.top = '100px';
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('moreabtme1').addEventListener('click', function() {
        window.scrollBy({
            top: 500, // Scroll down by 500 pixels
            left: 0,
            behavior: 'smooth' // Smooth scroll
        });
    });
});

document.getElementById("submit_btn").click()
if(document.getElementById("name1").value===""){
    document.getElementById("note1").innerHTML="Please enter a first name"
}


function notes1(){
let name = document.getElementById("name1").value;
if(name.length===0){
document.getElementById("note1").innerHTML="Please Enter a Valid name"
}

let email =document.getElementById("email1").value;
if(email.length === 0){
    document.getElementById("note2").innerHTML="Please Enter a valid email address"
}
let subject1 = document.getElementById("subject1").value;
if(subject1.length === 0){
    document.getElementById("subject2").innerHTML = "Please Enter a valid subject"
}

// let message1 = document.getElementById("textarea1").value;
// if(message1.length === 0){
//     document.getElementById("text1").value=""
// }
}