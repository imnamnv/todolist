import { useEffect, useState } from "react";
import { unwrapResult } from "@reduxjs/toolkit";
import { getTodo } from "../todoSlice";
import { useDispatch, useSelector } from "react-redux";
export default function useTodo() {
  const [todo, setTodo] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        const action = getTodo();

        const resultTodo = await dispatch(action);

        const todo = unwrapResult(resultTodo);
        setTodo(todo);
      } catch (error) {
        console.log("Error", error);
      }

      setLoading(false);
    })();
    return () => {};
  }, []);
  return { todo, loading };
}
