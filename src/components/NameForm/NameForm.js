import { Formik, Field, Form } from 'formik'
import { nanoid } from 'nanoid'


export const NameForm = ({pushName}) => {
    return <Formik
        initialValues={{ name: '' }}
        onSubmit={value => { let contactObj = { name: value.name, id: nanoid(), phone: value.number }; console.log(contactObj); return pushName(contactObj)  }}
    >
        <Form>
            <label> Name
                <Field name="name" placeholder="Name"/>
            </label>

             <label> Number
                <Field name="number" placeholder="Number"/>
            </label>

         
            <button  type="submit">Add contact</button>
        </Form>
    </Formik>
    
}
