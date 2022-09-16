
let input=document.getElementById("input")
let btn=document.getElementById("submit")
let array=[]
let marked=[]
let todos = localStorage.getItem("todos") 
let completed =  JSON.parse(localStorage.getItem("marked") )
if (todos)
{
    todos = JSON.parse(todos)
    todos.forEach(function(ele){array.push(ele)})
    todos.forEach(function(todo){
        let list=document.getElementById("task")
            let div=document.createElement("div")
            div.setAttribute("class","items")
            list.appendChild(div)
        
            let task=document.createElement("p")
            task.innerText=todo

            if (completed)
            {
                completed.forEach(function(ele){marked.push(ele)})
                if(completed.find(element => element === todo))
                {
                    task.setAttribute("class","done")
                }    
            }
            div.appendChild(task)
            input.value=""
            
            let done=document.createElement("input")
            done.setAttribute("id","edit")
            done.setAttribute("type","checkbox")
            // done.innerText="Done"
            div.appendChild(done)

            let edit=document.createElement("button")
            edit.setAttribute("class","edit")
            edit.innerText="Edit"
            div.appendChild(edit)
        
            let del=document.createElement("button")
            del.setAttribute("class","edit")
            del.innerText="x"
            div.appendChild(del)
        
            let line=document.createElement("hr")
            div.appendChild(line)
        
            del.addEventListener("click",function()
            {  
            list.removeChild(div)
            array.splice(array.indexOf(todo),1)
            localStorage.setItem("todos",JSON.stringify(array));
            
            })
            done.addEventListener('change', (event) => {
                if (event.currentTarget.checked) {
                    div.children[0].setAttribute("class","done")
                    marked.push(todo)
                    localStorage.setItem("marked",JSON.stringify(marked));

                } else {
                    div.children[0].setAttribute("class","none")
                    marked.splice(marked.indexOf(todo),1)
                    localStorage.setItem("marked",JSON.stringify(marked));
                }
            })
        
            edit.addEventListener("click",function()
            {
                let newtask=prompt("enter new task")
                div.children[0].innerText=newtask
                array[array.indexOf(todo)]=newtask
                localStorage.setItem("todos",JSON.stringify(array));
            })
    })
    }
    btn.addEventListener("click",function()
    {
        if(!input.value)
        {
            input.classList.add("warning")
            return
        }
        input.classList.remove("warning")

    
        let list=document.getElementById("task")//button 
        let div=document.createElement("div")
        div.setAttribute("class","items")
        list.appendChild(div)
    
        let task=document.createElement("p")
        let todo =input.value
        task.innerText=todo

        if (completed)
        {
            completed.forEach(function(ele){marked.push(ele)})
            if(completed.find(element => element === todo))
            {
                task.setAttribute("class","done")
            }
        }
        div.appendChild(task)
        input.value=""

        let done=document.createElement("input")
        done.setAttribute("id","edit")
        done.setAttribute("type","checkbox")
        // done.innerText="Done"
        div.appendChild(done)

        let edit=document.createElement("button")
        edit.setAttribute("class","edit")
        edit.innerText="Edit"
        div.appendChild(edit)
    
        let del=document.createElement("button")
        del.setAttribute("class","edit")
        del.innerText="x"
        div.appendChild(del)
    
        let line=document.createElement("hr")
        div.appendChild(line)
    
        del.addEventListener("click",function()
        {  
           list.removeChild(div)
           array.splice(array.indexOf(todo),1)
           localStorage.setItem("todos",JSON.stringify(array));     
        })
    

        done.addEventListener('change', (event) => {
            if (event.currentTarget.checked) {
                div.children[0].setAttribute("class","done")
                marked.push(todo)
                localStorage.setItem("marked",JSON.stringify(marked));

            } else {
                div.children[0].setAttribute("class","none")
                marked.splice(marked.indexOf(todo),1)
                localStorage.setItem("marked",JSON.stringify(marked));
            }
          })
      
        edit.addEventListener("click",function()
        {
            let newtask=prompt("enter new task")
            div.children[0].innerText=newtask
            array[array.indexOf(todo)]=newtask
            localStorage.setItem("todos",JSON.stringify(array));
        })
    
        array.push(todo)
        localStorage.setItem("todos",JSON.stringify(array));
    })



