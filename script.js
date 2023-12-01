let size = document.getElementById("size")
let container = document.querySelector(".container")

size.addEventListener("click", () =>{
    let choice = Number(prompt("Enter here"))
    if (choice<=100){
        for (i=0; i<choice**2; i++){
            let grid_div = document.createElement("div")
            grid_div.classList.add("grid_div")
            grid_div.style.cssText += `width:${500/choice}px`
            grid_div.style.cssText += `height:${500/choice}px`
            container.appendChild(grid_div)
        }
    }
    else{
        let message = document.createElement("div")
        message.textContent = "You entered invalid number"
        container.appendChild(message)
    }
})
