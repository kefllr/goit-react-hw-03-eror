import css from './contact.module.css'
const Contact = ({info, onDeleteContact}) =>{
    return(
        <div className={css.userBox}>
            <ul className={css.userContact}>
                <li>{info.name}</li>
                <li>{info.number}</li>
            </ul>
            <button onClick={()=>{onDeleteContact(info.id)}} type="sumbit">Delete</button>
        </div>
        
    );

}
export default Contact;