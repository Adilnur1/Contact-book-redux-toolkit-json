import React, { useEffect } from "react";
import ContactItem from "./ContactItem";
import { useDispatch, useSelector } from "react-redux";
import { getTodos } from "../store/todoSlice";

const ContactList = () => {
  const todos = useSelector((state) => state.todos1.todos);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTodos());
  }, []);
  return (
    <div className="list">
      {todos.map((elem) => (
        <ContactItem {...elem} key={elem.id} />
      ))}
    </div>
  );
};

export default ContactList;
