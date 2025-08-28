document.addEventListener("DOMContentLoaded", () => {
    // Array of all projects
    const projects = [
        {
            title : "Traffic Light System",
            description : "A smart ESP32-based traffic light with Android app control using Kotlin.",
            tags : ["ESP32", "Android", "IoT"],
            link : "project-detail.html"
        },
        {
            title : "License Plate Reader",
            description : "University group project implementing license plate recognition for vehicles.",
            tags : ["Computer Vision", "Python"],
            link : "project-detail.html"
        },
        {
            title : "iTICApp",
            description : "A social networking app developed with classmates as a University project.",
            tags : ["Python"],
            link : "project-detail.html"
        },
        {
            title : "Domotic House",
            description : "High school final project using Arduino, LEDs, and AppInventor for remote control",
            tags : ["Arduino", "Electronics", "IoT", "AppInventor"],
            link : "project-detail.html"
        },
        {
            title : "Portfolio Website",
            description : "This portfolio website to showcase my skills and projects.",
            tags : ["HTML", "CSS", "JavaScript", "Web Development"],
            link : "project-detail.html"
        }
    ];

    // References to container and filter input
    const container = document.getElementById("projects-container");
    const filterInput = document.getElementById("project-filter");

    // Function to render projects based on a filter
    function renderProjects(filter = "") {
        container.innerHTML = ""; // Clear container
        const filtered = projects.filter(project =>
            project.title.toLowerCase().includes(filter.toLowerCase()) ||
            project.description.toLowerCase().includes(filter.toLowerCase()) ||
            project.tags.some(tag => tag.toLowerCase().includes(filter.toLowerCase()))
        );

        filtered.forEach(project => {
            const card = document.createElement("article");
            card.className = "project-card";
            card.innerHTML = `
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <p><strong>Tags:</strong> ${project.tags.join(", ")}</p>
                <a href="${project.link}">Read More</a>
            `;
            container.appendChild(card);
        });
    }

    // Initial render
    renderProjects();

    // Add event listener to filter input
    filterInput.addEventListener("input", (e) => {
        renderProjects(e.target.value);
    });
});