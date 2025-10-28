import { AppRouter } from './routes/appRouter'
import './App.css'
import { Link } from 'react-router-dom'

function App() {
  return (
    <>
       <nav>
        <Link to={'/home'}>Home</Link>
        <Link to={'/login'}>Login</Link>
        <Link to={'/dashboard-admin'}>Dashboard Admin</Link>
        <Link to={'/dashboard-principal'}>Dashboard Principal</Link>
        <Link to={'/products'}>Products</Link>
      </nav>
      <AppRouter />
    </>
  )
}

export default App
