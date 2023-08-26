import React from 'react'
import AdminHeader from '../../components/AdminHeader/AdminHeader'
import AdminNavBar from '../../components/AdminNavBar/AdminNavBar'
import Footer from '../../components/Footer/Footer'

const PushNotification = () => {
  return (
    <div className='dashboard'>
      <AdminHeader />
      <div className="main">
        <AdminNavBar />
        <div className="bg-light content-section">Push Notification</div>
      </div>
      <Footer />
    </div>
  )
}

export default PushNotification
