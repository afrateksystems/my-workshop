let todos = JSON.parse(localStorage.getItem('todos')) || [];
const errorDiv = document.getElementById('error');

        function saveTodos(){
            localStorage.setItem('todos',JSON.stringify(todos));
        }
        function addTodo(){
            const input = document.getElementById('todo-input');
            const dateInput = document.getElementById('todo-date')
            const prioritySelect = document.getElementById('priority');
            const priorityValue = prioritySelect.value;
            const text = input.value.trim();
            const date = dateInput.value;
            if(text === '') return;
                
            todos.push({text,date,priority:priorityValue,completed:false});
            input.value = '';
            dateInput.value = '';
            saveTodos();
            renderTodos();
        
        }
        function validate(){
            errorDiv.style.display = (event.target.value.trim() !== '')? 'none' :'inline';
        }
         
        function sort(){
            todos.sort((a, b) => a.text.localeCompare(b.text));
            saveTodos();
            renderTodos();
        }
        function deleteTodo(index){
            todos.splice(index,1);
            saveTodos();
            renderTodos();
        }
        function toggleComplete(index){
            todos[index].completed = !todos[index].completed;
            saveTodos();
            renderTodos();
        }
        function renderTodos(){
            const list = document.getElementById('todo-list');
            list.innerHTML='';
            todos.forEach((todo,index) => {
                const li = document.createElement('li');
                if (todo.completed) li.classList.add('completed');

                li.innerHTML = `
                <div class="task-box"  ${todo.priority}>
                <span>${todo.text}  ${todo.priority}  ${todo.date}</span>
                <div class="check-button">
                    <button class="yess"onclick="toggleComplete(${index})">✔</button>
                    <button class="noo"onclick="deleteTodo(${index})">✖</button>
                    
                </div>
                </div>
                `;
                list.appendChild(li);
            });
        }
    renderTodos();   
