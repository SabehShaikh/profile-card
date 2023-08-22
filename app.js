// function fetchUsersAndPopulateNames() {
//     const profileCards = document.querySelectorAll('.profile-card');

//     fetch('https://jsonplaceholder.typicode.com/users')
//         .then(response => response.json())
//         .then(users => {
//             profileCards.forEach((card, index) => {
//                 const nameElement = card.querySelector('.name');
//                 const jobElement = card.querySelector('.job');

//                 nameElement.textContent = users[index].name;
//                 jobElement.textContent = users[index].email
//             });
//         });
// }

// // Call the function when the page loads
// window.onload = fetchUsersAndPopulateNames;

function fetchUsersAndCreateCards() {
    const profileCardContainer = document.querySelector('.profile-card-container');

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
            users.forEach(user => {
                const profileCard = `
                    <div class="profile-card">
                        <div class="date-status">
                            <span class="date"> 22/08/2023 </span>
                            <span class="status"> Active </span>
                        </div>
                        <div class="image">
                            <img src="images/user-profile.png" class="profile-img" alt="">
                        </div>
                        <div class="text-data">
                            <span class="name">${user.name}</span>
                            <span class="job">${user.email}</span>
                        </div>
                        <div class="media-buttons">
                            <a href="#" style="background-color: #4267b2;" class="links">
                                <i class='bx bxl-facebook'></i>
                            </a>
                            <a href="#" style="background-color: #E1306C;" class="links">
                                <i class='bx bxl-instagram'></i>
                            </a>
                            <a href="#" style="background-color: #333;" class="links">
                                <i class='bx bxl-github'></i>
                            </a>
                            <a href="#" style="background-color: #0A66C2;" class="links">
                                <i class='bx bxl-linkedin'></i>
                            </a>
                        </div>
                    </div>
                `;
                profileCardContainer.innerHTML += profileCard;
            });
        });
}

// Call the function when the page loads
window.onload = fetchUsersAndCreateCards;
