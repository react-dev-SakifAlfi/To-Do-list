let todoInput = document.querySelector('.todoInput')
let todoButton = document.querySelector('.todoButton')
let todoList = document.querySelector('.TodoList')
let num    = document.querySelector('.num')
let value   = 0






todoButton.addEventListener('click' , ()=>{
    if(todoInput.value==''){
        alert('dont keep blank')
    }else{
        value++
    num.innerHTML = value
      

        // creating tags
        let singeltodo = document.createElement('div')
        let singeltodoInput = document.createElement('input')
        let editButton = document.createElement('button')
        let deleteButton = document.createElement('button')

        // childs
        todoList.appendChild(singeltodo)
        singeltodo.appendChild(singeltodoInput)
        singeltodo.appendChild(editButton)
        singeltodo.appendChild(deleteButton)


        //class lists
        singeltodo.classList.add('singelTodo')
        singeltodoInput.classList.add('singeltodoInput')
        editButton.classList.add('editButton')
        deleteButton.classList.add('deleteButton')


         // add cont
         editButton.innerHTML  = 'Edit'
         deleteButton.innerHTML= 'Delete'
         singeltodoInput.value = todoInput.value


        // attribute
        singeltodoInput.setAttribute('readonly' , 'readonly')

        // delete
        deleteButton.addEventListener('click', ()=>{
            singeltodo.remove()
            value--
    num.innerHTML = value
        })
        // edit
        editButton.addEventListener('click' , ()=>{
            if(editButton.innerHTML=='Edit'){
                editButton.innerHTML='save'
                singeltodoInput.removeAttribute('readonly' , 'readonly')
            }else{editButton.innerHTML='Edit'
            singeltodoInput.setAttribute('readonly' , 'readonly')
            }
        })


    }
})
