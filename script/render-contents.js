import personalData from "../data/personal-data.js";
import services from "../data/services-data.js";
import projects from "../data/projects-data.js";


//-----------------Rendering Page Contents----------------//
export function renderMainPage(){
  renderWebsiteLogo();
  renderProfileCard();
  renderAboutSection();
  renderServicesSection();
  renderProjectsSection();
}


// Rendering Website Logo 
function renderWebsiteLogo(){
  const logo = personalData.websiteLogo;

  const websiteLogo = document.createElement("link");
  websiteLogo.rel = "icon";
  websiteLogo.type = "image/png";
  websiteLogo.href = `images-and-icons/icons/${logo}`;
  document.head.appendChild(websiteLogo);
}


//-----Rendering Side Profile Card-----//
function renderProfileCard() {
  const profileCardHTML = `
   <img src="images-and-icons/images/${personalData.photo}" alt="profile-pic" class="profile-pic">
    <h3 class="my-name">${personalData.name}</h3>
    <p class="profession">${personalData.profession}</p>
    <hr class="line">
    <div class="card email">
      <div class="card-icon">
        <img src="images-and-icons/icons/email-icon.png" alt="email-icon">
      </div>
      <div>
        <p class="card-heading">EMAIL</p>
        <p class="card-value">${personalData.email}</p>
      </div>
    </div>
    <div class="card contact-number">
      <div class="card-icon">
        <img src="images-and-icons/icons/contact-icon.png" alt="contact-icon">
      </div>
      <div>
        <p class="card-heading">PHONE</p>
        <p class="card-value">${personalData.contactNumber}</p>
      </div>       
    </div>
    <div class="card location">
      <div class="card-icon">
        <img src="images-and-icons/icons/location-icon.png" alt="location-icon">
      </div>
      <div>
        <p class="card-heading">LOCATION</p>
        <p class="card-value">${personalData.adress}</p>
      </div>      
    </div>
    <nav class="socmed-nav">
      <ul>
        <li><a href="${personalData.fbLink}"><img src="images-and-icons/icons/facebook.png" alt="fb-icon" class="socmed-icon"></a></li>
        <li><a href="${personalData.instagramLink}"><img src="images-and-icons/icons/instagram.png" alt="insta-icon" class="socmed-icon"></a></li>
        <li><a href=""${personalData.twitterLink}""><img src="images-and-icons/icons/twitter.png" alt="twitter-icon" class="socmed-icon"></a></li>
      </ul>
    </nav>`;

  const profileCardContainer = document.querySelector('.profile-container').innerHTML = profileCardHTML;
}


//-----Rendering About Section-----//
function renderAboutSection() {
  const skillCardsHTML = personalData.skills.map(skill => 
     `
      <div class="skill-card ${skill.type}">
        <img src="images-and-icons/icons/${skill.icon}" alt="skill-icon" class="skill-icon">
        <div>
          <p class="skill-name">${skill.name}</p>
          <p class="skill-mastery">${skill.mastery}</p>
        </div>            
      </div>
      `
  ).join('');

  const aboutSectionHTML = `<h2 class="heading">About Me</h2>
            <hr class="line">
            <p class="about-me">${personalData.aboutMe}</p>
            
            <h2 class="skills-heading">My Skills</h2>
            <button class="tech-stack-btn selected">Tech-stack</button>
            <button class="tools-btn">Tools</button>
            <div class="skills-card-container d-grid"> ${skillCardsHTML}</div>`;

  const aboutSection = document.querySelector('#about-section').innerHTML = aboutSectionHTML
}


//-----Rendering Services Section-----//
function renderServicesSection() {
  let serviceHTML = '';
  services.forEach(service => {
    serviceHTML += `
      <div class="service-card">
        <img src="images-and-icons/images/${service.image}" alt="service-icon" class="service-icon">
        <div>
          <p class="service-name">${service.name}</p>
        <p class="service-description">${service.description}</p>
        </div>             
      </div>
    `
  });

  const servicesContainer = document.querySelector('.services-container').innerHTML = serviceHTML;
}


//-----Rendering Projects Section-----//
function renderProjectsSection() {
  let projectHTML = '';

  projects.forEach(project => {
    projectHTML += `
     <a href="${project.link}" target="_blank" class="project-card ${project.type}">
        <img src="images-and-icons/images/${project.image}" alt="proj-image" class="proj-image">
        <h3 class="proj-title">${project.title}</h3>
        <p class="proj-description">${project.description}</p>
      </a>
      `
  });

  const projectConatainer = document.querySelector('.projects-container').innerHTML = projectHTML;

}