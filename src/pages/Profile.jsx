import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getAuth, updateProfile } from 'firebase/auth'
import { db } from '../firebase.config'
import { updateDoc, doc } from 'firebase/firestore'
import {toast} from 'react-toastify'
function Profile() {
  const auth = getAuth()
  const navigate = useNavigate()
  const [changeDetails, setChangeDetails] = useState(false)

  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email
  })
  const { name, email } = formData

  const onLogout = () => {
    auth.signOut()
    navigate('/')
  }

  const onSubmit = async () => {
      try {
          if(auth.currentUser.displayName !== name){
            //   update display name in firebase
              await updateProfile(auth.currentUser, {
                  displayName: name
              })

            //   update display name in firestore
            const userRef = doc(db, 'users', auth.currentUser.uid)
            await updateDoc(userRef, {
                name
            })
          }
      } catch (error) {
          console.log(error)
          toast.error('An error occured')
      }
  }
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value
    }))
  }
  return (
    <div className='profile'>
      <header className='profileHeader'>
        <p className='pageHeader'>My Profile</p>
        <button className='logOut' type='button' onClick={onLogout}>
          Logout
        </button>
      </header>
      <main className='profileDetailHeader'>
        <p className='profileDetailsText'>Personal Details</p>
        <p
          className='changePersonalDetails'
          onClick={() => {
            changeDetails && onSubmit()
            setChangeDetails((prevState) => !prevState)
          }}
        >
          {changeDetails ? 'done' : 'change'}
        </p>
        <div className='profileCard'>
          <form>
            <input
              type='text'
              id='name'
              className={!changeDetails ? 'profileName' : 'profileNameActive'}
              disabled={!changeDetails}
              value={name}
              onChange={onChange}
            />
            <input
              type='text'
              id='email'
              className={!changeDetails ? 'profileEmail' : 'profileEmailActive'}
              disabled={!changeDetails}
              value={email}
              onChange={onChange}
            />
          </form>
        </div>
      </main>
    </div>
  )
}

export default Profile
