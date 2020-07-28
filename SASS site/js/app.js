//Array of staff information to be loaded in to modal

let staffs = [
    {
    name: 'John Smith',
    email: 'johnsmith@avsupport.com'
    },
    {
    name: 'Sarah John',
    email: 'sarahjohn@avsupport.com'
    },
    {
    name: 'Rob Time',
    email: 'robtime@avsupport.com'
    },
    {
    name: 'Sue Hand',
    email: 'suehand@avsupport.com'
    },
    {
    name: 'Tim Once',
    email: 'timonce@avsupport.com'
    }
];



const modal = document.querySelector('.modal-content'); // Modal where html will go
let html = ''; // empty to input the staff data from array

const staffInfo = document.querySelector('.staff-img-wrap'); // container for staff card to click to open modal
let overlay = document.querySelector('.overlay'); // overlay containing modal
// Display modal when click a card
staffInfo.addEventListener('click', e => {

    if (e.target !== staffInfo) {
        const card = e.target.closest(".card"); //only if you click the div .card
        overlay.classList.remove('hidden'); //remove hidden class from overlay
    }
    let singleStaff = staffs[Math.floor(Math.random() * staffs.length)]; //select random staff to display
    //the html that will go in to the modal
    html += `
    <h2>${singleStaff.name}</h2>
    <hr>
    <h3>${singleStaff.email}</h3>
  `;
  console.log(html);

  modal.innerHTML = html; //insert html into modal
});

//Close modal
const closeModal = document.querySelector('.modal-close'); //select the close icon
closeModal.addEventListener('click', e => {
    overlay.classList.add('hidden'); //on click add hidden to overlay
    html = ''; // clear the html so when you open the next modal it only have one staff info
});

//thank you for form submit


function validateForm() {
    let userName = document.forms["contact-form"]["user_name"].value;
    let userEmail = document.forms["contact-form"]["user_email"].value;
    let userMessage = document.forms["contact-form"]["user_message"].value;

    if (userName === "" || userEmail === "" || userMessage === "") {
      alert("Please complete all section of the form.");
      return false;
    } else {
        alert("Thank you. Your message has been sent and we will be in touch as soon as possible");
        return true;
    }
  }

const formSubmit = document.querySelector('.submit');
formSubmit.addEventListener('click', e => {
    e.preventDefault();
    validateForm();
});