import { ArrowDown, ArrowUp, BarChart2, Link, Star } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function CryptoDetails({ crypto }) {
  const navigate = useNavigate()
  const isPositive = crypto.market_data.price_change_percentage_24h >= 0

  return (
    <div className="rounded-lg border bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-start justify-between">
        <div className="flex items-center gap-4">
          <img src={crypto.image.large} alt={crypto.name} className="h-16 w-16" />
          <div>
            <h1 className="text-2xl font-bold">{crypto.name}</h1>
            <p className="text-gray-500">{crypto.symbol.toUpperCase()}</p>
          </div>
        </div>
        <button className="rounded-full p-2 text-gray-400 hover:bg-gray-100 hover:text-yellow-400">
          <Star className="h-6 w-6" />
        </button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-4">
          <div>
            <h2 className="text-xl font-semibold">
              ${crypto.market_data.current_price.usd.toLocaleString()}
            </h2>
            <div
              className={`flex items-center gap-1 ${
                isPositive ? 'text-green-500' : 'text-red-500'
              }`}
            >
              {isPositive ? (
                <ArrowUp className="h-5 w-5" />
              ) : (
                <ArrowDown className="h-5 w-5" />
              )}
              <span>
                {Math.abs(crypto.market_data.price_change_percentage_24h).toFixed(2)}% (24h)
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg border p-4">
              <p className="text-sm text-gray-500">Market Cap</p>
              <p className="font-medium">
                ${crypto.market_data.market_cap.usd.toLocaleString()}
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="text-sm text-gray-500">24h Trading Volume</p>
              <p className="font-medium">
                ${crypto.market_data.total_volume.usd.toLocaleString()}
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="text-sm text-gray-500">Circulating Supply</p>
              <p className="font-medium">
                {crypto.market_data.circulating_supply.toLocaleString()} {crypto.symbol.toUpperCase()}
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="text-sm text-gray-500">All Time High</p>
              <p className="font-medium">
                ${crypto.market_data.ath.usd.toLocaleString()}
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <BarChart2 className="h-5 w-5 text-gray-400" />
            <h3 className="font-medium">Price Change</h3>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <div className="rounded-lg border p-3 text-center">
              <p className="text-sm text-gray-500">1h</p>
              <p
                className={`font-medium ${
                  crypto.market_data.price_change_percentage_1h_in_currency.usd >= 0
                    ? 'text-green-500'
                    : 'text-red-500'
                }`}
              >
                {crypto.market_data.price_change_percentage_1h_in_currency.usd.toFixed(2)}%
              </p>
            </div>
            <div className="rounded-lg border p-3 text-center">
              <p className="text-sm text-gray-500">24h</p>
              <p
                className={`font-medium ${
                  crypto.market_data.price_change_percentage_24h_in_currency.usd >= 0
                    ? 'text-green-500'
                    : 'text-red-500'
                }`}
              >
                {crypto.market_data.price_change_percentage_24h_in_currency.usd.toFixed(2)}%
              </p>
            </div>
            <div className="rounded-lg border p-3 text-center">
              <p className="text-sm text-gray-500">7d</p>
              <p
                className={`font-medium ${
                  crypto.market_data.price_change_percentage_7d_in_currency.usd >= 0
                    ? 'text-green-500'
                    : 'text-red-500'
                }`}
              >
                {crypto.market_data.price_change_percentage_7d_in_currency.usd.toFixed(2)}%
              </p>
            </div>
          </div>

          {crypto.links.homepage[0] && (
            <div className="flex items-center gap-2">
              <Link className="h-5 w-5 text-gray-400" />
              <a
                href={crypto.links.homepage[0]}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Official Website
              </a>
            </div>
          )}

          <div className="pt-4">
            <h3 className="mb-2 font-medium">About {crypto.name}</h3>
            <p className="text-gray-600">
              {crypto.description.en.length > 300
                ? `${crypto.description.en.substring(0, 300)}...`
                : crypto.description.en}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}