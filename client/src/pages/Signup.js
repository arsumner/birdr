import { useState } from 'react'
import { useSignup } from '../hooks/useSignup'
import { Link } from 'react-router-dom'


const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {signup, error, isLoading} = useSignup()

    const handleSubmit = async (e) => {
        e.preventDefault()

        await signup(email, password)
    }

    return (
        <div className='background-container'>
        <form className="login" onSubmit={handleSubmit}>
            <h3>Sign up for a Birdr account.</h3>
            <p>Accounts are free and allow you to create and access your own personal bird log.</p>
            <div className='login-form-labels'>
            <label>Email </label>
            <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
            />
            <label>Password </label>
            <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            />
            </div>
            <button disabled={isLoading}>Register for an account</button>
            {error && <div className="error">{error}</div>}
        </form>
        <div className="login-link">
                <h4>Already have a Birdr account? <Link to="/login">Log in here</Link>.</h4>
        </div>
        <div className="login-link">
                <h4>You can also <Link to="/search">search for bird information in our database</Link> without an account.</h4>
        </div>
        </div>
    )
}

export default Signup