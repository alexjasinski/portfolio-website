  document.getElementById("recommendation-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const message = document.getElementById("recommendation").value.trim();

    if (!message) return;

    const list = document.querySelector(".recommendations-list");

    const li = document.createElement("li");
    li.id = "recommendations-exp";
    li.textContent = `"${message}"${name ? " - " + name : ""}`;

    const box = document.createElement("div");
    box.id = "recommendations-box";
    box.appendChild(li);

    list.appendChild(box);

    // Show popup
    document.getElementById("popup").classList.remove("hidden");

    // Reset form
    document.getElementById("recommendation-form").reset();
  });

  document.getElementById("close-popup").addEventListener("click", function () {
    document.getElementById("popup").classList.add("hidden");
  });
