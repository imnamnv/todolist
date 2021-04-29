import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useTodo from "./hooks/useTodo";
import TodoForm from "./TodoForm";
import { add } from "./todoSlice";

const Todo = (props) => {
  const { loading } = useTodo();
  const dispatch = useDispatch();

  const todo = useSelector((state) => state.todo.list);

  const handleOnSubmit = (newValue) => {
    const action = add(newValue.todo);
    dispatch(action);
  };
  return (
    <div>
      {loading ? (
        <h1>LOADING</h1>
      ) : (
        <>
          <ul>
            {todo.map((item) => (
              <li key={item.id}>{item.title}</li>
            ))}
          </ul>
          <TodoForm onSubmit={handleOnSubmit} />
        </>
      )}
    </div>
  );
};

Todo.propTypes = {};

export default Todo;
