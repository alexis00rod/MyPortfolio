import { Link, useLocation } from 'react-router-dom'
import photo from '../assets/photo.png'

export const Sidebar = () => {
  const {pathname} = useLocation()

  return (
    <div className='pl-10 pt-10 pb-10 w-1/4 flex-none'>
      <div className='w-full h-full px-2 py-2 flex flex-col justify-center gap-4 bg-indigo-800/50 rounded-lg shadow-2xl'>
        <div className='px-2 py-2 flex justify-center'>
          <img src={photo} alt="Profile Photo" className='w-52 h-52 object-cover rounded-full' />
        </div>
        <div className="w-full px-2 py-2 flex flex-col items-center">
          <span className='mb-1 text-lg'>Hi!</span>
          <h2 className='mb-2 text-3xl'>I'm Alexis Ruiz Diaz</h2>
          <h3 className='text-2xl'>Frontend Developer</h3>
        </div>
        <div className='px-2 py-2'>
          {pathname === "/"
          ? <Link to='/about-me' className='btn btn-primary mx-auto'>About Me</Link>
          : <Link to='/' className='btn btn-primary mx-auto'>My Projects</Link>}
        </div>
        <div className='px-2 py-2 flex justify-center gap-4'>
          <a href="" className='btn btn-toggle'><i class="fa-brands fa-linkedin-in"></i></a>
          <a href="" className='btn btn-toggle'><i class="fa-brands fa-github"></i></a>
          <a href="" className='btn btn-toggle'><i class="fa-solid fa-envelope"></i></a>
        </div>
      </div>
    </div>
  )
}
