import { useState, useEffect } from 'react'
import { getAuth } from 'firebase/auth'
function Profile() {
  const auth = getAuth()
  const [user, setUser] = useState(null)
  const [formData, setFormData] = useState({
      
  })

  useEffect(() => {
    setUser(auth.currentUser)
  }, [])

  return user ? <h1>{user.email}</h1> : <h1>Not logged in</h1>
}

export default Profile
