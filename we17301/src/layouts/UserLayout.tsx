import Header from './UserHeader'
import React from 'react'
import Footer from './UserFooter'
import { Outlet } from 'react-router-dom'

type Props = {}

const UserLayout = (props: Props) => {
  return (
    <div>
        <Header/>
        <body>
            <Outlet/>
        </body>
        <Footer/>
    </div>
  )
}

export default UserLayout