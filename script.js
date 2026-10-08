// USER SIGNUP

function signup() {

    const username =
        document.getElementById("username").value.trim();

    const password =
        document.getElementById("password").value;


    if (username === "" || password === "") {

        alert("Please enter username and password.");

        return;
    }


    localStorage.setItem("username", username);

    localStorage.setItem("password", password);


    alert("Signup successful!");


    window.location.href = "login.html";

}



// USER LOGIN

function login() {

    const username =
        document.getElementById("loginUsername").value.trim();

    const password =
        document.getElementById("loginPassword").value;


    const savedUsername =
        localStorage.getItem("username");

    const savedPassword =
        localStorage.getItem("password");


    if (
        username === savedUsername &&
        password === savedPassword
    ) {

        alert("Login successful!");

        window.location.href = "index.html";

    }

    else {

        alert("Invalid username or password.");

    }

}



// ADMIN LOGIN

function adminLogin() {

    const username =
        document.getElementById("adminUsername").value.trim();

    const password =
        document.getElementById("adminPassword").value;


    if (
        username === "admin" &&
        password === "admin123"
    ) {

        alert("Admin login successful!");

        window.location.href = "admin.html";

    }

    else {

        alert("Invalid admin credentials.");

    }

}



// VIEW PROJECTS BUTTON

function viewProjects() {

    document
        .getElementById("projects")
        .scrollIntoView();

}



// RESUME BUTTON

function resumeMessage() {

    alert(
        "Please add your resume PDF to the project folder before final submission."
    );

}



// ADD PROJECT

function addProject() {

    const title =
        document.getElementById("projectTitle").value.trim();

    const description =
        document.getElementById("projectDescription").value.trim();


    if (
        title === "" ||
        description === ""
    ) {

        alert("Please enter project details.");

        return;
    }


    const projects =
        JSON.parse(
            localStorage.getItem("projects")
        ) || [];


    projects.push({

        title: title,

        description: description

    });


    localStorage.setItem(
        "projects",
        JSON.stringify(projects)
    );


    document.getElementById("projectTitle").value = "";

    document.getElementById("projectDescription").value = "";


    alert("Project added successfully!");


    displayProjects();

}



// DISPLAY PROJECTS

function displayProjects() {

    const projectList =
        document.getElementById("projectList");


    if (!projectList) {

        return;

    }


    const projects =
        JSON.parse(
            localStorage.getItem("projects")
        ) || [];


    projectList.innerHTML = "";


    if (projects.length === 0) {

        projectList.innerHTML =
            "<p>No projects added yet.</p>";

        return;

    }


    projects.forEach(
        function(project, index) {

            const projectDiv =
                document.createElement("div");


            projectDiv.className =
                "admin-card";


            projectDiv.innerHTML =
                "<h3>" +
                project.title +
                "</h3>" +

                "<p>" +
                project.description +
                "</p>" +

                "<button type='button' onclick='deleteProject(" +
                index +
                ")'>Delete</button>";


            projectList.appendChild(projectDiv);

        }
    );

}



// DELETE PROJECT

function deleteProject(index) {

    const projects =
        JSON.parse(
            localStorage.getItem("projects")
        ) || [];


    projects.splice(index, 1);


    localStorage.setItem(
        "projects",
        JSON.stringify(projects)
    );


    displayProjects();

}



// ADD CERTIFICATION

function addCertification() {

    const name =
        document
            .getElementById("certificationName")
            .value
            .trim();


    if (name === "") {

        alert("Please enter a certification.");

        return;

    }


    const certifications =
        JSON.parse(
            localStorage.getItem("certifications")
        ) || [];


    certifications.push(name);


    localStorage.setItem(
        "certifications",
        JSON.stringify(certifications)
    );


    document.getElementById(
        "certificationName"
    ).value = "";


    alert("Certification added successfully!");


    displayCertifications();

}



// DISPLAY CERTIFICATIONS

function displayCertifications() {

    const list =
        document.getElementById(
            "certificationList"
        );


    if (!list) {

        return;

    }


    const certifications =
        JSON.parse(
            localStorage.getItem("certifications")
        ) || [];


    list.innerHTML = "";


    certifications.forEach(
        function(certification, index) {

            list.innerHTML +=
                "<div class='admin-card'>" +

                "<p>" +
                certification +
                "</p>" +

                "<button type='button' onclick='deleteCertification(" +
                index +
                ")'>Delete</button>" +

                "</div>";

        }
    );

}



// DELETE CERTIFICATION

function deleteCertification(index) {

    const certifications =
        JSON.parse(
            localStorage.getItem("certifications")
        ) || [];


    certifications.splice(index, 1);


    localStorage.setItem(
        "certifications",
        JSON.stringify(certifications)
    );


    displayCertifications();

}



// ADD COURSE

function addCourse() {

    const name =
        document
            .getElementById("courseName")
            .value
            .trim();


    if (name === "") {

        alert("Please enter a course.");

        return;

    }


    const courses =
        JSON.parse(
            localStorage.getItem("courses")
        ) || [];


    courses.push(name);


    localStorage.setItem(
        "courses",
        JSON.stringify(courses)
    );


    document.getElementById(
        "courseName"
    ).value = "";


    alert("Course added successfully!");


    displayCourses();

}



// DISPLAY COURSES

function displayCourses() {

    const list =
        document.getElementById(
            "courseList"
        );


    if (!list) {

        return;

    }


    const courses =
        JSON.parse(
            localStorage.getItem("courses")
        ) || [];


    list.innerHTML = "";


    courses.forEach(
        function(course, index) {

            list.innerHTML +=
                "<div class='admin-card'>" +

                "<p>" +
                course +
                "</p>" +

                "<button type='button' onclick='deleteCourse(" +
                index +
                ")'>Delete</button>" +

                "</div>";

        }
    );

}



// DELETE COURSE

function deleteCourse(index) {

    const courses =
        JSON.parse(
            localStorage.getItem("courses")
        ) || [];


    courses.splice(index, 1);


    localStorage.setItem(
        "courses",
        JSON.stringify(courses)
    );


    displayCourses();

}



// SAVE CONTACT MESSAGE

function saveMessage() {

    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const message =
        document.getElementById("message").value.trim();


    if (
        name === "" ||
        email === "" ||
        message === ""
    ) {

        alert("Please fill all fields.");

        return;

    }


    const messages =
        JSON.parse(
            localStorage.getItem("messages")
        ) || [];


    messages.push({

        name: name,

        email: email,

        message: message

    });


    localStorage.setItem(
        "messages",
        JSON.stringify(messages)
    );


    document.getElementById("name").value = "";

    document.getElementById("email").value = "";

    document.getElementById("message").value = "";


    alert("Message sent successfully!");

}



// DISPLAY CONTACT MESSAGES

function displayMessages() {

    const list =
        document.getElementById("messageList");


    if (!list) {

        return;

    }


    const messages =
        JSON.parse(
            localStorage.getItem("messages")
        ) || [];


    list.innerHTML = "";


    if (messages.length === 0) {

        list.innerHTML =
            "<p>No messages yet.</p>";

        return;

    }


    messages.forEach(
        function(item) {

            list.innerHTML +=

                "<div class='admin-card'>" +

                "<h3>" +
                item.name +
                "</h3>" +

                "<p><strong>Email:</strong> " +
                item.email +
                "</p>" +

                "<p>" +
                item.message +
                "</p>" +

                "</div>";

        }
    );

}



// RUN DISPLAY FUNCTIONS

displayProjects();

displayCertifications();

displayCourses();

displayMessages();