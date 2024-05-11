function makePhoneCall() {
    
    var phoneNumber = '9843083621';
    window.location.href = 'tel:' + phoneNumber;
}
 
function openWhatsApp() {
    var phoneNumber = '9843083621'; 
    var message = 'Hello!'; 
    var whatsappURL = 'https://wa.me/' + phoneNumber + '?text=' + encodeURIComponent(message);
    window.open(whatsappURL, '_blank');
}


function sendEmail() {
    var email = 'nagarajmaha1976@gmail.com'; 
    var subject = 'Work request'; 
    var body = 'Hello, I would like to in request your services.'; 
    var mailtoURL = 'mailto:' + email + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    window.location.href = mailtoURL;
}

function toggleDropdown() {
    var dropdownContent = document.getElementById("dropdownContent");
    if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
    } else {
        dropdownContent.style.display = "block";
    }

    
    window.scrollTo(0, 0);
}

var dropdownContent = document.getElementById("dropdownContent");


function closeDropdown() {
    dropdownContent.style.display = "none";
}

document.addEventListener("click", function(event) {
    var targetElement = event.target;
    var isDropdown = targetElement.closest(".dropdown"); 
    
    if (!isDropdown) {
        closeDropdown();
    }
});
