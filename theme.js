const btn =
  document.querySelector("#themeToggle") ||
  document.querySelector(".theme-btn");

if(btn){
  btn.onclick=()=>{
    document.body.classList.toggle("dark");
    localStorage.setItem("theme",
      document.body.classList.contains("dark")?"dark":"light"
    );
    btn.textContent=document.body.classList.contains("dark")?"☀️":"🌙";
  };
}

if(localStorage.getItem("theme")==="dark"){
  document.body.classList.add("dark");
}