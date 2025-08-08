import React, { useState } from 'react';
import { clsx } from 'clsx';
import { ChevronDown, Search } from 'lucide-react';
import { Input } from '../ui/Input';

interface Token {
  symbol: string;
  name: string;
  icon: string;
  balance?: string;
  price?: number;
}

interface TokenSelectorProps {
  selectedToken: Token | null;
  onSelectToken: (token: Token) => void;
  label?: string;
}

const tokens: Token[] = [
  { symbol: 'ETH', name: 'Ethereum', icon: '⟠', balance: '0.00' },
  { symbol: 'BTC', name: 'Bitcoin', icon: '₿', balance: '0.00' },
  { symbol: 'BNB', name: 'BNB', icon: '🟡', balance: '0.00' },
  { symbol: 'MATIC', name: 'Polygon', icon: '🟣', balance: '0.00' },
  { symbol: 'AVAX', name: 'Avalanche', icon: '🔺', balance: '0.00' },
  { symbol: 'SOL', name: 'Solana', icon: '◉', balance: '0.00' },
  { symbol: 'APT', name: 'Aptos', icon: '🔷', balance: '0.00' },
  { symbol: 'SUI', name: 'Sui', icon: '💧', balance: '0.00' },
];

export const TokenSelector: React.FC<TokenSelectorProps> = ({
  selectedToken,
  onSelectToken,
  label,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTokens = tokens.filter(
    token =>
      token.symbol.toLowerCase().includes(searchQuery.toLowerCase()) ||
      token.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="relative">
      {label && (
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          {label}
        </label>
      )}
      
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={clsx(
          'flex items-center justify-between w-full px-4 py-3 rounded-lg',
          'bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-dark-border',
          'hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors',
          'focus:outline-none focus:ring-2 focus:ring-primary'
        )}
      >
        <div className="flex items-center gap-2">
          {selectedToken ? (
            <>
              <span className="text-2xl">{selectedToken.icon}</span>
              <div className="text-left">
                <div className="font-semibold text-gray-900 dark:text-white">
                  {selectedToken.symbol}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  on Chain
                </div>
              </div>
            </>
          ) : (
            <span className="text-gray-500 dark:text-gray-400">Select token</span>
          )}
        </div>
        <ChevronDown className={clsx(
          'h-5 w-5 text-gray-500 transition-transform',
          isOpen && 'rotate-180'
        )} />
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute z-50 mt-2 w-full bg-white dark:bg-dark-card rounded-xl border border-gray-200 dark:border-dark-border shadow-xl">
            <div className="p-4">
              <Input
                placeholder="Search token..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                leftElement={<Search className="h-4 w-4 text-gray-400" />}
              />
            </div>
            <div className="max-h-64 overflow-y-auto">
              {filteredTokens.map((token) => (
                <button
                  key={token.symbol}
                  onClick={() => {
                    onSelectToken(token);
                    setIsOpen(false);
                    setSearchQuery('');
                  }}
                  className={clsx(
                    'w-full px-4 py-3 flex items-center justify-between',
                    'hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors',
                    selectedToken?.symbol === token.symbol && 'bg-gray-50 dark:bg-gray-800'
                  )}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{token.icon}</span>
                    <div className="text-left">
                      <div className="font-medium text-gray-900 dark:text-white">
                        {token.symbol}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {token.name}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-gray-900 dark:text-white">
                      {token.balance}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      Balance
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};