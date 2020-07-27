let employees = [];
const urlAPI = 'https://randomuser.me/api/?results=12&inc=name, email, phone, &nat=GB';
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal-content');
const closeModal = document.querySelector('.modal-close');
const modalContainer = document.querySelector('.modal');

/*--------------
Fetch info from API
--------------*/
fetch(urlAPI)
    .then(res => res.json())
    .then(res => res.results)
    .then(displayEmployees)
    .catch(err => console.log(err))

    function displayEmployees(employeeData) {
        employees = employeeData;
        console.log(employeeData);

        employees.forEach((employee, index) => {
            let name = employee.name;
            let email = employee.email;

            const modalHTML = `

            <div class="text-container">
                <h2 class="name">${name.first} ${name.last}</h2>
                <hr>
                <p class="email">${email}</p>
            </div>
            `;
        });
        overlay.classList.remove('hidden');
        modal.innerHTML = modalHTML;
    }

//Close modal
closeModal.addEventListener('click', e => {
    let modal = document.querySelector('.overlay');
    modal.classList.add('hidden');
});