let size = document.getElementById("size")
let container = document.querySelector(".container")
let color = document.getElementById("color")
let buttons = document.querySelector(".buttons")
let submit = document.getElementById("submit")
let message_container = document.getElementById("message_container")
let color_value;

size.addEventListener("click", () =>{
    let choice = Number(prompt("Enter here"))
    if (choice<=100){
        for (i=0; i<choice**2; i++){
            let grid_div = document.createElement("div")
            grid_div.classList.add("grid_div")
            grid_div.style.cssText += `width:${500/choice}px`
            grid_div.style.cssText += `height:${500/choice}px`
            container.appendChild(grid_div)

            grid_div.addEventListener("mouseover", () => {
                grid_div.style.backgroundColor = color_value
            })
        }
    }
    else{
        let message = document.createElement("p")
        message.textContent = "You entered invalid number"
        message_container.appendChild(message)
    }
})

let color_input = document.createElement("input")
color.addEventListener("click", () =>{
    color_input.setAttribute("type", "color")
    buttons.insertBefore(color_input,submit)
})

submit.addEventListener("click", () =>{
    color_value = color_input.value
})