function showHideToDo(){
    const showHideBtn = document.getElementById("showHideToDo");
    const mainContainer = document.getElementById("basicToDo");

    // Hide todo App and swap behaviour to show
    if(showHideBtn.innerText !== "Show"){
        showHideBtn.innerText = "Show";
        mainContainer.innerHTML = "";
        return;
    }

    // Swap button behaviour to hide
    showHideBtn.innerText = "Hide";

    // Show todo app
    const textInput = document.createElement('input');
    const addBtn = document.createElement('button');
    const unorderedList = document.createElement('ul');

    textInput.setAttribute('data-testid','input');
    textInput.addEventListener("input", (event) => {
    inputValue = event.target.value;
    });

    addBtn.innerText = "add";
    addBtn.addEventListener("click", (_) => {
        addListItem(unorderedList,textInput.value);
        textInput.value = '';
    });

    // Add main elements to container
    mainContainer.appendChild(textInput);
    mainContainer.appendChild(addBtn);
    mainContainer.appendChild(unorderedList);
}

// Add some list item to a list
function addListItem(unorderedList, listItemText) {
    const deleteItemBtn = document.createElement('button');
    const listItem = document.createElement('li');

    deleteItemBtn.innerText = "X";
    deleteItemBtn.onclick = () => listItem.remove();
    deleteItemBtn.setAttribute('data-testid','remove');
    deleteItemBtn.setAttribute('data-id',listItemText);

    listItem.innerText = listItemText;
    listItem.appendChild(deleteItemBtn);

    unorderedList.appendChild(listItem);
}