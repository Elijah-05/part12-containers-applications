import PropTypes from "prop-types";
import Todo from "./Todo";

const TodoList = ({ todos = [], deleteTodo, completeTodo }) => {
  return (
    <>
      {todos
        ?.map((todo) => (
          <Todo
            key={todo._id}
            todo={todo}
            onDelete={() => deleteTodo(todo)}
            onComplete={() => completeTodo(todo)}
          />
        ))
        .reduce((acc, cur, i) => {
          return [...acc, <hr key={i} />, cur];
        }, [])}
    </>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      text: PropTypes.string,
      done: PropTypes.bool.isRequired,
    })
  ),
  deleteTodo: PropTypes.func.isRequired,
  completeTodo: PropTypes.func.isRequired,
};

export default TodoList;
