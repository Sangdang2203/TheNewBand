const buyBtns = document.querySelectorAll('.js-buy-ticket')
const modal = document.querySelector('.modal')
const modalClose = document.querySelector('.modal-close-btn')
const modalContainer = document.querySelector('.modal-container')
//Show buyTicketModal
function showBuyTicketModal() {
    modal.classList.add('open')
}
for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', showBuyTicketModal)
}
//Hide buyTicketModal
function hideBuyTicketModal() {
    modal.classList.remove('open')
}
modalClose.addEventListener('click', hideBuyTicketModal)
modal.addEventListener('click', hideBuyTicketModal)
modalContainer.addEventListener('click', function (event) {
    event.stopPropagation()
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