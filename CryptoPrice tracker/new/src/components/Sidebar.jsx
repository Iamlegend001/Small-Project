import { Home, LineChart, Star, Wallet } from 'lucide-react'
import { NavLink } from 'react-router-dom'

export default function Sidebar() {
  return (
    <aside className="hidden w-64 border-r bg-white md:block">
      <div className="sticky top-0 h-screen p-4">
        <div className="mb-8 flex items-center gap-2 p-2">
          <div className="h-8 w-8 rounded-lg bg-blue-600"></div>
          <h1 className="text-xl font-bold">Crypto Tracker</h1>
        </div>
        <nav className="space-y-1">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-lg px-4 py-3 transition-colors ${
                isActive ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-100'
              }`
            }
          >
            <Home className="h-5 w-5" />
            <span>Dashboard</span>
          </NavLink>
          <NavLink
            to="/watchlist"
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-lg px-4 py-3 transition-colors ${
                isActive ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-100'
              }`
            }
          >
            <Star className="h-5 w-5" />
            <span>Watchlist</span>
          </NavLink>
          <NavLink
            to="/portfolio"
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-lg px-4 py-3 transition-colors ${
                isActive ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-100'
              }`
            }
          >
            <Wallet className="h-5 w-5" />
            <span>Portfolio</span>
          </NavLink>
          <NavLink
            to="/analytics"
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-lg px-4 py-3 transition-colors ${
                isActive ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-100'
              }`
            }
          >
            <LineChart className="h-5 w-5" />
            <span>Analytics</span>
          </NavLink>
        </nav>
      </div>
    </aside>
  )
}