class project{
    constructor(name){
        this.name = name;
        this.todos = [];
    }
    addTodo (todo){
        this.todos.push(todo);
    }
    delTodo(index){
        this.todos.splice(index, 1);
    }
    getTodos(){
        return this.todos;
    }
    getTodo(index){
        return todos[index];
    }
}
export{project}