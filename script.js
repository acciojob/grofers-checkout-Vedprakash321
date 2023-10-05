const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	const priceElements = document.querySelectorAll(".prices");

    // Calculate the total price
    let totalPrice = 0;
    priceElements.forEach(priceElement => {
        // Parse the price text to a float and add it to the total price
        totalPrice += parseFloat(priceElement.textContent);
    });

    // Create a new row for total price
    const totalRow = document.createElement("tr");
	totalRow.id="ans";
    const totalCell = document.createElement("td");

    // Set the colspan attribute to span the entire row
    totalCell.setAttribute("colspan", "2");

    // Set the text content of the total cell
    totalCell.textContent = `Total Price: $${totalPrice.toFixed(2)}`;

    // Append the total cell to the total row
    totalRow.appendChild(totalCell);

    // Append the total row to the table body
    const tableBody = document.querySelector("tbody");
    tableBody.appendChild(totalRow);
  
};

getSumBtn.addEventListener("click", getSum);



// Get all elements with class name "prices" within elements with class name "item"
const prices = document.querySelectorAll('.item .prices');

// Calculate total price
let totalPrice = 0;
prices.forEach(price => {
    totalPrice += parseFloat(price.textContent); // Convert the price to a number and add it to the total
});

// Create a new row for the total price
const totalRow = document.createElement('tr');
totalRow.innerHTML = `<td colspan="2">Total Price: $${totalPrice}</td>`; // Assuming you want to display the total price in a new row

// Append the new row to the table
const table = document.querySelector('table');
table.appendChild(totalRow);
