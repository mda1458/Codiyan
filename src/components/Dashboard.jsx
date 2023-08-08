import { useAuth } from '../context/AuthContext'
import { auth } from '../firebase'

const Dashboard = () => {
    const { user } = useAuth()
    return (
      <>
        <div className="text-5xl">
            Welcome {user.displayName}
        </div>
        {/* LOGOUT */}
        <button
          className="bg-slate-900 text-white rounded-xl p-4"
          onClick={() => {
            auth.signOut();
          }}
        >
          Logout
        </button>
      </>
    )
}

export default Dashboard