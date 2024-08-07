import { useState } from 'react'
import { useLogin } from '../hooks/useLogin'
import { Link } from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {login, error, isLoading} = useLogin()

    const handleSubmit = async (e) => {
        e.preventDefault()

        await login(email, password)
    }

    return (
        
        <div className="background-container">
        <form className="login" onSubmit={handleSubmit}>
            <h3>Welcome back to Birdr.</h3>
            <p> Your comprehensive bird log and North American/European database! Sign into your account for full access.</p>
            <h4>Sign into your account for full access.</h4>
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

            <button disabled={isLoading}>Submit</button>
            {error && <div className="error">{error}</div>}
        </form>
        <div className="login-link">
                <h4>Don't have a Birdr account? <Link to="/signup">Create an account</Link>.</h4>
        </div>
        <div className="login-link">
                <h4>You can also <Link to="/search">search for bird information in our database</Link> without an account.</h4>
            </div>
        </div>
    )
}

export default Login