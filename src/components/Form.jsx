import {useState} from 'react'
import {Form, Formik, Field} from 'formik'

const FormAdd = () => {

    const [name, setName] = useState('')

    return (
        <div className='bg-zinc-700 mt-10 px-5 py-10 rounded-md shadow-md md:w-2/4 mx-auto'>
            <h1 className='text-gray-50 font-bold text-xl uppercase text-center'>Add a Client</h1>
            <Formik>
                <Form>
                    <div>
                        <label 
                            htmlFor="name"
                            className="text-gray-50 text-xl"
                        >Name</label>
                        <Field 
                            id="name"
                            type="text"
                            className="mt-2 w-full bg-zinc-500 rounded-sm"
                            value={name}
                            onChange={e=>setName(e.target.value)}
                        />
                    </div>
                </Form>
            </Formik>
        </div>
    )
}

export default FormAdd
