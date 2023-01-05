import { Outlet } from 'react-router-dom'
import { Sidebar } from './index'

export const App = () => {
  return (
    <div className='w-full h-screen flex font-raleway text-white bg-indigo-900'>
      <Sidebar />
      <div className='px-10 py-10'>
        <Outlet />
      </div>
    </div>
  )
}
