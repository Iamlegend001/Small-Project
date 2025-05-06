import { useCryptoData } from '../hooks/useCryptoData'
import CryptoCard from '../components/CryptoCard'
import { Skeleton } from '../components/ui/skeleton'

export default function DashboardPage() {
  const { data: cryptos, isLoading, error } = useCryptoData(20)

  if (error) return <div>Error loading data</div>

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Market Overview</h1>
        <p className="text-gray-500">Top cryptocurrencies by market cap</p>
      </div>

      {isLoading ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <Skeleton key={i} className="h-40 rounded-lg" />
          ))}
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {cryptos.map((crypto) => (
            <CryptoCard key={crypto.id} crypto={crypto} />
          ))}
        </div>
      )}
    </div>
  )
}