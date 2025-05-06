import { Search } from 'lucide-react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSearchCrypto } from '../hooks/useCryptoData'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'
import  Input  from './ui/input'
import  Button  from './ui/button'

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState('')
  const { data: searchResults } = useSearchCrypto(searchQuery)
  const navigate = useNavigate()

  const handleSelectCrypto = (id) => {
    navigate(`/crypto/${id}`)
    setSearchQuery('')
  }

  return (
    <header className="sticky top-0 z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="relative w-full max-w-md">
          <DropdownMenu open={searchQuery.length > 0}>
            <DropdownMenuTrigger asChild>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  className="w-full pl-10"
                  placeholder="Search cryptocurrencies..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[var(--radix-dropdown-menu-trigger-width)] p-2">
              {searchResults?.map((coin) => (
                <DropdownMenuItem
                  key={coin.id}
                  className="cursor-pointer"
                  onClick={() => handleSelectCrypto(coin.id)}
                >
                  <div className="flex items-center gap-2">
                    <img src={coin.thumb} alt={coin.name} className="h-6 w-6" />
                    <span>{coin.name} ({coin.symbol})</span>
                  </div>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <Button variant="outline">Connect Wallet</Button>
      </div>
    </header>
  )
}