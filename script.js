let currentImageIndex = 0;

const images = [
  "images/chess-project.png",
  "images/portfolio-project.png",
  "images/sample-project.png"
];

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  const isDark = document.body.classList.contains("dark-mode");
  localStorage.setItem("darkMode", isDark);
}

window.addEventListener("load", () => {
  const savedMode = localStorage.getItem("darkMode");
  if (savedMode === "true") {
    document.body.classList.add("dark-mode");
  }
});

function toggleAbout() {
  const aboutText = document.getElementById("aboutText");
  if (!aboutText) return;

  if (aboutText.style.display === "none") {
    aboutText.style.display = "block";
  } else {
    aboutText.style.display = "none";
  }
}

function nextImage() {
  const slider = document.getElementById("slider");
  if (!slider) return;

  currentImageIndex = (currentImageIndex + 1) % images.length;
  slider.src = images[currentImageIndex];
}

function prevImage() {
  const slider = document.getElementById("slider");
  if (!slider) return;

  currentImageIndex =
    (currentImageIndex - 1 + images.length) % images.length;
  slider.src = images[currentImageIndex];
}

function addTask() {
  const input = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");
  if (!input || !taskList) return;

  const taskText = input.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "❌";
  deleteBtn.onclick = () => li.remove();

  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  input.value = "";
}

function validateForm(event) {
  event.preventDefault();

  const email = document.getElementById("email");
  const message = document.getElementById("message");
  const output = document.getElementById("formMessage");
  if (!email || !message || !output) return;

  if (!email.value.includes("@")) {
    output.textContent = "Please enter a valid email address";
    output.style.color = "red";
    return false;
  }

  if (message.value.length < 10) {
    output.textContent = "Message must be at least 10 characters";
    output.style.color = "red";
    return false;
  }

  output.textContent = "Message sent successfully!";
  output.style.color = "green";

  email.value = "";
  message.value = "";
  return true;
}

function filterProjects(tech) {
  const projects = document.querySelectorAll(".project-card");
  projects.forEach(project => {
    if (tech === "all" || project.textContent.includes(tech)) {
      project.style.display = "block";
    } else {
      project.style.display = "none";
    }
  });
}

console.log("JS loaded");
