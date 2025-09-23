const introductionH2 = document.getElementById("introduction");
const question1H2 = document.getElementById("question-1");
const question2H2 = document.getElementById("question-2");
const question3H2 = document.getElementById("question-3");
const conclusionH2 = document.getElementById("conclusion");

const nav = document.getElementById("nav");
const navHeight = nav.getBoundingClientRect().height;

const projectNameDiv = document.getElementById("project-name");
const navButton1 = document.getElementById("nav-button-1");
const navButton2 = document.getElementById("nav-button-2");
const navButton3 = document.getElementById("nav-button-3");
const navButton4 = document.getElementById("nav-button-4");
const navButton5 = document.getElementById("nav-button-5");

const navButtons = [projectNameDiv, navButton1, navButton2, navButton3, navButton4, navButton5];
const windowLocations = [projectNameDiv, introductionH2, question1H2, question2H2, question3H2, conclusionH2];

function ChangeWindowLocation (index) {
    const location = windowLocations[index].getBoundingClientRect();
    let y = location.top + window.scrollY - navHeight*2;

    if (index == 0) {y = 0};
    
    window.scrollTo({ top: y, left: 0, behavior: 'smooth' });
};

navButtons.forEach((button, index) => {
    if (!button) return;
    button.addEventListener('click', () => ChangeWindowLocation(index));
});

