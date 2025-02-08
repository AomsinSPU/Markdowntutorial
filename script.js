const data = `
# About Me\n
## 👨‍💻Who Am I?\n
Hi! I'm Aomsin, a student at the Sripatum University. my major is computer science and full-stack development. I'm currently learning about web development.\n
---
## 🛠️ Skils & Expertise
- **Languages:** JavaScript, HTML, CSS
- **Frameworks:** React, Node.js
- **Databases:** MongoDB, MySQL
- **Tools:** Git, GitHub, VSCode
- **Other:** Docker, Postman
---
## 📚 Education
- **Vocational Certificate in Digital Graphic** - Siam Technological College (Siamtech) (2017 - 2021)\n
- **Diploma Program in Graphic Computer** - Siam Technological College (Siamtech) (2022 - 2023)\n
- **Bachelor of Science in Computer Science** - Sripatum University (2023 - present)\n
---
## 💼 Work experience
- Graphic Designer - internship\n
- Potographer - internship\n
- Data Entry - AIA (2021 - 2022)\n
- 3D Editor - (2022 - 2023)\n

---
## 🌟 Personal Philosophy\n
It doesn't matter how **bad** you were yesterday, as long as **you are better** than yesterday, that's **enough**.

---
## 📩 Contact Me
- **Email:** [saral.nit@spumail.net](mailto:saral.nit@spumail.net)
- **LinkedIn:** [Saral Nithisombatsakul](https://www.linkedin.com/in/saral-nithisombatsakul-a9042432b/)
- **GitHub:** [AomsinSPU](https://github.com/AomsinSPU)
- **Facebook:** [Saral Nitisombatsakul ](https://www.facebook.com/OHMYGOD4568/)
---
 Enjoy life because in the real world there is don't have restart, only continue.🎮
`;

document.getElementById("data").innerHTML = marked.parse(data);

const photo = `
![minipic](https://img5.pic.in.th/file/secure-sv1/335697922_738671981209750_6774814586497496202_n.md.jpg "")
    `;
document.getElementById("photo").innerHTML = marked.parse(photo);
