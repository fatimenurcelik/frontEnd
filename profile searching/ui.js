class UI {
    constructor() {
        this.profileContainer = document.querySelector('#profileContainer');
        this.alert =document.querySelector("#alert");
    }

    showProfile(profile){
        this.profileContainer.innerHTML = `
        <div class= "card card-body"> 
            <div class="row">
                <div class= "col-sm-3"> 
                    <a href="https://placeholder.com"><img src="https://via.placeholder.com/350x150" class="img-thumbnail"></a>
                </div>
                <div class= "col-sm-9"> 
                    <h4>Contact</h4>
                    <ul class ="list-group"> 
                        <li class = "list-group-item">
                            Name: ${profile.name}
                        </li>
                        <li class = "list-group-item">
                            Username: ${profile.username}
                        </li>
                        <li class = "list-group-item">
                            E mail: ${profile.email}
                        </li>
                        <li class = "list-group-item">
                            Adress: ${profile.address.city}
                        </li>
                    </ul>
                    <h4 class="mt-4">To Do List</h4>
                    <ul id="todo" class ="list-group"> 
                    </ul>
                </div>
            </div>
        </div> 
        `
    }

    showAlert(text){
        this.alert.innerHTML =`${text} is not found. `;
    }

    showTodo(todo){
        let html ="";

        todo.forEach(item => {
            if (item.completed) {
                html += `
                <li class = "list-group-item list-group-item-success"">
                     ${item.title}
                </li>
                `;
            }else{
                html += `
                <li class = "list-group-item list-group-item-secondary">
                     ${item.title}
                </li>
                `; 
            }
        });
        this.profileContainer.querySelector("#todo").innerHTML = html;
    }

    clear(){
        this.profileContainer.innerHTML="";
        this.alert.innerHTML="";
    }
}
