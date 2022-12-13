const login = async (event) => {
  event.preventDefault();
  let isTeacher = false;
  const formData = {
    email: document.getElementById("emailInput1").value,
    password: document.getElementById("passwordInput1").value,
  };
  const response = await fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: formData.email,
      password: formData.password,
    }),
  });

  const data = response.json();
  data.then((data) => console.log(data.userId, data.isTeacher));

  if (response.status === 200) {
    if (isTeacher) {
      window.location = "/loginstaff.html";
    } else {
      window.location = "/loginstaff2.html";
    }
  } else {
    window.alert("Incorrect login details. Please try again");
    //window.location = "/login.html";
  }
};
const loginButton = document.getElementById("loginButton");

loginButton.addEventListener("click", login);
