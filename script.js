let search = document.getElementById("search");


let user = document.getElementById("user");


let head = document.getElementById("head");



search.addEventListener("input",function(){
    let searchdata = search.value ;

    let alluser = user.querySelectorAll("li");
     
   for (let i = 0 ;i < alluser.length;i++){
     let user = alluser[i];

     let usertext = user.textContent;
     if(usertext.toLowerCase().includes(searchdata.toLowerCase())){
        user.style.display = "block";
     }else{
        user.style.display = "none";
     }
   }

    
})