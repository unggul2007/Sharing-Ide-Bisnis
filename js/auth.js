function register() {
    let user = document.getElementById("regUser").value;
    let pass = document.getElementById("regPass").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.push({ user, pass });
    localStorage.setItem("users", JSON.stringify(users));

    alert("Register berhasil");
    window.location = "index.html";
}

function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];
    let cek = users.find(u => u.user === user && u.pass === pass);

    if (cek) {
        localStorage.setItem("loginUser", user);
        window.location = "dashboard.html";
    } else {
        alert("Login gagal");
    }
}

function cekLogin() {
    if (!localStorage.getItem("loginUser")) {
        window.location = "index.html";
    }
}

function logout() {
    localStorage.removeItem("loginUser");
    window.location = "index.html";
}
