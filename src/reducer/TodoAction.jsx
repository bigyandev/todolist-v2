import { Actions } from "./type"

const TodoAction = (dispatch) => {
    return {
        onSubmit: function (title, deadline) {
            dispatch({
                type: Actions.ADD_TODO,
                payload: { title: title, deadline: deadline }
            })
        },
        onDelete: function (id) {
            dispatch({
                type: Actions.DELETE_TODO,
                payload: { id: id }
            })
        },
        onEdit: function(editText, id) {
            dispatch({
                type: Actions.EDIT_TODO,
                payload: {title: editText, id:id}
            })
        },
        onStatusTodo: function (completed, id) {
            dispatch({
                type: Actions.STATUS_TODO,
                payload: { id: id, completed: completed }
            })
        }
    }
}
export default TodoAction