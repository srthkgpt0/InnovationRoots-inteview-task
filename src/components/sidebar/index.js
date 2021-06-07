import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/sidebar.css'
import { withRouter } from 'react-router'
import { connect, useSelector } from 'react-redux'

import { item as sidebarJSON } from '../../utilities/sidebar'

const Sidebar = ({ match }) => {
  const path = match.path
  const userType = useSelector((state) => state.auth.userData.userType)
  return (
    <>
      <aside className='c-sidemenu' id='sidemenu'>
        <div className='sidebar'>
          <ul id='sideSubMenu' className='nav flex-column'>
            {sidebarJSON.map((data, index) => {
              if (data.userTypes.includes(userType) && data.addInSideBar) {
                if (userType === 'admin') {
                  return (
                    <li key={index}>
                      <Link
                        className='nav-link nav__link ripple-effect'
                        to={data.endPoint}
                      >
                        <span className='nav__icon'>
                          <i className={data.icon}></i>
                        </span>
                        <span className='nav__title'>{data.title}</span>
                      </Link>
                    </li>
                  )
                } else {
                  return (
                    <li key={index}>
                      <Link
                        className='nav-link nav__link ripple-effect'
                        to={data.endPoint}
                      >
                        <span className='nav__icon'>
                          <i className={data.icon}></i>
                        </span>
                        <span className='nav__title'>{data.title}</span>
                      </Link>
                    </li>
                  )
                }
              }
            })}
          </ul>
        </div>
      </aside>
    </>
  )
}

export default withRouter(Sidebar)
