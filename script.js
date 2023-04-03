const container = document.querySelector(".container");
const refreshBtn = document.querySelector(".refresh-btn");

const maxColorBoxes = 32;

const generateColor = () => {
    container.innerHTML = ""; // clearing the container
    for (let i = 0; i < maxColorBoxes; i++) {
        // Generating random hex code for color :-
        let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
        randomHex = `#${randomHex.padStart(6, "0")}`; // adding # tag in hex code
        
        // creating color boxes through elements:-
        const color = document.createElement("li");
        color.classList.add("color");
        color.innerHTML = `<div class ="react-box" style="background:${randomHex}"></div>
                            <span class ="hex-value">${randomHex}</span>`;
        
        //Adding event on li for copying the color:-
        color.addEventListener("click", () => copyColor(color, randomHex));
        container.appendChild(color);
    }    
}
generateColor();

const copyColor = (elem, hexVal) => {
   const colorElement = elem.querySelector(".hex-value");
   //Coping the hec value, Updating the text to copied
   // and Changing text back to original hex value:-
   navigator.clipboard.writeText(hexVal).then( () => {
    colorElement.innerText = "Copied";
    setTimeout(() => colorElement.innerText = hexVal, 1000);
   }).catch(() => alert("Failed to copy the color")); // showing alert if color can't be copied:-
};

refreshBtn.addEventListener("click", generateColor);