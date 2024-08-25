import './Login.css'

const Login = () => {
  return (
    <div className="login-container">
    <form className="login-form">
        <h2>LOGIN</h2>
        <p>Ulogujte se na vaš nalog</p>
        <div className="input-group">
            <input 
                type="text" 
                name="username" 
                placeholder="Username"
                required 
            />
        </div>

        <div className="input-group">
            <input 
                type="password" 
                name="password" 
                placeholder="Password" 
                required 
            />
        </div>

        <button type="submit" className="login-button">LOGIN</button>
    </form>
    <p>Zaboravljena lozinka?</p>
    <hr />
    <p className="signup-link">Nemate nalog? Registrujte se</p>
</div>
  )
}

export default Login