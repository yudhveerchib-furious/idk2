
function login() {
    let name = document.getElementById("name").value;
    let pass = document.getElementById("pass").value;
    let msg = document.getElementById("msg");

    if (name && pass) {
        msg.innerHTML = "Welcome " + name +
            ' <a href="paper.html">Go to Question Paper</a>';
    } else {
        msg.innerHTML = "Enter name and passkey";
    }
}
