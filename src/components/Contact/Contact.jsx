import css from "./Contact.module.css";
import { IoPerson } from "react-icons/io5";
import { BsTelephoneFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

export default function Contact({ id, name, number }) {
  const dispatch = useDispatch();

  return (
    <div className={css.item}>
      <div className={css.box}>
        <p>
          <IoPerson /> {name}
        </p>
        <p>
          <BsTelephoneFill /> {number}
        </p>
      </div>
      <button className={css.btn} onClick={() => dispatch(deleteContact(id))}>
        Delete
      </button>
    </div>
  );
}
