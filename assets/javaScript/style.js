// Show - Hide BuyTicketModal
var modal = document.querySelector ('.modal');
var buyBtns = document.querySelectorAll ('.js-buy-ticket');
var modalClose = document.querySelector ('.modal-close-btn');
var modalContainer = document.querySelector ('.modal-container');
// Show BuyTicketModal
function showBuyTicketModal () {
    modal.classList.add ('open');
}
for (var buyBtn of buyBtns) {
    buyBtn.addEventListener ('click', showBuyTicketModal);
}
//Hide BuyTicketModal
function hideBuyTicketModal () {
    modal.classList.remove ('open');
}
modal.addEventListener ('click', hideBuyTicketModal);
modalClose.addEventListener ('click', hideBuyTicketModal);
modalContainer.addEventListener ('click', function (event) {
    event.stopPropagation ();
})


//Notification message after the user has confirmed the buyTicketModal
function checkModalForm() {
    var sQuantitySticket = document.getElementById("quantity").value;
    var sEmailSticket = document.getElementById("email").value;
    var sPhoneNumberSticket = document.getElementById("phone").value;
    var message = new Array()
    message.push("Quantity of tickets: " + sQuantitySticket);
    message.push("Email: " + sEmailSticket);
    message.push("Phone: " + sPhoneNumberSticket);
    alert(message.join("\n"));
}

//Notification message after the user has confirmed contact form
function checkContactForm() {
    var sName = document.getElementById ("contactName").value;
    var sEmail = document.getElementById ("contactEmail").value;
    var sMessage = document.getElementById ("contactMessage").value;
    var message = new Array ()
    message.push ("Name: " + sName);
    message.push ("Email: " + sEmail);
    message.push ("Message: " + sMessage);
    alert (message.join ("\n"));
}

// Open - Close the mobile menu
var header = document.getElementById ('header');
var mobileMenu = document.getElementById ('mobileMenu');
// mobileMenu.addEventListener ("click", function (event) {
//     var isClosed = header.clientHeight === 50;
//     if (isClosed) {
//         header.style.height = "auto";
//     } else {
//         header.style.height = "50px";
//     }
// }) Or below option
mobileMenu.onclick = function (event) {
    var isClosed = header.clientHeight === 50;
    if (isClosed) {
        header.style.height = 'auto';
    } else { 
        header.style.height = '50px';
    }
}
    // Automatically close the mobile menu when clicked in menuItem
var menuItems = document.querySelectorAll ('.nav-pc li a[href*="#"]');
for (var i = 0; i < menuItems.length; i++) {
    var menuItem = menuItems[i];

    menuItem.onclick = function () {
        header.style.height = '50px';
    }
}