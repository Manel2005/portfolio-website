// Array of recent projects
const projects = [
    {
        title : "Traffic Light System",
        description : "A smart ESP32-based traffic light with Android app control using Kotlin.",
        link : "project-detail.html"
    },
    {
        title : "License Plate Reader",
        description : "University group project implementing license plate recognition for vehicles.",
        link : "project-detail.html"
    },
    {
        title : "iTICApp",
        description : "A social networking app developed with classmates as a University project",
        link : "project-detail.html"
    }
];

// Reference to the container
const container = document.getElementById("projects-container");

// Render all projects in the array
projects.forEach(project => {
    const card = document.createElement("article");
    card.className = "project-card";
    card.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <a href="${project.link}">Read More</a>
    `;
    container.appendChild(card);
});