function fetchData() {
    const urlInput = document.getElementById('url').value;
    const tableContainer = document.getElementById('table-container');
    const dataTable = document.getElementById('data-table');

    const xhr = new XMLHttpRequest();

    xhr.onload = function() {
      if (xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        
        dataTable.innerHTML = '';

        const headerRow = document.createElement('tr');
        for (const key in data[0]) {
          if (data[0].hasOwnProperty(key)) {
            const headerCell = document.createElement('th');
            headerCell.textContent = key;
            headerRow.appendChild(headerCell);
          }
        }
        dataTable.appendChild(headerRow);

        data.forEach(function(item) {
          const dataRow = document.createElement('tr');
          for (const key in item) {
            if (item.hasOwnProperty(key)) {
              const dataCell = document.createElement('td');
              dataCell.textContent = item[key];
              dataRow.appendChild(dataCell);
            }
          }
          dataTable.appendChild(dataRow);
        });

        tableContainer.style.display = 'block';
      }
    };

    xhr.open('GET', urlInput, true);
    xhr.send();
  }