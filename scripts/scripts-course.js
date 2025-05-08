const courses = [
  { code: "WDD130", name: "Web Fundamentals", credits: 3, completed: true },
  { code: "WDD231", name: "Front-End Web Dev I", credits: 3, completed: false },
  { code: "CSE121b", name: "JavaScript Language", credits: 3, completed: true },
  { code: "CSE110", name: "Intro to Programming", credits: 2, completed: false }
];

const courseList = document.getElementById("courseList");
const creditTotal = document.getElementById("creditTotal");

function displayCourses(list) {
  courseList.innerHTML = "";
  let total = 0;

  list.forEach(course => {
    const div = document.createElement("div");
    div.textContent = `${course.code}: ${course.name}`;
    div.style.backgroundColor = course.code.startsWith("WDD") ? "#8bc34a" : "#e57373";
    courseList.appendChild(div);
    total += course.credits;
  });

  creditTotal.textContent = total;
}

document.getElementById("allCourses").addEventListener("click", () => displayCourses(courses));
document.getElementById("wddCourses").addEventListener("click", () => {
  displayCourses(courses.filter(c => c.code.startsWith("WDD")));
});
document.getElementById("cseCourses").addEventListener("click", () => {
  displayCourses(courses.filter(c => c.code.startsWith("CSE")));
});

displayCourses(courses); // Load all by default
