document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const list = document.getElementById("formDataList");
  const keys = ["firstname", "lastname", "email", "phone", "organization", "timestamp"];

  keys.forEach(key => {
    const value = params.get(key);
    if (value) {
      const li = document.createElement("li");

      // Format timestamp if key is 'timestamp'
      if (key === "timestamp") {
        const date = new Date(value);
        const formatted = date.toLocaleString("en-US", {
          dateStyle: "medium",
          timeStyle: "short",
        });
        li.textContent = `Submitted: ${formatted}`;
      } else {
        li.textContent = `${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}`;
      }

      list.appendChild(li);
    }
  });

  document.getElementById("year").textContent = new Date().getFullYear();
});
