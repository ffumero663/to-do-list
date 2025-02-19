document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("taskInput");
  const addTaskBtn = document.getElementById("addTaskBtn");
  const taskList = document.getElementById("taskList");

  addTaskBtn.addEventListener("click", () => {
      const taskText = taskInput.value.trim();
      if (taskText === "") return;

      const isConfirmed = confirm()

      const li = document.createElement("li");
      li.innerHTML = `
          <span class="task">${taskText}</span>
          <button class="deleteBtn">X</button>
      `;

      li.addEventListener("click", () => {
          li.classList.toggle("completed");
      });

      li.querySelector(".deleteBtn").addEventListener("click", (e) => {
          e.stopPropagation();
          li.remove();
      });

      taskList.appendChild(li);
      taskInput.value = "";
  });
});
