import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem, getTodos } from "../store/todoSlice";
import { Link } from "react-router-dom";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [img, setImg] = useState("");
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(addItem({ name, phone, img }));
    setName("");
    setPhone("");
    setImg("");
  };
  return (
    <form className="inp">
      <input
        type="text"
        placeholder="Img url:"
        onChange={(e) => setImg(e.target.value)}
      />
      <input
        type="text"
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Phone"
        onChange={(e) => setPhone(e.target.value)}
      />
      <Link to="/books">
        <button onClick={handleClick}>Add</button>
      </Link>
    </form>
  );
};

export default ContactForm;
