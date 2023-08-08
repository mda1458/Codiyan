import { useAuth } from '../context/AuthContext'

const Dashboard = () => {
    const { user } = useAuth()
    return (
        <div className="text-5xl">
            Welcome {user.displayName}
        </div>
    )
}

export default Dashboard