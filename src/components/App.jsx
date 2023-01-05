import { Outlet } from 'react-router-dom'
import { Sidebar } from './index'

export const App = () => {
  return (
    <div>
      <Sidebar />
      <Outlet />
    </div>
  )
}
