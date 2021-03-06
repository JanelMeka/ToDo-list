let tasks = [];

let imgDone, imgEdit, imgTrash;

const output = document.getElementById('output');


imgDone = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-square" viewBox="0 0 16 16">
<path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
<path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 0 1 .02-.022z"/>
</svg>`

imgEdit = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
<path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
</svg>

`

imgTrash = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
<path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
</svg>

`

const addTodo = () => {
    const input = document.getElementById('input')
    const todo = {
        id: tasks.length + 1,
        name: input.value,
        completed: false
    }
    tasks.push(todo)
    input.value = ''
    renderTodos()

}


const renderTodos = () => {
    output.innerHTML = ''
    tasks.forEach(element => {
        const card = document.createElement('div')
        const title = document.createElement('h3')
        const btns = document.createElement('div')
        const done = document.createElement('button')
        const edit = document.createElement('button')
        const trash = document.createElement('button')

        card.classList = (element.completed == true) ? 'active' : 'card';

        title.innerHTML = element.name
        done.innerHTML = imgDone
        edit.innerHTML = imgEdit
        trash.innerHTML = imgTrash

        btns.append(done, edit, trash)
        card.append(title, btns)

        output.append(card)

        done.addEventListener('click', () => {
            element.completed = !element.completed
            renderTodos()
        })

        trash.addEventListener('click', () => {
            tasks = tasks.filter(item => {
                if (item.id != element.id) {
                    return true

                }
            })

            renderTodos()
        })
        edit.addEventListener('click', () => {
            let ask = confirm('are you sure?')
            if (ask == true) {
                let ex = prompt('add task')
                element.name = ex
            }
            renderTodos()

        })
    })

}

let addTask = document.getElementById('btnAdd')
addTask.addEventListener('click', addTodo)