import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const API_URL = import.meta.env.VITE_COINGECKO_API_URL

export const useCryptoData = (limit = 10) => {
  return useQuery({
    queryKey: ['cryptoData', limit],
    queryFn: async () => {
      const { data } = await axios.get(
        `${API_URL}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${limit}&page=1&sparkline=false`
      )
      return data
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
  })
}

export const useCryptoDetail = (id) => {
  return useQuery({
    queryKey: ['cryptoDetail', id],
    queryFn: async () => {
      const { data } = await axios.get(
        `${API_URL}/coins/${id}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`
      )
      return data
    },
    enabled: !!id,
  })
}

export const useSearchCrypto = (query) => {
  return useQuery({
    queryKey: ['searchCrypto', query],
    queryFn: async () => {
      if (!query) return []
      const { data } = await axios.get(
        `${API_URL}/search?query=${query}`
      )
      return data.coins
    },
  })
}