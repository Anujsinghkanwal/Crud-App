// Initialize the items array
let items = [];

// Function to render the items
function renderItems() {
    const itemsContainer = document.getElementById('items-container');
    itemsContainer.innerHTML = '';

    items.forEach((item, index) => {
        const itemHTML = `
            <div class="item">
                <h2 class="item-name">${item.name}</h2>
                <p class="item-description">${item.description}</p>
                <button class="update-btn" data-index="${index}">Update</button>
                <button class="delete-btn" data-index="${index}">Delete</button>
            </div>
        `;
        itemsContainer.innerHTML += itemHTML;
    });
}

// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const description = document.getElementById('description').value;

    // Create a new item object
    const item = { name, description };

    // Add the item to the items array
    items.push(item);

    // Render the updated items
    renderItems();

    // Clear the form fields
    document.getElementById('name').value = '';
    document.getElementById('description').value = '';
}

// Function to handle update button click
function handleUpdate(event) {
    const index = event.target.dataset.index;
    const name = prompt('Enter the new name:');
    const description = prompt('Enter the new description:');

    // Update the item in the items array
    items[index].name = name;
    items[index].description = description;

    // Render the updated items
    renderItems();
}

// Function to handle delete button click
function handleDelete(event) {
    const index = event.target