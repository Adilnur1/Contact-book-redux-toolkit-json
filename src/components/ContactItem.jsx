import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteItem, editItem, getTodos } from "../store/todoSlice";
import { Link } from "react-router-dom";

const ContactItem = ({ name, phone, img, id }) => {
  const [editId, setEditId] = useState(null);
  const [newName, setNewName] = useState(name);
  const [newImg, setNewImg] = useState(img);
  const [newPhone, setNewPhone] = useState(phone);
  const dispatch = useDispatch();
  const handleClickSave = () => {
    dispatch(editItem({ id, newName, newImg, newPhone }));
    setEditId(null);
  };
  useEffect(() => {
    getTodos();
  }, []);
  return (
    <div className="item">
      {editId === id ? (
        <div className="edit-form">
          <input
            className="edit-inp"
            type="text"
            value={newImg}
            onChange={(e) => setNewImg(e.target.value)}
          />
          <input
            className="edit-inp"
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
          <input
            className="edit-inp"
            type="text"
            value={newPhone}
            onChange={(e) => setNewPhone(e.target.value)}
          />
        </div>
      ) : (
        <>
          <img src={img} alt="" />
          <h3>{name}</h3>
          <h4>{phone}</h4>
        </>
      )}
      {editId === id ? (
        <>
          <button onClick={handleClickSave}>Save</button>
        </>
      ) : (
        <>
          <button onClick={() => dispatch(deleteItem(id))}>Delete</button>
          <button onClick={() => setEditId(id)}>Edit</button>
          <Link to={`/details/${id}`}>
            <button>Details</button>
          </Link>
        </>
      )}
    </div>
  );
};

export default ContactItem;
