const chatbtn = document.getElementById("chatbot-btn");
const chatframe = document.getElementById("chatframe");
const cancelbtn = document.getElementById("cancel-btn");

chatbtn.addEventListener("click", () => {
  chatbtn.classList.toggle("open-chatbot");
  cancelbtn.classList.toggle("hidden");
  chatframe.classList.toggle("flex");
  chatframe.classList.toggle("hidden");
});

cancelbtn.addEventListener("click", () => {
  chatbtn.classList.toggle("open-chatbot");
  cancelbtn.classList.toggle("hidden");
  chatframe.classList.toggle("flex");
  chatframe.classList.toggle("hidden");
});
