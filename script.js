// script.js
document.getElementById("registration-form").addEventListener("submit", function (event) {
    event.preventDefault();
  
    var formData = new FormData(this);
  
    var xhr = new XMLHttpRequest();
    xhr.open(
      "POST",
      "https://script.google.com/macros/s/AKfycbz0gCB-Mvsh-NHPcgObJi0TvPxhP-jMReEyEOYtNkOJ9RS-h4cFy2m6Xb98Bt7DxKvg/exec",
      true
    );
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          try {
            // Menanggapi respons dari server
            var response = xhr.responseText;
            if (response.startsWith("Data telah disimpan.")) {
              document.getElementById("success-message").style.display = "block";
              // Membersihkan nilai formulir
              resetForm();
            } else {
              console.error("Unexpected server response:", response);
            }
          } catch (error) {
            console.error("Error parsing JSON:", error);
          }
        }
      }
    };
    xhr.send(formData);
  });
  
  // Fungsi untuk mereset formulir
  function resetForm() {
    var form = document.getElementById("registration-form");
    form.reset();
  }
  