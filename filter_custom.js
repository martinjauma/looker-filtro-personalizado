
const dscc = require('dscc');

const draw = (data, config) => {
  const container = document.getElementById('container');
  container.innerHTML = '';

  const uniqueValues = new Set();
  data.tables.DEFAULT.forEach(row => uniqueValues.add(row.dimension));

  const select = document.createElement('select');
  select.style.padding = "8px";
  select.style.fontSize = "16px";

  uniqueValues.forEach(value => {
    const option = document.createElement('option');
    option.value = value;
    option.innerText = value;
    select.appendChild(option);
  });

  container.appendChild(select);
};

dscc.subscribeToData(draw, { transform: dscc.tableTransform });
