import Contact from "../contact/contact";
import css from "./contactList.module.css";

const ContactList = ({contacts, onDeleteContact}) => {
    return(
        <div>
            <ul className={css.contactList}>
                {contacts.map((contact) =>
                (<li className={css.listItem} key={contact.id}>
                    <Contact onDeleteContact={onDeleteContact} info={contact}/>
                </li>)
)}
            </ul>
        </div>
    )

}
export default ContactList;