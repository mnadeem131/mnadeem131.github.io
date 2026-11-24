$(document).ready(function () {

    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if (window.scrollY > 60) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }

        // scroll spy
        $('section').each(function () {
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');

            if (top > offset && top < offset + height) {
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });

    // smooth scrolling
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        }, 500, 'linear')
    });

});

document.addEventListener('visibilitychange',
    function () {
        if (document.visibilityState === "visible") {
            document.title = "Portfolio | Muhammad Nadeem";
            $("#favicon").attr("href", "assets/images/emoji2.jpg");
        }
        else {
            document.title = "Come Back To Portfolio";
            $("#favicon").attr("href", "assets/images/favhand.png");
        }
    });


// <!-- typed js effect starts -->
var typed = new Typed(".typing-text", {
    strings: ["Information Security", "C++ & Java Development", "Linux & Digital Forensics", "Hardware Diagnostics"],
    loop: true,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 500,
});
// <!-- typed js effect ends -->

async function fetchData(type = "skills") {
    let response
    type === "skills" ?
        response = await fetch("skills.json")
        :
        response = await fetch("./projects/projects.json")
    const data = await response.json();
    return data;
}

function showSkills(skills) {
    let skillsContainer = document.getElementById("skillsContainer");
    let skillHTML = "";
    skills.forEach(skill => {
        skillHTML += `
        <div class="bar">
              <div class="info">
                <i class="${skill.icon}" aria-hidden="true"></i>
                <span>${skill.name}</span>
              </div>
            </div>`
    });
    skillsContainer.innerHTML = skillHTML;
}

function showProjects(projects) {
    let projectsContainer = document.querySelector("#work .box-container");
    let projectHTML = "";
    projects.forEach(project => {
        const links = project.links || {};
        const actions = [
            links.view ? `<a href="${links.view}" class="btn" target="_blank" rel="noopener noreferrer"><i class="fas fa-eye"></i> View</a>` : "",
            links.code ? `<a href="${links.code}" class="btn" target="_blank" rel="noopener noreferrer">Code <i class="fas fa-code"></i></a>` : ""
        ].filter(Boolean).join("");
        const actionsMarkup = actions ? `<div class="btns">${actions}</div>` : "";
        projectHTML += `
        <div class="box tilt">
      <img draggable="false" src="${project.image}" alt="${project.name}" />
      <div class="content">
        <div class="tag">
        <h3>${project.name}</h3>
        </div>
        <div class="desc">
          <p>${project.desc}</p>
          ${actionsMarkup}
        </div>
      </div>
    </div>`
    });
    projectsContainer.innerHTML = projectHTML;

    // <!-- tilt js effect starts -->
    VanillaTilt.init(document.querySelectorAll(".tilt"), {
        max: 15,
    });
    // <!-- tilt js effect ends -->

    /* ===== SCROLL REVEAL ANIMATION ===== */
    const srtop = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 1000,
        reset: true
    });

    /* SCROLL PROJECTS */
    srtop.reveal('.work .box', { interval: 200 });

}

fetchData().then(data => {
    showSkills(data);
});

fetchData("projects").then(data => {
    showProjects(data);
});

// <!-- tilt js effect starts -->
VanillaTilt.init(document.querySelectorAll(".tilt"), {
    max: 15,
});
// <!-- tilt js effect ends -->


// pre loader start
// function loader() {
//     document.querySelector('.loader-container').classList.add('fade-out');
// }
// function fadeOut() {
//     setInterval(loader, 500);
// }
// window.onload = fadeOut;
// pre loader end

// disable developer mode
document.onkeydown = function (e) {
    if (e.keyCode == 123) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        return false;
    }
}

/* ===== SCROLL REVEAL ANIMATION ===== */
const srtop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
});

/* SCROLL HOME */
srtop.reveal('.home .content h3', { delay: 200 });
srtop.reveal('.home .content p', { delay: 200 });
srtop.reveal('.home .content .btn', { delay: 200 });

srtop.reveal('.home .image', { delay: 400 });
srtop.reveal('.home .linkedin', { interval: 600 });
srtop.reveal('.home .github', { interval: 800 });
srtop.reveal('.home .email', { interval: 1000 });

/* SCROLL ABOUT */
srtop.reveal('.about .content h3', { delay: 200 });
srtop.reveal('.about .content .tag', { delay: 200 });
srtop.reveal('.about .content p', { delay: 200 });


