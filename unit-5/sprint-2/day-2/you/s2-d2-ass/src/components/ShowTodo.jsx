
export function ShowTodos({todos}) {

    return (
        <div>

 {todos.map((todo)=> <h4 key={todo.id}>{todo.task}</h4>
 )}



        </div>
    )
}