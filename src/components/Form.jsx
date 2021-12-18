import {useNavigate} from 'react-router-dom'
import {Form, Formik, Field} from 'formik'
import * as yup from 'yup'
import Error from '../components/Error'

const FormAdd = ({id, client}) => {
    const navigate = useNavigate()

    const NewSchema = yup.object().shape({
        name: yup.string()
                    .min(3, 'Minimun 3 characters')
                    .max(30, 'Maximum 30 characters')
                    .required('Name is required'),
        business: yup.string()
                    .min(3, 'Minimun 3 characters')
                    .max(20, 'Maximum 20 characters')
                    .required('Business is required'),
        email: yup.string()
                    .email('Email must be a valid Email')
                    .required('E-mail is required'),
        phone: yup.number()
                    .min(3, 'Minimun 3 number')
                    .integer('Just numbers')
                    .typeError('Number is not valid'),
        observation: yup.string(),
        createdOn: yup.date().default(function () {
            return new Date();
          }),
    })

    const handleSubmit = async (value) => {
        try {
            if(id){
                // PUT
                const url = `http://localhost:4000/clientes/${id}`
                const response = await fetch(url, {
                    method: "PUT",
                    headers: {
                        'Content-Type': "application/json"
                    },
                    body:JSON.stringify(value)
                })
                await response.json()
            } else {

                // POST
                const url = 'http://localhost:4000/clientes'
                const response = await fetch(url, {
                    method: "POST",
                    headers: {
                        'Content-Type': "application/json"
                    },
                    body:JSON.stringify(value)
                })
                await response.json()
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='bg-zinc-700 mt-10 px-5 py-10 rounded-md shadow-xl md:w-2/4 mx-auto'>
            <h1 className='text-gray-50 font-bold text-xl uppercase text-center'>{id ? 'Edit Client' : 'Add a Client'}</h1>
            <Formik
                initialValues={
                {
                    name: client?.name ?? '',
                    business: client?.business ?? '',
                    email: client?.email ?? '',
                    phone: client?.phone ?? '',
                    observation: client?.observation ?? '',
                } 
                }
                enableReinitialize={true}
                onSubmit={async (values, {resetForm})=>{
                   await handleSubmit(values)
                    resetForm()
                    navigate('/clients')
                }}
                validationSchema={NewSchema}
            >
                {({errors, touched})=> {
                    return (

                    <Form
                        className='mt-10'
                    >
                        <div
                            className='mb-4'
                        >
                            <label 
                                htmlFor="name"
                                className="text-gray-50 text-xl"
                            >Name</label>
                            <Field 
                                id="name"
                                type="text"
                                className="text-zinc-300 p-2 mt-2 w-full bg-zinc-500 rounded-lg"
                                placeholder='Name of the client'
                                name="name"
                            />
                            {errors.name && touched.name && <Error>{errors.name}</Error>}
                        </div>
                        <div
                            className='mb-4'
                        >
                            <label 
                                htmlFor="business"
                                className="text-gray-50 text-xl"
                            >Business</label>
                            <Field 
                                id="business"
                                type="text"
                                className="text-zinc-300 p-2 mt-2 w-full bg-zinc-500 rounded-lg"
                                placeholder='Name of the business'
                                name="business"

                            />
                            {errors.business && touched.business && <Error>{errors.business}</Error>}
                        </div>
                        <div
                            className='mb-4'
                        >
                            <label 
                                htmlFor="email"
                                className="text-gray-50 text-xl"
                            >E-mail</label>
                            <Field 
                                id="email"
                                type="email"
                                className="text-zinc-300 p-2 mt-2 w-full bg-zinc-500 rounded-lg"
                                placeholder='E-mail'
                                name="email"
                            />
                            {errors.email && touched.email && <Error>{errors.email}</Error>}
                        </div>
                        <div
                            className='mb-4'
                        >
                            <label 
                                htmlFor="phone"
                                className="text-gray-50 text-xl"
                            >Phone Number</label>
                            <Field 
                                id="phone"
                                type="tel"
                                className="text-zinc-300 p-2 mt-2 w-full bg-zinc-500 rounded-lg"
                                placeholder='Phone Number'
                                name="phone"

                            />
                            {errors.phone && touched.phone && <Error>{errors.phone}</Error>}  
                        </div>
                        <div
                            className='mb-4'
                        >
                            <label 
                                htmlFor="observation"
                                className="text-gray-50 text-xl"
                            >Observation</label>
                            <Field 
                                as="textarea"
                                id="observation"
                                type="text"
                                className="text-zinc-300 h-40 p-2 mt-2 w-full bg-zinc-500 rounded-lg"
                                placeholder='Observation'
                                name="observation"

                            />
                        </div>
                        <input 
                            type="submit"
                            value={id ? 'Edit' : 'Save'}
                            className="w-full mt-5 bg-zinc-900 text-zinc-300 py-3 rounded-lg font-bold hover:cursor-pointer"
                        />
                    </Form>
                )}}
            </Formik>
        </div>
    )
}

FormAdd.defaultProps = {
    client: {}
}

export default FormAdd
