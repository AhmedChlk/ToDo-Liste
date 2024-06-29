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
}
export{project}