/* SCROLL SKILLS */
srtop.reveal('.skills .container', { interval: 200 });
srtop.reveal('.skills .container .bar', { delay: 400 });

/* SCROLL EDUCATION */
srtop.reveal('.education .box', { interval: 200 });

/* SCROLL PROJECTS */
srtop.reveal('.work .box', { interval: 200 });

/* SCROLL EXPERIENCE */
srtop.reveal('.experience .timeline', { delay: 400 });
srtop.reveal('.experience .timeline .container', { interval: 400 });

/* SCROLL CONTACT */
srtop.reveal('.contact .container', { delay: 400 });

(function initializeKaliTerminal() {
    const modal = document.getElementById("kali-terminal-modal");
    const triggers = [
        document.getElementById("open-terminal"),
        document.getElementById("open-terminal-hero")
    ].filter(Boolean);
    const closeButton = document.getElementById("close-terminal");
    const output = document.getElementById("terminal-output");
    const input = document.getElementById("terminal-input");
    const history = [];
    let historyIndex = 0;
    let animationToken = 0;
    let activeTrigger = null;

    function scrollOutputToBottom() {
        output.scrollTop = output.scrollHeight;
    }

    function appendOutputLine(className, text) {
        const line = document.createElement("div");
        line.className = className;
        line.textContent = text;
        output.appendChild(line);
        scrollOutputToBottom();
        return line;
    }

    function appendCommand(command) {
        const line = document.createElement("div");
        line.className = "terminal-command-line";

        const prompt = document.createElement("span");
        prompt.className = "terminal-prompt";
        prompt.textContent = "nadeem@kali:~$";

        const value = document.createElement("span");
        value.className = "terminal-command";
        value.textContent = command;

        line.append(prompt, value);
        output.appendChild(line);
        scrollOutputToBottom();
    }

    function getContactResponse() {
        const links = Array.from(document.querySelectorAll("#contact .contact-links a"));
        const github = links.find(link => link.href.startsWith("https://github.com/"));
        const linkedin = links.find(link => link.href.startsWith("https://www.linkedin.com/"));
        const email = links.find(link => link.href.startsWith("mailto:"));

        if (!github || !linkedin || !email) {
            throw new Error("The portfolio contact links are missing.");
        }

        const entries = [
            { label: "GitHub", href: github.href, text: github.href },
            { label: "LinkedIn", href: linkedin.href, text: linkedin.href },
            { label: "Email", href: email.href, text: email.textContent.trim() }
        ];

        return {
            text: entries.map(entry => `${entry.label}: ${entry.text}`).join("\n"),
            links: entries
        };
    }

    function renderContactLinks(line, links) {
        line.replaceChildren();
        links.forEach((entry, index) => {
            const anchor = document.createElement("a");
            anchor.className = "terminal-link";
            anchor.href = entry.href;
            anchor.textContent = entry.text;

            if (entry.href.startsWith("https://")) {
                anchor.target = "_blank";
                anchor.rel = "noopener noreferrer";
            }

            line.append(document.createTextNode(`${entry.label}: `), anchor);
            if (index < links.length - 1) {
                line.appendChild(document.createElement("br"));
            }
        });
    }

    async function typeResponse(text, links) {
        const line = document.createElement("div");
        line.className = "terminal-response";
        output.appendChild(line);

        const token = ++animationToken;
        const chunkSize = 4;
        for (let index = 0; index < text.length; index += chunkSize) {
            if (token !== animationToken || !modal.classList.contains("is-open")) {
                return false;
            }

            line.textContent += text.slice(index, index + chunkSize);
            scrollOutputToBottom();
            await new Promise(resolve => window.setTimeout(resolve, 8));
        }

        if (links) {
            renderContactLinks(line, links);
        }
        scrollOutputToBottom();
        return token === animationToken;
    }

    function openTerminal(event) {
        activeTrigger = event.currentTarget;
        const navbar = document.querySelector("header .navbar");
        const menu = document.getElementById("menu");
        if (navbar) {
            navbar.classList.remove("nav-toggle");
        }
        if (menu) {
            menu.classList.remove("fa-times");
        }

        if (output.childElementCount === 0) {
            appendOutputLine(
                "terminal-response",
                "Welcome to the Mini Kali Linux terminal.\nType 'help' to see available commands."
            );
        }

        modal.classList.add("is-open");
        modal.setAttribute("aria-hidden", "false");
        triggers.forEach(trigger => {
            trigger.setAttribute("aria-expanded", trigger === activeTrigger ? "true" : "false");
        });
        document.body.classList.add("terminal-open");
        window.requestAnimationFrame(() => input.focus());
    }

    function closeTerminal() {
        if (!modal.classList.contains("is-open")) {
            return;
        }

        animationToken += 1;
        modal.classList.remove("is-open");
        modal.setAttribute("aria-hidden", "true");
        triggers.forEach(trigger => trigger.setAttribute("aria-expanded", "false"));
        document.body.classList.remove("terminal-open");
        input.disabled = false;
        if (activeTrigger) {
            activeTrigger.focus();
        }
    }

    async function executeCommand(rawCommand) {
        const command = rawCommand.trim();
        if (!command) {
            return;
        }

        history.push(command);
        historyIndex = history.length;
        appendCommand(command);

        const normalizedCommand = command.toLowerCase();
        if (normalizedCommand === "clear") {
            animationToken += 1;
            output.replaceChildren();
            return;
        }
        if (normalizedCommand === "exit") {
            closeTerminal();
            return;
        }

        let response;
        switch (normalizedCommand) {
            case "help":
                response = {
                    text: [
                        "help       — List available commands",
                        "whoami     — Show portfolio identity",
                        "skills     — List technical and business skills",
                        "labs       — List CS-117 course labs",
                        "experience — Show practical experience",
                        "education  — Show education details",
                        "contact    — Show clickable contact links",
                        "clear      — Clear terminal output",
                        "exit       — Close the terminal"
                    ].join("\n")
                };
                break;
            case "whoami":
                response = {
                    text: "Muhammad Nadeem — BS Information Security (3rd Semester) at NUST Military College of Signals (MCS)"
                };
                break;
            case "skills":
                response = {
                    text: "Kali Linux, VMware Workstation, CyberChef, Autopsy, GHex, Sysinternals Suite, Wireshark, Git, Python, C++, Java, Hardware Diagnostics, Technical Sales, and Client Negotiation."
                };
                break;
            case "labs":
                response = {
                    text: [
                        "Lab 1 — System Internals, VMware/Kali & Logic Design",
                        "Lab 2 — Data Encoding, Hashing & CyberChef CTF",
                        "Lab 4 — Disks, Partitions & Digital Forensics with GHex/Autopsy"
                    ].join("\n")
                };
                break;
            case "experience":
                response = {
                    text: [
                        "Independent Gaming Laptop Reseller & Hardware Specialist on OLX (2024 – Present)",
                        "Virtual Volunteer Intern at Alkhidmat Foundation — NUST Internship Program (Summer 2026)"
                    ].join("\n")
                };
                break;
            case "education":
                response = {
                    text: [
                        "BS Information Security at NUST MCS (3rd Semester)",
                        "Intermediate in Computer Science (ICS) from Army Public School & College, Askari 14 (964 Marks)"
                    ].join("\n")
                };
                break;
            case "contact":
                response = getContactResponse();
                break;
            default:
                response = {
                    text: `bash: ${command}: command not found. Type 'help' to see available commands.`
                };
        }

        input.disabled = true;
        const completed = await typeResponse(response.text, response.links);
        if (completed && modal.classList.contains("is-open")) {
            input.disabled = false;
            input.focus();
        }
    }

    triggers.forEach(trigger => trigger.addEventListener("click", openTerminal));
    closeButton.addEventListener("click", closeTerminal);
    modal.addEventListener("click", event => {
        if (event.target === modal) {
            closeTerminal();
        }
    });

    document.addEventListener("keydown", event => {
        if (event.key === "Escape" && modal.classList.contains("is-open")) {
            closeTerminal();
        }
    });

    input.addEventListener("keydown", event => {
        if (event.key === "Enter") {
            event.preventDefault();
            const command = input.value;
            input.value = "";
            executeCommand(command);
        } else if (event.key === "ArrowUp" && history.length > 0) {
            event.preventDefault();
            historyIndex = Math.max(0, historyIndex - 1);
            input.value = history[historyIndex];
        } else if (event.key === "ArrowDown" && history.length > 0) {
            event.preventDefault();
            historyIndex = Math.min(history.length, historyIndex + 1);
            input.value = history[historyIndex] || "";
        }
    });
})();