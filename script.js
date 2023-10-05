const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	const prices = document.querySelectorAll('.price');
  
  // Calculate total price by summing up the prices
  let totalPrice = 0;
  prices.forEach(price => {
    totalPrice += parseInt(price.textContent);
  });
  
  // Create a new row for total price
  const newRow = document.createElement('tr');
	newRow.id="ans";
  const itemNameCell = document.createElement('td');
  itemNameCell.textContent = 'Total Price';
  newRow.appendChild(itemNameCell);
  
  const totalPriceCell = document.createElement('td');
  totalPriceCell.textContent = totalPrice;
  newRow.appendChild(totalPriceCell);
  
  // Add the new row to the table
  document.querySelector('table').appendChild(newRow);
  
};

getSumBtn.addEventListener("click", getSum);

