import { useParams } from 'react-router-dom'
import { useCryptoDetail } from '../hooks/useCryptoData'
import CryptoDetails from '../components/CryptoDetails'
import {Skeleton}  from '../components/ui/skeleton'
import { ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function CryptoDetailPage() {
  const { id } = useParams()
  const { data: crypto, isLoading } = useCryptoDetail(id)
  const navigate = useNavigate()

  if (isLoading)
    return (
      <div className="space-y-4">
        <Skeleton className="h-10 w-48" />
        <Skeleton className="h-96 w-full" />
      </div>
    )

  return (
    <div className="space-y-4">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-blue-500 hover:text-blue-700"
      >
        <ArrowLeft className="h-5 w-5" />
        <span>Back to Dashboard</span>
      </button>
      {crypto && <CryptoDetails crypto={crypto} />}
    </div>
  )
}