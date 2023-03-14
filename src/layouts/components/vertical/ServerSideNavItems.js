// ** React Imports
import { useEffect, useState } from 'react'

// ** Axios Import
import axios from 'axios'

//현재 사용 안함 , UserLayout에서 구분해야함

const ServerSideNavItems = () => {
  // ** State
  const [menuItems, setMenuItems] = useState([])
  useEffect(() => {
    axios.get('/api/vertical-nav/data').then(response => {
      console.log(response)
      const menuArray = response.data
      setMenuItems(menuArray)
    })
  }, [])

  return { menuItems }
}

export default ServerSideNavItems
