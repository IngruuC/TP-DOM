import type { user } from '../types/user'

interface DashboardProps {
  user: user | null
  onLogout: () => void
}

export const DashboardPrincipal = ({ user, onLogout }: DashboardProps) => {
  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>Bienvenido, {user?.name}</h1>
      <p>Rol: {user?.permissionLevel.join(', ')}</p>
      <button onClick={onLogout}>Cerrar sesión</button>
    </div>
  )
}