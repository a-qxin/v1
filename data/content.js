const content = [
    {
        "greeting": "Hey! I'm Brenda.",
        "description": "I'm a 4th-year undergraduate studying Computer Science at San Francisco State University.",
        "intro": "I’m a software engineer with a passion for developing web user interfaces. Below are the <strong>technologies</strong> I work with most.",
        "languages": [
            "JavaScript",
            "Python",
            "Java",
            "C++"
        ],
        "tools": [
            "React",
            "Node.js",
            "MongoDB",
            "Git"
        ],
        "design": [
            "Figma",
            "Adobe XD"
        ],
        "socials": [
            {
                "name": "github",
                "link": "https://github.com/a-qxin"
            },
            {
                "name": "codepen",
                "link": "https://codepen.io/a-qxin"
            },
            {
                "name": "linkedin",
                "link": "https://www.linkedin.com/in/brendayau/"
            },
            {
                "name": "twitter",
                "link": "https://twitter.com/aqxindev"
            },
            {
                "name": "email",
                "link": "mailto:aqxin.cs@gmail.com"
            }
        ],
        "projects-header": "Here are some <strong>projects</strong> I’ve worked on:",
        "projects" : [
            {
                "title": "Omlet",
                "url": "https://github.com/a-qxin/omelette/tree/master/src",
                "tech": [
                    "React",
                    "Node.js",
                    "MongoDB",
                    "Express",
                    "Figma"
                ],
                "description": "Hierarchical flashcards + gamified study web app built by students for students. Desktop platform in ongoing development with my team for BuildConnect Summer 2020.",
                "pic-url": "https://i.imgur.com/n0yfgff.jpg"
            },
            {
                "title": "Prep To Your Door",
                "url": "https://preptoyourdoor.netlify.app",
                "tech": [
                    "React.js",
                    "CSS",
                    "Python"
                ],
                "description": "Vegan food-delivery webapp that serves thousands of customers. Built during my Summer 2020 internship at Infinite Options.",
                "pic-url": "https://i.imgur.com/lAKn9ot.png"
            },
            {
                "title": "CineMates",
                "url": "https://xd.adobe.com/view/865851ef-db59-40a6-ba44-16bcb8d39f48-d30b/?fullscreen",
                "tech": [
                    "Design",
                    "Wireframing",
                    "Prototyping",
                    "Adobe XD"
                ],
                "description": "Desktop webapp design prototype created in two days using Adobe XD during the Adobe x Netflix Creative Jam.",
                "pic-url": "https://i.imgur.com/3bVgsQ2.png"
            }
        ]
    }
]

function siteTemplate(stuff) {
    return `
        <div>${stuff.greeting}</div>
        <div>${stuff.description}</div>
        <div>${stuff.intro}</div>
        <div>languages: ${stuff.languages}</div>
        <div>tools: ${stuff.tools}</div>
        <div>design: ${stuff.design}</div>
        <div>socials: ${stuff.socials}</div>
    `
}

document.getElementById("output").innerHTML = `
${content.map(siteTemplate).join('')}
`