       function downloadFile() {
        window.location.href = "games/Asteroids.exe";
      }
      console.log(script funguje);
      document.addEventListener("DOMContentLoaded", function() {
        setTimeout(downloadFile, 3000); // Delay in milliseconds (3 seconds)
      });
    
