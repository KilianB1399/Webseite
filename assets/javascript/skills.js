// Skills and their respective progress percentages
const skills = [
    { label: "Web Development", percentage: 67.0 },
    { label: "UI Design", percentage: 81.0 },
    { label: "HTML", percentage: 88.0 },
    { label: "CSS", percentage: 81.0 },
    { label: "JavaScript", percentage: 50.0 },
    { label: "Python", percentage: 56.0 },
];

// Start date for experience calculation
const startDate = new Date('2022-06-19'); // Start date for experience calculation

// Function to calculate years of experience
function calculateExperience() {
    const currentDate = new Date();
    const diffInMilliseconds = currentDate - startDate;
    const diffInYears = diffInMilliseconds / (1000 * 60 * 60 * 24 * 365);
    return diffInYears.toFixed(1); // Returning experience with one decimal point
}

// Function to update skills and experience in the HTML
function updateSkillsAndExperience(projectsCompleted) {
    const skillsContainer = document.querySelector('.skills');
    const experienceBox = document.querySelector('.experience .box h2');
    const projectsBox = document.querySelectorAll('.experience .box h2')[1]; // Second box for completed projects

    // Clear existing skills
    skillsContainer.innerHTML = '';

    // Dynamically add skills
    skills.forEach(skill => {
        const skillDiv = document.createElement('div');
        skillDiv.classList.add('skill');

        const label = document.createElement('label');
        label.textContent = skill.label;

        const progressBar = document.createElement('div');
        progressBar.classList.add('progress-bar');

        const progress = document.createElement('div');
        progress.classList.add('progress');
        progress.style.width = `${skill.percentage}%`;

        progressBar.appendChild(progress);
        skillDiv.appendChild(label);
        skillDiv.appendChild(progressBar);
        skillsContainer.appendChild(skillDiv);
    });

    // Update years of experience
    experienceBox.textContent = `${calculateExperience()}`;

    // Update projects completed
    projectsBox.textContent = `${projectsCompleted}`;
}

// Function to fetch GitHub repository count
async function fetchGithubRepoCount(username) {
    try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        const data = await response.json();

        if (response.ok) {
            return data.public_repos;
        } else {
            console.error('Error fetching GitHub data:', data.message);
            return 0; // Return 0 if there's an error
        }
    } catch (error) {
        console.error('Error fetching GitHub data:', error);
        return 0;
    }
}

// Main function to load the skills, experience, and project count
async function init() {
    const username = 'KilianB1399'; // Dein GitHub-Benutzername
    const projectsCompleted = await fetchGithubRepoCount(username); // Anzahl der Repositories von GitHub

    updateSkillsAndExperience(projectsCompleted); // Update page with dynamic data
}

// Call the function to update the page when it's ready
init();
