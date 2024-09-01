const hamburger = document.querySelector(".burger");

function toggleBurger() {
    hamburger.classList.toggle("burger-active");
}
hamburger.addEventListener("click", toggleBurger);

const menu = document.querySelector(".menu");

function toggleMenu() {
    menu.classList.toggle("menu-active");
}
hamburger.addEventListener("click", toggleMenu);

const menu1 = document.querySelectorAll(".menu-link");

const menuLink = document.querySelector(".menu-active");

function closeMenu() {
    menu1.forEach((item) => {
        item.addEventListener("click", () => {
            menu.classList.toggle("menu-active");
            hamburger.classList.toggle("burger-active");
            overlay.classList.remove("overlay-active");
            body.classList.remove("block");
        });
    });
}
closeMenu();

function calculateAge(birthDateStr) {
    var parts = birthDateStr.split(".");
    var birthDay = parseInt(parts[0]);
    var birthMonth = parseInt(parts[1]);
    var birthYear = parseInt(parts[2]);

    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    var currentMonth = currentDate.getMonth() + 1;

    var age = currentYear - birthYear;

    if (
        currentMonth < birthMonth ||
        (currentMonth === birthMonth && currentDate.getDate() < birthDay)
    ) {
        age--;
    }

    return age;
}

var ageElement = document.getElementById("age");

var birthDateStr = "08.05.1991";
var age = calculateAge(birthDateStr);

ageElement.textContent = "Age: " + age;

//check CRM server

const linkIds = ["wcaCRM", "platoon", "rivalry", "mmr"];

async function checkLink(url) {
    const spinner = document.getElementById("loadingSpinner");
    try {
        spinner.style.display = "block";
        const response = await fetch(url, { method: "HEAD" });
        if (!response.ok) {
            throw new Error("Server is not working. Try again later");
        }
        window.location.href = url;
    } catch (error) {
        alert("Server is not working");
    } finally {
        spinner.style.display = "none";
    }
}

function setupLinkHandlers() {
    linkIds.forEach((id) => {
        const linkElement = document.getElementById(id);
        if (linkElement) {
            linkElement.addEventListener("click", function (event) {
                event.preventDefault();
                checkLink(this.href);
            });
        }
    });
}

document.addEventListener("DOMContentLoaded", setupLinkHandlers);
