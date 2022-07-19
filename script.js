
window.onload=async () => {
    let response=await fetch("https://jsonplaceholder.typicode.com/todos");
    // console.log(response);
    let array=await response.json();
    // console.log(array);


    let todo_title=[];
    let status_of_task=[];

    for(let i=0;i<array.length;i++){
        let ans=array[i].title;
        todo_title.push(ans);
    }

    for(let i=0;i<array.length;i++){
        let ans=array[i].completed;
        status_of_task.push(ans);
    }


    let heading=document.getElementById("heading");
    heading.innerText="Todo list - Show All";
    ShowAllTheItems();


    let show_all=document.getElementById("show_all");
    show_all.addEventListener("click",function(event){
        let heading=document.getElementById("heading");
        heading.innerText="Todo list - Show All";
        target=event.target;
        ShowAllTheItems.call(target);
    })

    let completed=document.getElementById("completed");
    completed.style.backgroundColor="green";
    completed.addEventListener("click",function(event){
        let heading=document.getElementById("heading");
        heading.innerText="Todo list - Completed";
        target=event.target;
        ShowAllTheCompletedItems.call(target);
    })

    let pending=document.getElementById("pending");
    pending.style.backgroundColor="red";
    pending.addEventListener("click",function(event){
        let heading=document.getElementById("heading");
        heading.innerText="Todo list - Pending";
        target=event.target;
        ShowAllThePendingItems.call(target);
    })

    function ShowAllTheItems(){
        let todos1=document.getElementById("todos1");
        todos1.innerHTML="";
        for(let i=0;i<todo_title.length;i++){
            let new_div=document.createElement("P");
            new_div.innerText=todo_title[i];
            if(status_of_task[i] == true){
                new_div.style.color="green";
                new_div.setAttribute("class","finished");
            }
            else{
                new_div.style.color="red";
                new_div.setAttribute("class","not_finished");
            }
            todos1.appendChild(new_div);
        } 
    }

    function ShowAllTheCompletedItems(){
        let todos1=document.getElementById("todos1");
        todos1.innerHTML="";
        for(let i=0;i<todo_title.length;i++){
            if(status_of_task[i] == true){
                let new_div=document.createElement("P");
                new_div.innerText=todo_title[i];
                new_div.style.color="green";
                new_div.setAttribute("class","finished");
                todos1.appendChild(new_div);
            }
        } 
    }


    function ShowAllThePendingItems(){
        let todos1=document.getElementById("todos1");
        todos1.innerHTML="";
        for(let i=0;i<todo_title.length;i++){
            if(status_of_task[i] == false){
                let new_div=document.createElement("P");
                new_div.innerText=todo_title[i];
                new_div.style.color="red";
                new_div.setAttribute("class","not_finished");
                todos1.appendChild(new_div);
            }
        } 
    }
}
