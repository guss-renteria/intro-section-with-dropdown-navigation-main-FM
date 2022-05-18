import { useRef, useState } from 'react'

import './header.style.scss'

import icon_arrow_down from '../../images/icon-arrow-down.svg'
import icon_todo from '../../images/icon-todo.svg'
import icon_calendar from '../../images/icon-calendar.svg'
import icon_reminders from '../../images/icon-reminders.svg'
import icon_plannings from '../../images/icon-planning.svg'

const Header = () => {
  const [state, setState] = useState(false)
  const items = useRef()

  const handleItem = id => {
    items.current?.children[id].classList.toggle('active')
  }

  // * return
  return (
    <div className={`header component${state ? ' active' : ''}`}>
      <h1>snap</h1>
      <button onClick={() =>  setState(!state)}></button>

      <div className='menu'>
        <div className='menu-container'>

          <nav className='items' ref={ items }>
            <div className='item' onClick={ () => handleItem(0) }>
              Features
              <img src={ icon_arrow_down } alt='icon arrow up' />
              <ul className='subitems' onClick={e => e.stopPropagation()}>
                <li className='subitem'><img src={ icon_todo } alt='todo list'/>Todo List</li>
                <li className='subitem'><img src={ icon_calendar } alt='calendar'/>Calendar</li>
                <li className='subitem'><img src={ icon_reminders } alt='reminders'/>Reminders</li>
                <li className='subitem'><img src={ icon_plannings } alt='planning'/>Planning</li>
              </ul>
            </div>
            <div className='item' onClick={ () => handleItem(1) }>
              Company
              <img src={ icon_arrow_down } alt='icon arrow up' />
              <ul className='subitems' onClick={e => e.stopPropagation()}>
                <li className='subitem'>History</li>
                <li className='subitem'>Our Team</li>
                <li className='subitem'>Blog</li>
              </ul>
            </div>
            <div className='item'>
              Careers
            </div>
            <div className='item'>
              About
            </div>
          </nav>

          <div className='sessions'>
            <div className='session'>Login</div>
            <div className='session confined'>Register</div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Header
