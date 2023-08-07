const $username = document.getElementById("username"),
      $password = document.getElementById("password"),
      $submit = document.getElementById("submit"),
      $visible = document.getElementById("visible");

document.addEventListener("change", (e)=>{
    if(e.target === $visible){
        if($visible.checked === false) $password.type = "password";
        else $password.type = "text";
    }
});

document.addEventListener("click", (e)=> {
    if(e.target === $submit){
        if($password.value !== "" && $username.value !== ""){
            e.preventDefault();
            window.location = "fotos.html";
        }
    }
});