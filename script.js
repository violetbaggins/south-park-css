
let checkbox = document.querySelector("#checkbox")
let maincolcheck = document.querySelector("#maincolcheck")
let main = document.querySelector("#main")



checkbox.addEventListener("mousedown", () =>{
     document.body.classList.toggle("darkmode");
})

maincolcheck.addEventListener("mousedown", () =>{
     main.classList.toggle("main-column");
})