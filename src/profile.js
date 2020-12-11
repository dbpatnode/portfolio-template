// Change your display name on tha landing display
const header = {
  name: "Daniel Patnode",
};
// Write a para about yourself here
// To update your image, go to './styles/images.css'
const about = {
  paragraph:
    "Full stack web developer with experience in Ruby on Rails and JavaScript based programming with a background in scientific glass blowing and organic agriculture. Skilled in team-building, project management and interpersonal communication that would help any sized team progress in a constructive and positive fashion. In my spare time I enjoy camping, getting outdoors, practicing Brazilian jiu-jitsu, excercising, checking out breweries and hunting for the perfect cheeseburger.",
};
// Edit your skill and the percentage you know about it
// To Add a skill, copy any one below and paste it after the last comma
const skillsBar = [
  {
    name: "HTML5",
    value: 75,
  },
  {
    name: "CSS3",
    value: 85,
  },
  {
    name: "Javascript",
    value: 75,
  },
  {
    name: "ReactJS",
    value: 80,
  },
  {
    name: "Rails",
    value: 80,
  },
  {
    name: "Git",
    value: 70,
  },
  {
    name: "PostGreSQL",
    value: 65,
  },
];
// Edit your projects, its name, your skills used to make it, and the url.
// You can omit freely anything if you dont have it
// To Add a Project, copy any one below and paste it after the last comma and increment the id's project number
const projects = [
  {
    // Add image in './styles/images.css' in #project1
    id: "project1",
    name: "BrewMaps",
    skills: ["ReactJS, Rails, JWT Auth, CSS"],
    url: "https://github.com/dbpatnode/brewmaps-frontend",
  },
  {
    // Add image in './styles/images.css' in #project2
    id: "project2",
    name: "FavFest",
    skills: ["HTML, CSS, Ruby on Rails"],
    url: "https://favfest.herokuapp.com/",
  },
  {
    // Add image in './styles/images.css' in #project3
    id: "project3",
    name: "Oasis",
    skills: ["HTML, CSS, ReactJS"],
    url: "https://github.com/tshlos/oasis",
  },
  {
    // Add image in './styles/images.css' in #project4
    id: "project4",
    name: "Open Hearts, Open Hands, Open Homes",
    skills: ["HTML, CSS, JS"],
    url: "https://github.com/cortezd334/OHOHOH",
  },
];
// Edit your Miscellaneous Activities, its name and the url.
// You can omit freely anything if you dont have it
// To Add a Activity, copy any one below and paste it after the last comma and increment the id's Miscellaneous number
const miscellaneous = [
  {
    // Add image in './styles/images.css' in #misc1
    id: "misc1",
    name: "Miscellaneous 1",
    url: "https://github.com/kaustubhai",
  },
  {
    // Add image in './styles/images.css' in #misc2
    id: "misc2",
    name: "Miscellaneous 2",
    url: "https://github.com/kaustubhai",
  },
  {
    // Add image in './styles/images.css' in #misc3
    id: "misc3",
    name: "Miscellaneous 3",
    url: "https://github.com/kaustubhai",
  },
];
// Contact form text, and Jotforms link
// To get your own jotform link, go to https://www.jotform.com/
// If you hacve the link already, paste it in the contactUrl below
const contact = {
  pitch:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris nunc congue nisi vitae.",
  copyright: "Kaustubh Mishra",
  contactUrl: "",
};
// Paste your respective social media links. You can omit any if you dont have it
// Upload your resume in your drive, get the shaareable link and paste it in the resume section
const social = {
  github: "https://github.com/dbpatnode",
  linkedin: "https://linkedin.com/in/daniel-patnode/",
  medium: "https://medium.com/@danielpatnode",
  resume: "https://novoresume.com/",
};
// Dont change anything here
export { header, about, skillsBar, projects, miscellaneous, contact, social };
