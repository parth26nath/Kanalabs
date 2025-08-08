import React, { useState } from 'react';
import { clsx } from 'clsx';
import { Card } from '../ui/Card';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';


export const TradingPanel: React.FC = () => {
  const [orderType, setOrderType] = useState<'isolated' | 'hedge'>('isolated');
  const [tradeDirection, setTradeDirection] = useState<'open' | 'close'>('open');
  const [marketType, setMarketType] = useState<'market' | 'limit'>('market');
  const [price, setPrice] = useState('1245689');
  const [amount, setAmount] = useState('0.00');
  const [percentage, setPercentage] = useState(50);
  const [tpslEnabled, setTpslEnabled] = useState(false);

  return (
    <Card className="h-full p-0">
      {/* Header */}
      <div className="px-4 py-3 border-b border-gray-200 dark:border-dark-border">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-gray-900 dark:text-white">Orderbook</h3>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500 dark:text-gray-400">Profit</span>
            <span className="text-sm font-medium text-gray-900 dark:text-white">0.00 USDT</span>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-4">
        {/* Order Type Tabs */}
        <div className="flex gap-2">
          <button
            onClick={() => setOrderType('isolated')}
            className={clsx(
              'flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-colors',
              orderType === 'isolated'
                ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
            )}
          >
            Isolated
          </button>
          <button
            onClick={() => setOrderType('hedge')}
            className={clsx(
              'flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-colors',
              orderType === 'hedge'
                ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
            )}
          >
            Hedge
          </button>
        </div>

        {/* Trade Direction Tabs */}
        <div className="flex gap-2">
          <button
            onClick={() => setTradeDirection('open')}
            className={clsx(
              'flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-colors',
              tradeDirection === 'open'
                ? 'bg-primary text-white'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
            )}
          >
            Open
          </button>
          <button
            onClick={() => setTradeDirection('close')}
            className={clsx(
              'flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-colors',
              tradeDirection === 'close'
                ? 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white'
                : 'text-gray-400'
            )}
          >
            Close
          </button>
        </div>

        {/* Market Type */}
        <div className="flex gap-2">
          <button
            onClick={() => setMarketType('market')}
            className={clsx(
              'flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-colors border',
              marketType === 'market'
                ? 'border-primary bg-primary/10 text-primary'
                : 'border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400'
            )}
          >
            Market
          </button>
          <button
            onClick={() => setMarketType('limit')}
            className={clsx(
              'flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-colors border relative',
              marketType === 'limit'
                ? 'border-primary bg-primary/10 text-primary'
                : 'border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400'
            )}
          >
            Limit
            <span className="absolute -top-2 -right-2 bg-primary text-white text-xs px-1 rounded">
              2x
            </span>
          </button>
        </div>

        {/* Price Input */}
        <div>
          <label className="block text-sm text-gray-600 dark:text-gray-400 mb-1">
            Price
          </label>
          <div className="relative">
            <Input
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="pr-16"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2">
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">USDT</span>
            </div>
          </div>
          <button className="mt-1 text-xs text-primary hover:text-primary/80">Mid</button>
        </div>

        {/* Amount Input */}
        <div>
          <label className="block text-sm text-gray-600 dark:text-gray-400 mb-1">
            Amount
          </label>
          <div className="relative">
            <Input
              type="text"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="0.00"
              className="pr-16"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2">
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">APT</span>
            </div>
          </div>
        </div>

        {/* Percentage Slider */}
        <div>
          <div className="relative">
            <input
              type="range"
              min="0"
              max="100"
              value={percentage}
              onChange={(e) => setPercentage(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
              style={{
                background: `linear-gradient(to right, #14B8A6 0%, #14B8A6 ${percentage}%, #E5E7EB ${percentage}%, #E5E7EB 100%)`
              }}
            />
            <div className="flex justify-between mt-1">
              <span className="text-xs text-gray-500">0</span>
              <span className="text-xs text-gray-500">{percentage}%</span>
            </div>
          </div>
        </div>

        {/* Buy/Sell Info */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600 dark:text-gray-400">Buy</span>
            <span className="font-medium text-gray-900 dark:text-white">0.049 BTC</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600 dark:text-gray-400">Sell</span>
            <span className="font-medium text-gray-900 dark:text-white">0.049 BTC</span>
          </div>
        </div>

        {/* TP/SL Options */}
        <div className="flex items-center gap-4">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={tpslEnabled}
              onChange={(e) => setTpslEnabled(e.target.checked)}
              className="w-4 h-4 text-primary rounded focus:ring-primary"
            />
            <span className="text-sm text-gray-700 dark:text-gray-300">TP/SL</span>
          </label>
          <button className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
            Long
          </button>
          <button className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
            Short
          </button>
        </div>

        {/* Sign In Button */}
        <Button variant="primary" size="lg" fullWidth className="font-semibold">
          Sign in
        </Button>

        {/* Account Info */}
        <div className="pt-4 border-t border-gray-200 dark:border-dark-border space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600 dark:text-gray-400">Liq</span>
            <span className="font-medium text-gray-900 dark:text-white">126.59</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600 dark:text-gray-400">Value</span>
            <span className="font-medium text-gray-900 dark:text-white">$2,409.23</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600 dark:text-gray-400">Margin</span>
            <span className="font-medium text-gray-900 dark:text-white">$120.59</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600 dark:text-gray-400">Slippage</span>
            <span className="font-medium text-gray-900 dark:text-white">8%</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600 dark:text-gray-400">Estimated fees</span>
            <span className="font-medium text-gray-900 dark:text-white">0.035% / 0.010%</span>
          </div>
        </div>
      </div>
    </Card>
  );
};