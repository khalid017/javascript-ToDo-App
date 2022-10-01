

let input=document.getElementById("input")
let btn=document.getElementById("submit")
let list=document.getElementById("task")//parent for tasks div
let array=[]
let todos = localStorage.getItem("todos") 

 //object constructor
function object1(task,status)
{
    this.task = task;
    this.status = status;
}
// for retrieving data from localstorage
if (todos)
{
    //setting up dom using data from storage obejct
    todos = JSON.parse(todos)
    todos.forEach(function(ele){array.push(ele)})
    todos.forEach(function(todo){

        let taskDiv=document.createElement("div")
        taskDiv.setAttribute("class","items")
        list.appendChild(taskDiv)
    
        let task=document.createElement("p")
        task.innerText=todo.task

        taskDiv.appendChild(task)
        input.value=""
        
        let done=document.createElement("input")
        done.setAttribute("id","check")
        done.setAttribute("type","checkbox")

        if(todo.status===true)
        { 
            done.setAttribute("checked","true")
            task.setAttribute("class","done")
        }
        taskDiv.appendChild(done)

        let edit=document.createElement("button")
        edit.setAttribute("class","edit")
        edit.innerText="Edit"
        taskDiv.appendChild(edit)
    
        let del=document.createElement("button")
        del.setAttribute("class","edit")
        del.innerText="x"
        taskDiv.appendChild(del)
    
        let line=document.createElement("hr")
        taskDiv.appendChild(line)

        //for delete btn
        del.addEventListener("click",function()
        {
            list.removeChild(taskDiv)
            console.log(array.indexOf(todo))
            array.splice(array.indexOf(todo),1)
            localStorage.setItem("todos",JSON.stringify(array));
        })

        //done btn
        done.addEventListener('change', (event) => {
            if (event.currentTarget.checked) {
                taskDiv.children[0].setAttribute("class","done")
                todo.status=true
                localStorage.setItem("todos",JSON.stringify(array));

            }
            else {
                taskDiv.children[0].setAttribute("class","none")
                todo.status=false
                localStorage.setItem("todos",JSON.stringify(array));
            }
        })
        //edit btn
        edit.addEventListener("click",function()
        {
            let newtask=prompt("Enter new task")
            if(newtask==""){
                alert("Enter a task")
            }
            else{
                 taskDiv.children[0].innerText=newtask
                 todo.task=newtask
    
                 localStorage.setItem("todos",JSON.stringify(array));
            }
        })
    })
    }
    // main logic
    btn.addEventListener("click",function()
    {
        if(!input.value)
        {
            input.classList.add("warning")
            return
        }
        input.classList.remove("warning")
        
        //funtion for creating list of tasks
           let taskDiv=document.createElement("div")
            taskDiv.setAttribute("class","items")
            list.appendChild(taskDiv)
        
            let task=document.createElement("p")
            //getting task value
            let todo =input.value

            task.innerText=todo

            taskDiv.appendChild(task)
            input.value=""

            let done=document.createElement("input")
            done.setAttribute("id","edit")
            done.setAttribute("type","checkbox")
            
            taskDiv.appendChild(done)

            let edit=document.createElement("button")
            edit.setAttribute("class","edit")
            edit.innerText="Edit"
            taskDiv.appendChild(edit)
        
            let del=document.createElement("button")
            del.setAttribute("class","edit")
            del.innerText="x"
            taskDiv.appendChild(del)
        
            let line=document.createElement("hr")
            taskDiv.appendChild(line)

            del.addEventListener("click",function()
                {
                    list.removeChild(taskDiv)
                    console.log(array.indexOf(task1))
                    array.splice(array.indexOf(task1),1)
                    localStorage.setItem("todos",JSON.stringify(array));
                })
    
            done.addEventListener('change', (event) => {
                if (event.currentTarget.checked) {
                    taskDiv.children[0].setAttribute("class","done")
                    task1.status=true
                    localStorage.setItem("todos",JSON.stringify(array));
                }
                else
                {
                    taskDiv.children[0].setAttribute("class","none")
                    task1.status=false
                    localStorage.setItem("todos",JSON.stringify(array));
                }
            })
        
            edit.addEventListener("click",function()
            {
            let newtask=prompt("Enter new task")
            if(newtask==""){
                alert("Enter a task")
            }
            else
            {
                taskDiv.children[0].innerText=newtask
                task1.task=newtask
                localStorage.setItem("todos",JSON.stringify(array));
            }
            })
            //putting objects to localstorage
            let task1 =  new object1(todo,"");
            array.push(task1)
            localStorage.setItem("todos",JSON.stringify(array))       
    })
   




