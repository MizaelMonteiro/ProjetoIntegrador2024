document.addEventListener("DOMContentLoaded", function () {
      const modalOverlay = document.getElementById("modalOverlay");
      const closeModal = document.getElementById("closeModal");

      // Show the modal
      modalOverlay.style.display = "flex";

      // Close the modal when the button is clicked
      closeModal.addEventListener("click", function () {
        modalOverlay.style.display = "none";
      });

      // Optional: Close the modal when clicking outside the content
      modalOverlay.addEventListener("click", function (event) {
        if (event.target === modalOverlay) {
          modalOverlay.style.display = "none";
        }
      });
    });
