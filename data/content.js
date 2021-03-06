const content = [
  {
    dpLink: "./img/me.png",
    greeting: "Hey! I'm Brenda.",
    intro: "I’m a software engineer + product designer with a passion for creating simple and clean user experiences. I'm currently a senior Computer Science student. Below are the <strong>skills</strong> I use most:",
    languages: [
      "HTML/CSS/JS",
      "React",
      "Express",
      "Git",
    ],
    tools: [
      "Figma",
      "Adobe XD",
      "Illustrator",
      "Procreate"
    ],
    design: [
      "Visual Design",
      "User Research",
      "Wireframing",
      "Prototyping",
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
      }
    ],
    projectsHeader: "Here are some <strong>projects</strong> I’ve worked on:",
    projects: [
      {
        title: "Omlet",
        url: "https://github.com/a-qxin/Omlet",
        tech: [
          "React",
          "Node.js",
          "MongoDB",
          "Express",
          "Figma"
        ],
        description: "Hierarchical flashcards + gamified study web app built by students for students. Desktop platform in ongoing development. Built for BuildConnect Summer 2020.",
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
          "Wireframing",
          "Prototyping",
          "Adobe XD"
        ],
        description: "Desktop webapp design prototype created in two days using Adobe XD during the Adobe x Netflix Creative Jam.",
        picUrl: "https://i.imgur.com/3bVgsQ2.png"
      }
    ],
    footer: "Built with HTML + CSS + JS ✨",
    source: "https://github.com/a-qxin/v1",
  }
];

function languagesTemplate(languages) {
  return `
    <div>
      ${languages.map(languages => `
        <li>${languages}</li>
      `).join('')}
    </div>
  `
}

function toolsTemplate(tools) {
  return `
    <div>
      ${tools.map(tools => `
        <li>${tools}</li>
      `).join('')}
    </div>
  `
}

function designTemplate(design) {
  return `
    <div>
      ${design.map(design => `
        <li>${design}</li>
      `).join('')}
    </div>
  `
}

function socialsTemplate(socials) {
  return `
    <div class='socials-container'>
      <p>Let's connect!</p>
      ${socials.map(socials => `
        <div class='socials'>
          <a href='${socials.link}' target="_blank" alt='${socials.name}'>${socials.iconLink}</a>
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
            <a href='${projects.url}' target="_blank"><img class="project-image" src='${projects.picUrl}'></img></a>
          </div>
          <div class='project-content'>
            <a href='${projects.url}' target="_blank"><strong>${projects.title}</strong></a>
            <div class='tech'>${projects.tech.map(tech => `${tech}`).join(', ')}</div>
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
      <div class='dp-container'>
        <img class='dp' src='${siteContent.dpLink}'></img>
      </div>
      <div class='greeting'>${siteContent.greeting}</div>
      <div class='intro'>${siteContent.intro}</div>
      <div class='row'>
        <div class='col'><ul><b>Design</b> ${designTemplate(siteContent.design)} </ul></div>
        <div class='col'><ul><b>Tools</b> ${toolsTemplate(siteContent.tools)} </ul></div>
        <div class='col'><ul><b>Development</b> ${languagesTemplate(siteContent.languages)} </ul></div>
      </div>
      <div>${siteContent.projectsHeader}</div>
      ${projectTemplate(siteContent.projects)}
      ${socialsTemplate(siteContent.socials)}
      <hr />
      <p class='footer'>${siteContent.footer}</p>
      <div class='footer'>
        <a href='${siteContent.source}' target="_blank" class='footer'><u>source code</u></a>
      </div> 
    </div>
  `
}

document.getElementById("output").innerHTML = `
${content.map(siteTemplate).join('')}
`

// {
//   name: "resume",
//   link: "#",
//   iconLink: "<ion-icon name=\"reader-outline\"></ion-icon>"
// }