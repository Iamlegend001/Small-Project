import { ArrowDown, ArrowUp, Star } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import  {Card}  from '../components/ui/card'
import  {Button}  from '../components/ui/button'
import { Badge } from '../components/ui/badge'; // ✅ Correct for named exports


export default function CryptoCard({ crypto }) {
  const navigate = useNavigate()
  const isPositive = crypto.price_change_percentage_24h >= 0

  return (
    <Card
      className="cursor-pointer transition-all hover:shadow-md"
      onClick={() => navigate(`/crypto/${crypto.id}`)}
    >
      <div className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={crypto.image} alt={crypto.name} className="h-10 w-10" />
            <div>
              <h3 className="font-medium">{crypto.name}</h3>
              <Badge variant="secondary" className="text-xs">
                {crypto.symbol.toUpperCase()}
              </Badge>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-gray-400 hover:text-yellow-400"
            onClick={(e) => {
              e.stopPropagation()
              // Add to watchlist logic
            }}
          >
            <Star className="h-4 w-4" />
          </Button>
        </div>
        <div className="mt-4 flex items-end justify-between">
          <div>
            <p className="text-lg font-semibold">${crypto.current_price.toLocaleString()}</p>
            <div
              className={`flex items-center gap-1 text-sm ${
                isPositive ? 'text-green-500' : 'text-red-500'
              }`}
            >
              {isPositive ? (
                <ArrowUp className="h-4 w-4" />
              ) : (
                <ArrowDown className="h-4 w-4" />
              )}
              <span>{Math.abs(crypto.price_change_percentage_24h).toFixed(2)}%</span>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            MCap: ${crypto.market_cap.toLocaleString()}
          </p>
        </div>
      </div>
    </Card>
  )
}