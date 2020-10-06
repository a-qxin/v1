const content = [
    {
        dpLink: "./img/me.png",
        greeting: "Hey! I'm Brenda.",
        intro: "I’m a software engineer with a passion for developing web user interfaces. I'm currently a 4th-year undergrad studying Computer Science at San Francisco State. Below are the <strong>technologies</strong> I work with most:",
        languages: [
            "JavaScript",
            "Python",
            "Java",
            "C++"
        ],
        tools: [
            "React",
            "Node.js",
            "MongoDB",
            "Git"
        ],
        design: [
            "Figma",
            "Adobe XD"
        ],
        socials: [
            {
                name: "github",
                link: "https://github.com/a-qxin",
                iconLink: "<ion-icon name=\"logo-github\"></ion-icon>"
            },
            {
                name: "codepen",
                link: "https://codepen.io/a-qxin",
                iconLink: "<ion-icon name=\"logo-codepen\"></ion-icon>"
            },
            {
                name: "linkedin",
                link: "https://www.linkedin.com/in/brendayau/",
                iconLink: "<ion-icon name=\"logo-linkedin\"></ion-icon>"
            },
            {
                name: "twitter",
                link: "https://twitter.com/aqxindev",
                iconLink: "<ion-icon name=\"logo-twitter\"></ion-icon>"
            },
            {
                name: "email",
                link: "mailto:aqxin.cs@gmail.com",
                iconLink: "<ion-icon name=\"mail-outline\"></ion-icon>"
            },
            {
                name: "resume",
                link: "#",
                iconLink: "<ion-icon name=\"reader-outline\"></ion-icon>"
            }
        ],
        projectsHeader: "Here are some <strong>projects</strong> I’ve worked on:",
        projects : [
            {
                title: "Omlet",
                url: "https://github.com/a-qxin/omelette/tree/master/src",
                tech: [
                    "React",
                    "Node.js",
                    "MongoDB",
                    "Express",
                    "Figma"
                ],
                description: "Hierarchical flashcards + gamified study web app built by students for students. Desktop platform in ongoing development with my team. Built for BuildConnect Summer 2020.",
                picUrl: "https://i.imgur.com/n0yfgff.jpg"
            },
            {
                title: "Prep To Your Door",
                url: "https://preptoyourdoor.netlify.app",
                tech: [
                    "React.js",
                    "CSS",
                    "Python"
                ],
                description: "Vegan food-delivery webapp that serves thousands of customers. Built during my Summer 2020 internship at Infinite Options.",
                picUrl: "https://i.imgur.com/RO4HWfN.png"
            },
            {
                title: "CineMates",
                url: "https://xd.adobe.com/view/865851ef-db59-40a6-ba44-16bcb8d39f48-d30b/?fullscreen",
                tech: [
                    "Design",
                    "Wireframing",
                    "Prototyping",
                    "Adobe XD"
                ],
                description: "Desktop webapp design prototype created in two days using Adobe XD during the Adobe x Netflix Creative Jam.",
                picUrl: "https://i.imgur.com/3bVgsQ2.png"
            }
        ]
    }
];

function socialsTemplate(socials) {
  return `
    <div class='socials-container'>
      ${socials.map(socials => `
        <div class='socials'>
          <a href='${socials.link}' alt='${socials.name}'>${socials.iconLink}</a>
        </div>
      `).join('')}
    </div>
  `
}

function projectTemplate(projects) {
    return `
    <div>
      ${projects.map(projects => `
        <div class='projects'>
          <div class='project-image-container'>
            <img class="project-image" src='${projects.picUrl}'></img>
          </div>
          <div class='project-content'>
            <a href='${projects.url}'><strong>${projects.title}</strong></a>
            <div>${projects.tech}</div>
            <p>${projects.description}</p>
          </div>
        </div>
      `).join('')}
    </div>
    `
}

function siteTemplate(siteContent) {
    return `
        <div class='site-container'>
          <div class='dp-container'><img class='dp' src='${siteContent.dpLink}'></img></div>
          <div class='greeting'>${siteContent.greeting}</div>
          <div>${siteContent.intro}</div>
          <ul>languages: <li>${siteContent.languages}</li></ul>
          <ul>tools: <li>${siteContent.tools}</li></ul>
          <ul>design: <li>${siteContent.design}</li></ul>
          <div>${siteContent.projectsHeader}</div>
          ${projectTemplate(siteContent.projects)}
          ${socialsTemplate(siteContent.socials)}
          <hr />
      </div>
    `
}

document.getElementById("output").innerHTML = `
${content.map(siteTemplate).join('')}
<p class="footer">Designed and built in HTML + CSS + JS by me ✨</p>
`