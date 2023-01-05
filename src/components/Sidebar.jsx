import { Link } from 'react-router-dom'

export const Sidebar = () => {
  return (
    <div>
      <Link to='/about-me'>About Me</Link>
      <Link to='/'>My Projects</Link>
    </div>
  )
}
