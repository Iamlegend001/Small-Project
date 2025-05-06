import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import DashboardPage from './pages/DashboardPage'
import CryptoDetailPage from './pages/CryptoDetailPage'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-gray-100">
        <Sidebar />
        <div className="flex-1">
          <Navbar />
          <div className="p-6">
            <Routes>
              <Route path="/" element={<DashboardPage />} />
              <Route path="/crypto/:id" element={<CryptoDetailPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App