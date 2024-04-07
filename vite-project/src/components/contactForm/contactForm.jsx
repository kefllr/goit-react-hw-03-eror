import { Formik, Form, Field, ErrorMessage } from 'formik';
import { FORM_INITIAL_VALUES } from '../const';
import { phoneRegExp } from '../const';
import * as Yup from 'yup'
import css from "./contactForm.module.css";


const ContactForm = ({ onAddContact }) =>{
    const handleSubmit = (values, actions) => {
        onAddContact(values);
        actions.resetForm();
      };
    const contactFormSchema = Yup.object({
        name: Yup.string()
                    .required()
                    .min(2, "Too Short!")
                    .max(40, "Too Long!"),
        number: Yup.string()
                    .required()
                    .matches(phoneRegExp, "Phone number is not valid")
                    .min(2, "Too Short!")
                    .max(20, "Too Long!")   
})

    return(
        <Formik initialValues={FORM_INITIAL_VALUES}
                validationSchema={contactFormSchema}
                onSubmit={handleSubmit} >
            <Form className={css.contactForm}>
               
                <label className={css.formItem}>
                    <span className={css.inputName}>Name</span>
                    <Field
                        className={css.formInput}
                        type="text"
                        name = "name" 
                        placeholder='Ryan Gosling' />
                    <ErrorMessage 
                        className={css.formErr}
                        name="name"
                        component="p"/>
                </label>

                <label className={css.formItem}>
                    <span className={css.inputName}>Number</span>
                    <Field
                        className={css.formInput} 
                        type="tel" 
                        name = "number" 
                        placeholder='+123-45-67'/>
                    <ErrorMessage className={css.formErr} name="number" component="p"/>
                </label>
                 <button className={css.formBtn} type='submit'> Add Contact</button>
            </Form>
        </Formik>
    );
}

export default ContactForm;