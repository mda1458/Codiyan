import { memo, useState } from "react"
import { Link } from "react-router-dom"
import { useAuth } from "../../context/AuthContext"
import { auth } from "../../firebase"

const Navbar = () => {
    const { user } = useAuth()
    const [userOpen, setUserOpen] = useState(false)

  return (
    <nav className="flex items-center justify-between flex-wrap bg-slate-900 p-6">
        {/* logo */}
        <div className="flex items-center flex-shrink-0 text-white mr-6">
            <span className="font-semibold text-xl tracking-tight">Codiyan</span>
        </div>
        {/* links */}
        <div className="hidden w-[60%] justify-evenly lg:flex">
            <Link to="/" className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-purple-600 hover:border-purple-600">
                Dashboard
            </Link>
            <Link to="#" className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-purple-600 hover:border-purple-600">
                Lists
            </Link>
            <Link to="#" className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-purple-600 hover:border-purple-600">
                WorkFlows
            </Link>
            <Link to="#" className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-purple-600 hover:border-purple-600">
                Forums
            </Link>
        </div>
        {/* user */}
        <div className="flex items-center">
            <div className="flex items-center">
                <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-purple-600 hover:border-purple-600" onClick={() => setUserOpen(!userOpen)}>
                    <svg className="fill-current h-4 w-4" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                        <path fillRule="evenodd" d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523
                        0 10 0zm0 18a8 8 0 100-16 8 8 0 000 16z"/>
                    </svg>
                    <span className="ml-2">{user.displayName}</span>
                </button>
                {userOpen && (
                    <div className="absolute right-4 top-20 py-2 w-48 bg-white rounded-lg shadow-xl">
                        <Link to="#" className="block px-4 py-2 text-gray-800 hover:bg-purple-500 hover:text-white">Account settings</Link>
                        <Link to="#" className="block px-4 py-2 text-gray-800 hover:bg-purple-500 hover:text-white">Support</Link>
                        <div onClick={
                            () => {
                                auth.signOut();
                            }
                        } className="cursor-pointer block px-4 py-2 text-gray-800 hover:bg-purple-500 hover:text-white">Sign out</div>
                    </div>
                )}
            </div>
        </div>
    </nav>


  )
}

export default memo(Navbar)