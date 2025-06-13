
const div = document.getElementById("outer-box");

const innerdiv1 = document.createElement("div");
const innerdiv2 = document.createElement("div");

innerdiv1.className = "innerdiv1";
innerdiv2.className = "innerdiv1";
innerdiv2.id = "in2"

innerdiv1.style.cssText = "border:2px; width:300px; height:1000px;";
innerdiv2.style.cssText = "border:2px; width:300px; height:1000px;";

div.appendChild(innerdiv1);
div.appendChild(innerdiv2);


const img = document.createElement("img");
img.src = "https://www.vhv.rs/dpng/d/611-6116563_bitmoji-sticker-png-download-brown-hair-bit-moji.png";
img.alt = "bitmoji";
img.className = "image";
img.style.width = "100px";
img.style.borderRadius = "50%";
innerdiv1.appendChild(img);


const h3 = document.createElement("h3");
h3.textContent = "Dipanshi Verma";
h3.className = "name";
innerdiv1.appendChild(h3);

const h5 = document.createElement("h5");
h5.textContent = "Full Stack Web Developer";
h5.className = "title";
innerdiv1.appendChild(h5);

const hr = document.createElement("hr");
innerdiv1.appendChild(hr);

// fas (solid) far (regular) fab (brands)
const data = [
  {
    icon: 'fas fa-envelope',
    label: 'Email',
    value: 'dipanshiverma0@gmail.com'
  },
  {
    icon: 'fas fa-phone',
    label: 'Phone',
    value: '+91 9193521876'
  },
  {
    icon: 'fas fa-calendar-alt',
    label: 'Birthday',
    value: 'June 04, 2002'
  },
  {
    icon: 'fas fa-map-marker-alt',
    label: 'Location',
    value: 'Vadodara, Gujarat, India'
  }
];

data.forEach(item => {
  const infoBox = document.createElement('div');
  infoBox.className = 'info-box';

  const iconBox = document.createElement('div');
  iconBox.className = 'icon-box';
  iconBox.innerHTML = `<i class="${item.icon}"></i>`;

  const infoContent = document.createElement('div');
  infoContent.innerHTML = `
    <div class="info-label">${item.label}</div>
    <div class="info-value">${item.value}</div>
  `;

  infoBox.appendChild(iconBox);
  infoBox.appendChild(infoContent);
  innerdiv1.appendChild(infoBox);
});


const socialIcons = document.createElement('div');
socialIcons.className = 'socials';
socialIcons.innerHTML = `
  <i class="fab fa-facebook-f"></i>
  <i class="fa-brands fa-github"></i>
  <i class="fab fa-instagram"></i>
`;
innerdiv1.appendChild(socialIcons);

const nav = React.createElement("nav",{},React.createElement("a",{href:"#"},"About"),
React.createElement("a",{href:"#"},"Resume"),
React.createElement("a",{href:"#"},"Portfolio"),
React.createElement("a",{href:"#"},"Blog"),
React.createElement("a",{href:"#"},"Contact"));


const head1 = React.createElement("h1",{},"About Me");
const para1 = 
React.createElement("p",{},"I am Dipanshi Verma, a passionate Full Stack Web Developer with a strong foundation in JavaScript, Node.js, and modern frontend frameworks. I enjoy building responsive and user-friendly applications, and I'm always excited to learn and grow in the tech space.");

const para2 = React.createElement("p", {}, 
  "My job is to build your website so that it is functional and user‑friendly but at the same time attractive. I add personal touch to your product and make sure that it is eye‑catching and easy to use."
);

const services = [
  {
    icon: "fa-solid fa-laptop-code",
    title: "Web Design",
    desc: "The most modern and high-quality design made at a professional level."
  },
  {
    icon: "fa-solid fa-code",
    title: "Web Development",
    desc: "Creating dynamic user interfaces with React, CSS, and managing backend logic using Node.js, Express, and Firebase."
  },
  {
    icon: "fa-solid fa-school",
    title: " Education",
    desc: "As an MCA student, I’m mastering MERN (MongoDB, Express, React, Node.js) and modern web frameworks."
  },
  {
    icon: "fa-solid fa-chalkboard",
    title: "Learning & Tools ",
    desc: "Actively using Git, collaborating via GitHub, and designing UI/UX — continuously enhancing code quality and workflow."
  }
];

const serviceCards = services.map(service =>
  React.createElement("div", { className: "card" }, [
    React.createElement("i", { className: service.icon }),
    React.createElement("h3", {}, service.title),
    React.createElement("p", {}, service.desc)
  ])
);

const sectionHeading = React.createElement("h1", {}, "What I'm Doing");
const servicesDiv = React.createElement("div", { className: "services" }, serviceCards);

const root = document.getElementById("in2");
const result = ReactDOM.createRoot(root);
result.render(React.createElement("div",{}, nav,head1,para1,para2,sectionHeading,servicesDiv));






