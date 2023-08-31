document.addEventListener("DOMContentLoaded", () => {
    const inputContainer = document.getElementById("inputContainer");
    const addInputButton = document.getElementById("addInputButton");

    let inputCount = 1;

    addInputButton.addEventListener("click", () => {
        const newInput = document.createElement("input");
        newInput.type = "text";
        newInput.className = "form-control";
        newInput.name = `inputField[${inputCount}]`;
        newInput.placeholder = `Text ${++inputCount}`;
        
        inputContainer.appendChild(newInput);
    });
});
