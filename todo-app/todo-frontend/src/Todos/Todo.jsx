// Todo.jsx
import PropTypes from "prop-types";

const Todo = ({ todo, onDelete, onComplete }) => {
  console.log("todo Data: ", todo);
  
  return (
    <div
      key={todo._id}
      style={{
        display: "flex",
        justifyContent: "space-between",
        maxWidth: "70%",
        margin: "auto",
      }}
    >
      <span>{todo.text}</span>
      {todo.done ? (
        <>
          <span>This todo is done</span>
          <span>
            <button onClick={onDelete}> Delete </button>
          </span>
        </>
      ) : (
        <>
          <span>This todo is not done</span>
          <span>
            <button onClick={onDelete}> Delete </button>
            <button onClick={onComplete}> Set as done </button>
          </span>
        </>
      )}
    </div>
  );
};

Todo.propTypes = {
  todo: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    text: PropTypes.string,
    done: PropTypes.bool.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
  onComplete: PropTypes.func.isRequired,
};

export default Todo;
