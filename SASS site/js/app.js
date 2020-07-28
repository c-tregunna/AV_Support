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

//select random staff to display

const modal = document.querySelector('.modal-content');
let html = '';




// Display modal when click a card
const staffInfo = document.querySelector('.staff-img-wrap');
let overlay = document.querySelector('.overlay');

staffInfo.addEventListener('click', e => {

    if (e.target !== staffInfo) {
        const card = e.target.closest(".card");
        overlay.classList.remove('hidden');
    }
    let singleStaff = staffs[Math.floor(Math.random() * staffs.length)];
    html += `
    <h2>${singleStaff.name}</h2>
    <hr>
    <h3>${singleStaff.email}</h3>
  `;
  console.log(html);

  modal.innerHTML = html;
});

//Close modal
const closeModal = document.querySelector('.modal-close');
closeModal.addEventListener('click', e => {
    overlay.classList.add('hidden');
    html = '';
});