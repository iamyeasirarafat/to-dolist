let number = 0;
document.getElementById('submit').addEventListener('click',function () {
    number++;
    const data =document.getElementById('input').value; 
    if (data == 0) {
        alert('Please type something')
    }else {
        
        const tableBody = document.getElementById('tableBody')
        const tableContainer = document.createElement('tr');
        tableBody.appendChild(tableContainer); 
        const tableHeader = document.createElement('th');
        tableHeader.setAttribute('scope', 'row');
        tableHeader.innerText = number;
        tableContainer.appendChild(tableHeader);
        const tabledescription = document.createElement('td');
        tabledescription.innerText = data;
        tableContainer.appendChild(tabledescription);
        
        const buttonDelete = document.createElement('button');
        buttonDelete.classList.add('btn');
        buttonDelete.classList.add('btn-danger');
        buttonDelete.classList.add('delete');
        buttonDelete.innerText = 'Delete';
        const buttonDone = document.createElement('button');
        buttonDone.classList.add('btn');
        buttonDone.classList.add('btn-success');
        buttonDone.classList.add('Done');
        buttonDone.innerText = 'Done';
        var d = new Date();
        var today = d.toString().substring(0,20);
        const tableCreated = document.createElement('td');
        tableCreated.innerText = today;
        tableContainer.appendChild(tableCreated);
        const tableAction = document.createElement('td');
        tableAction.appendChild(buttonDone);
        tableAction.appendChild(buttonDelete);
        tableContainer.appendChild(tableAction);
        document.getElementById('input').value = '';
        
        











    /*     tableContainer.innerHTML = `
                    <th scope="row">${number}</th>
                    <td>${data}</td>
                    <td>
                    <button class="btn btn-success success">Done</button>
                    <button class="btn btn-danger delete">Delete</button>
                    </td>
        `;
 */
        


       
    
        

        

        // tableBody.setAttribute('id', 'tableContainer');
        // document.getElementById('tablebody').appendChild(tableBody);






    }
}

);