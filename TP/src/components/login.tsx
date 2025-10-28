interface LoginProps {
  onLogin: () => void
}

export const Login = ({ onLogin }: LoginProps) => {
  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h2>Login Page</h2>
      <button onClick={onLogin}>Iniciar sesión</button>
    </div>
  )
}