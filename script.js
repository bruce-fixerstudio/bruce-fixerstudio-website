 // 捲動到指定區塊
    function scrollToSection(sectionId) {
      const section = document.getElementById(sectionId);
      section.scrollIntoView({
        behavior: "smooth"
      });
    }

    // 表單送出檢查
    function submitForm(event) {
      event.preventDefault();

      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const content = document.getElementById("content").value;
      const message = document.getElementById("formMessage");

      if (name === "" || email === "" || content === "") {
        message.style.color = "red";
        message.textContent = "請把名字、Email 和需求內容都填完。";
        return;
      }

      message.style.color = "green";
      message.textContent = "表單已送出，這裡目前只是前端示範，還不會真的寄信。";

      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("content").value = "";
    }

    function toggleMenu() {
      const navMenu = document.getElementById("navMenu");
      if (navMenu) {
        navMenu.classList.toggle("show");
      }
    }
