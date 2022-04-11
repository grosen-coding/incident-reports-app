import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { FaUser } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { register, reset } from '../features/auth/authSlice'
import Loading from '../components/Loading'


function Register() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    })

    const { name, email, password, password2 } = formData

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {client, isLoading, isError, isSuccess, message} = useSelector(state => state.auth)

    useEffect(() => {
        if(isError) {
            toast.error(message)
        }

        // Redirect when logged in
        if(isSuccess || client) {
            navigate('/')
        }

        dispatch(reset())
    }, [isError, isSuccess, client, message, navigate, dispatch]) 

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    // OnSubmit for Form
    const onSubmit = (e) => {
        e.preventDefault()

        if(password !== password2) {
            toast.error('Sorry, passwords do not match')
        } else {
            const clientData = {
                name,
                email,
                password
            }

            dispatch(register(clientData))
        }
    }

    // Loading spinner
    if(isLoading) {
        return <Loading/> 
    }

    return (

        <>
            <section className="heading">
                <h1>
                    <FaUser /> Register
                </h1>
                <p>Please create an account</p>
            </section>

            <section className="form">
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <input 
                        type="text" 
                        className="form-control" 
                        id='name' name="name" 
                        value={name} 
                        onChange={onChange} 
                        placeholder="Enter your name" 
                        required />
                    </div>
                    <div className="form-group">
                        <input 
                        type="email" 
                        className="form-control" 
                        id='email' name="email" 
                        value={email} 
                        onChange={onChange} 
                        placeholder="Enter your email address" 
                        required />
                    </div>
                    <div className="form-group">
                        <input 
                        type="password" 
                        className="form-control" 
                        id='password' 
                        name="password" 
                        value={password} 
                        onChange={onChange} 
                        placeholder="Enter a password" 
                        required />
                    </div>
                    <div className="form-group">
                        <input 
                        type="password" 
                        className="form-control" 
                        id='password2' 
                        name="password2" 
                        value={password2} 
                        onChange={onChange} 
                        placeholder="Confirm your password" 
                        required />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-block">Submit</button>
                    </div>

                </form>
            </section>
        </>
    )
}

export default Register