mata = document.getElementById("closeEye")
pass = document.getElementById("pwd")

function showPw(){
        if(pass.type == "password"){
            pass.type = "text";
            closeEye.src = "gallery/openEye.png"
            
        }else{
            pass.type = "password";
            closeEye.src = "gallery/closeEye.png"
        }
}

mata.onclick = showPw;