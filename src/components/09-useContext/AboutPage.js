import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const AboutPage = () => {

    const { user, setUser } = useContext(UserContext)

    const handleBtn = () => {
        setUser({})
    }


    return (
        <div>
            <h1>About Page</h1>
            <hr/>

            <button
              className="btn btn-primary"
              onClick={handleBtn}
              >
                Logout
            </button>

            <pre>
                {JSON.stringify(user, null, 3)}
            </pre>

        </div>
    )
}
