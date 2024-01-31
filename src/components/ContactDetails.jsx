import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getOneTodo } from "../store/todoSlice";

const ContactDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { oneTodo } = useSelector((state) => state.todos1);
  console.log(oneTodo);
  useEffect(() => {
    dispatch(getOneTodo(id));
  }, []);
  return (
    <section>
      <Link className="books" to="/books">
        <h1>Books /</h1>
      </Link>

      {oneTodo && (
        <div className="item-details">
          <img src={oneTodo.img} alt="" />
          <div>
            <h2>{oneTodo.name}</h2>
            <h5>{oneTodo.phone}</h5>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              cumque sequi expedita officiis, dolorum quaerat repudiandae libero
              aspernatur voluptas porro doloribus dolorem perspiciatis. Sit
              animi illum numquam quod veritatis assumenda.
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default ContactDetails;
