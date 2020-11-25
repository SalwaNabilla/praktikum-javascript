function login() {
    username = document.getElementById("username").value;
    password = document.getElementById("password").value;

    if (username == "" || password == "") {
        alert("Username Atau Password Tidak Boleh Kosong");
        return false;
    }
    else if (username == "salwa" && password == "salwa123") {
        window.location = "chat.html";
        alert ("Login Sukses!")
        return false;
    }else{
        alert("Username Atau Password anda salah");
    }
}