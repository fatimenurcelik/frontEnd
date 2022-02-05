
const form = document.querySelector('form');
const input = document.querySelector('#txtTaskName');
const btnDeleteAll = document.querySelector('#btnDeleteAll');
const taskList = document.querySelector('#task-list');
let items ;

loadItems();

// call event listeners
eventListeners();

function eventListeners(){
    // submit event
    form.addEventListener('submit',addNewItem);

    //sadece birtask silmek için
    taskList.addEventListener('click',deleteItem);

    //tüm taskları silmek için 
    btnDeleteAll.addEventListener('click',deleteAllItems);
}

function loadItems() {
    items = getItemsFromLS();
    items.forEach(function(item){
        createItem(item);
    })
}

function getItemsFromLS() {
    if (localStorage.getItem('items') === null) {
        items = [];
    }else{
        items = JSON.parse(localStorage.getItem("items"));
    }
    return items;
}

function setItemToLS(text) {
    items= getItemsFromLS();
    items.push(text);
    localStorage.setItem('items', JSON.stringify(items));
}

function deleteItemFromLS(text) {
    items = getItemsFromLS()
    items.forEach(function(item,index){
        if (item === text) {
            items.splice(index,1);
        }
    });
    //listeyi güncelleme işlemi yapılır
    localStorage.setItem('items', JSON.stringify(items));
}

function createItem(text) {
    const li= document.createElement('li');
    li.className='list-group-item list-group-item-secondary';
    li.appendChild(document.createTextNode(text))

    const a =document.createElement('a');
    a.classList='delete-item float-right';
    a.setAttribute('href','#');
    a.innerHTML='<i class="fas fa-times"></i>';

    //li ve a ilişkilendirildi
    li.appendChild(a);

    taskList.appendChild(li);
}

function addNewItem(e){ 
    if(input.value ===''){
        alert('you can not add empty task ');
     }

     createItem(input.value);

     //verileri LS a kaydetmek için
     setItemToLS(input.value);

    //type a new task kısmının temizlenmesini sağlar
    input.value="";

    e.preventDefault();
}

function deleteItem(e) {
    if(e.target.className === "fas fa-times"){
        if (confirm("are you sure? ")) {
            e.target.parentElement.parentElement.remove();

            //delete item from LS
            deleteItemFromLS(e.target.parentElement.parentElement.textContent);
        }  
    }
    e.preventDefault();
}

function deleteAllItems(e) {
   if (confirm("are you sure? ")) {
        //taskList.innerHTML=''; // sadece bu kod ile tümünü silebiliriz.

        // taskList.childNodes.forEach(function (item){
        //     if (item.nodeType === 1) {
        //         item.remove();
        //     }
        // });

        while(taskList.firstChild){
            taskList.removeChild(taskList.firstChild);
        }
        localStorage.clear();
   }

    e.preventDefault();

}