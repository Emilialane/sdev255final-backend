// main.js

// Replace with your backend URL
const backendUrl = "http://localhost:3000/courses";

// Function to fetch courses from backend
async function fetchCourses() {
  try {
    const response = await fetch(backendUrl);
    if (!response.ok) {
      throw new Error("Failed to fetch courses");
    }
    const courses = await response.json();
    displayCourses(courses);
  } catch (error) {
    console.error("Error:", error);
    document.getElementById("course-list").innerHTML = "<p class='text-danger'>Unable to load courses.</p>";
  }
}

// Function to display courses in HTML
function displayCourses(courses) {
  const courseList = document.getElementById("course-list");
  courseList.innerHTML = ""; // Clear previous content

  courses.forEach(course => {
    const courseCard = document.createElement("div");
    courseCard.className = "card mb-3";
    courseCard.innerHTML = `
      <div class="card-body">
        <h5 class="card-title">${course.courseName}</h5>
        <p class="card-text">${course.description}</p>
        <p class="card-text"><strong>Subject:</strong> ${course.subject}</p>
        <p class="card-text"><strong>Credits:</strong> ${course.credits}</p>
        <button class="btn btn-primary btn-sm">Edit</button>
        <button class="btn btn-danger btn-sm">Delete</button>
      </div>
    `;
    courseList.appendChild(courseCard);
  });
}

// Run fetchCourses on page load
window.addEventListener("DOMContentLoaded", fetchCourses);
