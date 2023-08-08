import { useAuth } from '../../context/AuthContext'
import { auth } from '../../firebase'
import Navbar from './Navbar'
import avatar from '../../assets/avatar.png'

const Dashboard = () => {
    const { user } = useAuth()
    return (
      <>
        <Navbar />
        <section className="bg-slate-600 w-full flex flex-col md:flex-row justify-between items-center p-8">
          <img
            src={user.photoURL || avatar}
            alt="user"
            className="w-[8rem] rounded-full"
          />
          <div className="flex flex-col w-[50%]">
            <div className="text-3xl text-white font-bold">
              {user.displayName}
            </div>
            <div className="text-lg text-teal-600">{user.email}</div>
          </div>
          <div className="flex">
            <button className="bg-white text-slate-900 px-4 h-[3rem] rounded-lg">
              ⚙️ Edit Profile
            </button>
            <button
              className="bg-white text-slate-900 px-4 h-[3rem] rounded-lg ml-4"
              onClick={() => auth.signOut()}
            >
              📤 Sign Out
            </button>
          </div>
        </section>
      </>
    );
}

export default Dashboard