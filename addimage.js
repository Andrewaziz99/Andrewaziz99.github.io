document.addEventListener("DOMContentLoaded", () => {
    const inputContainer = document.getElementById("imageContainer");
    const addInputButton = document.getElementById("addimageButton");

    let inputCount = 1;

    addInputButton.addEventListener("click", () => {
        const newInput = document.createElement("input");
        newInput.type = "file";
        newInput.accept = "image/*";
        newInput.className = "form-control";
        newInput.name = `fig[${inputCount}]`;
        newInput.placeholder = `Fig ${++inputCount}`;
        
        inputContainer.appendChild(newInput);
    });
});
