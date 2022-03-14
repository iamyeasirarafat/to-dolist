let number = 0;
let submit = JSON.parse(localStorage.getItem('list'));
console.log(submit);
document.getElementById('submit').addEventListener('click', function () {
    if (!submit) {
        submit = [];
    }
     const input = document.getElementById('input').value;
     var d = new Date();
    var today = d.toString().substring(0,21);
    const p = {x:input, y:today}
    submit.push(p);
    console.log(submit);
    let submitJson = JSON.stringify(submit)

    if (input) {
        localStorage.setItem('list', submitJson);
    }
    location.reload();
  
})  
document.getElementById('clear').addEventListener('click', () =>{
    localStorage.clear();
    location.reload();
})


  const loadData = () =>{
    const dataJson = localStorage.getItem('list')
    const lists = JSON.parse(dataJson)
    lists?.forEach(data => {
        number++;
        const tableBody = document.getElementById('tableBody')
    const tableContainer = document.createElement('tr');
    tableBody.appendChild(tableContainer); 
    const tableHeader = document.createElement('th');
    tableHeader.setAttribute('scope', 'row');
    tableHeader.innerText = number;
    tableContainer.appendChild(tableHeader);
    const tabledescription = document.createElement('td');
    tabledescription.innerText = data.x;
    tableContainer.appendChild(tabledescription);
    
    const buttonDelete = document.createElement('button');
    buttonDelete.classList.add('btn', 'btn-danger');
    buttonDelete.innerText = 'Delete';
    const buttonDone = document.createElement('button');
    buttonDone.classList.add('btn', 'btn-success', 'me-2');
    buttonDone.classList.add();
     buttonDone.innerText = 'Done';
   const tableCreated = document.createElement('td');
    tableCreated.innerText = data.y;
    tableContainer.appendChild(tableCreated);
    const tableAction = document.createElement('td');
    tableAction.appendChild(buttonDone);
    tableAction.appendChild(buttonDelete);
    tableContainer.appendChild(tableAction);
    document.getElementById('input').value = '';
       
   });
  }
   
  loadData();
   
   
   
   
   /*  
 */