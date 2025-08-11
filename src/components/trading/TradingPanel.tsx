import React, { useState } from 'react';
import { clsx } from 'clsx';

export const TradingPanel: React.FC = () => {
  const [orderType, setOrderType] = useState<'isolated' | 'hedge'>('isolated');
  const [tradeDirection, setTradeDirection] = useState<'open' | 'close'>('open');
  const [marketType, setMarketType] = useState<'market' | 'limit'>('limit');
  const [price, setPrice] = useState('1245689');
  const [amount, setAmount] = useState('0.00');
  const [percentage, setPercentage] = useState(50);
  const [tpslEnabled, setTpslEnabled] = useState(false);

  return (
    <div className="h-full bg-[#111111] rounded border border-gray-800 flex flex-col overflow-hidden">
      <div className="p-2 space-y-1.5 flex-1 overflow-auto no-scrollbar">
        {/* Order Type Tabs */}
        <div className="flex gap-1">
          <button
            onClick={() => setOrderType('isolated')}
            className={clsx(
              'flex-1 py-1 px-2 rounded text-[10px] font-medium transition-colors',
              orderType === 'isolated'
                ? 'bg-white text-black'
                : 'bg-gray-800 text-gray-400'
            )}
          >
            Isolated
          </button>
          <button
            onClick={() => setOrderType('hedge')}
            className={clsx(
              'flex-1 py-1 px-2 rounded text-[10px] font-medium transition-colors',
              orderType === 'hedge'
                ? 'bg-white text-black'
                : 'bg-gray-800 text-gray-400'
            )}
          >
            Hedge
          </button>
        </div>

        {/* Trade Direction Tabs */}
        <div className="flex gap-1">
          <button
            onClick={() => setTradeDirection('open')}
            className={clsx(
              'flex-1 py-1 px-2 rounded text-[10px] font-medium transition-colors',
              tradeDirection === 'open'
                ? 'bg-cyan-500 text-black'
                : 'bg-gray-800 text-gray-400'
            )}
          >
            Open
          </button>
          <button
            onClick={() => setTradeDirection('close')}
            className={clsx(
              'flex-1 py-1 px-2 rounded text-[10px] font-medium transition-colors',
              tradeDirection === 'close'
                ? 'bg-cyan-500 text-black'
                : 'bg-gray-800 text-gray-400'
            )}
          >
            Close
          </button>
        </div>

    {/* Market / Limit and leverage */}
        <div className="flex gap-1">
          <button
            onClick={() => setMarketType('market')}
            className={clsx(
              'flex-1 py-1 px-2 rounded text-[10px] font-medium transition-colors border',
              marketType === 'market'
                ? 'border-cyan-500 bg-cyan-500/10 text-cyan-400'
                : 'border-gray-700 bg-gray-800 text-gray-400'
            )}
          >
            Market
          </button>
          <button
            onClick={() => setMarketType('limit')}
            className={clsx(
              'flex-1 py-1 px-2 rounded text-[10px] font-medium transition-colors border relative',
              marketType === 'limit'
                ? 'border-cyan-500 bg-cyan-500/10 text-cyan-400'
                : 'border-gray-700 bg-gray-800 text-gray-400'
            )}
          >
            Limit
      <span className="absolute -top-0.5 -right-0.5 bg-cyan-500 text-black text-[8px] px-1 rounded font-extrabold">
              2x
            </span>
          </button>
        </div>

        {/* Price Input */}
        <div>
          <label className="block text-[10px] text-gray-400 mb-0.5">Price</label>
          <div className="relative">
            <input
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full bg-gray-800 border border-gray-700 rounded px-2 py-1 text-white text-[10px] pr-10"
            />
            <div className="absolute right-2 top-1/2 -translate-y-1/2">
              <span className="text-[9px] text-gray-400">USDT</span>
            </div>
          </div>
          <button className="mt-0.5 text-[9px] text-cyan-400 hover:text-cyan-300">Mid</button>
        </div>

        {/* Amount Input */}
        <div>
          <label className="block text-[10px] text-gray-400 mb-0.5">Amount</label>
          <div className="relative">
            <input
              type="text"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="0.00"
              className="w-full bg-gray-800 border border-gray-700 rounded px-2 py-1 text-white text-[10px] pr-10"
            />
            <div className="absolute right-2 top-1/2 -translate-y-1/2">
              <span className="text-[9px] text-gray-400">APT</span>
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
              className="w-full h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, #06b6d4 0%, #06b6d4 ${percentage}%, #374151 ${percentage}%, #374151 100%)`
              }}
            />
            <div className="flex justify-between mt-0.5">
              <span className="text-[9px] text-gray-500">0</span>
              <span className="text-[9px] text-gray-400">{percentage}%</span>
            </div>
          </div>
        </div>

  {/* Buy/Sell Info */}
        <div className="space-y-0.5">
          <div className="flex justify-between text-[10px]">
            <span className="text-gray-400">Buy</span>
            <span className="text-white">0.049 BTC</span>
          </div>
          <div className="flex justify-between text-[10px]">
            <span className="text-gray-400">Sell</span>
            <span className="text-white">0.049 BTC</span>
          </div>
        </div>

        {/* TP/SL Options */}
        <div className="flex items-center gap-2">
          <label className="flex items-center gap-1 cursor-pointer">
            <input
              type="checkbox"
              checked={tpslEnabled}
              onChange={(e) => setTpslEnabled(e.target.checked)}
              className="w-2.5 h-2.5 text-cyan-500 bg-gray-800 border-gray-600 rounded focus:ring-cyan-500"
            />
            <span className="text-[10px] text-gray-300">TP/SL</span>
          </label>
          <button className="text-[10px] text-gray-400 hover:text-gray-300">Long</button>
          <button className="text-[10px] text-gray-400 hover:text-gray-300">Short</button>
        </div>

  {/* Sign In Button */}
  <button className="w-full bg-cyan-500 text-black py-1.5 rounded font-semibold hover:bg-cyan-400 transition-colors text-[10px]">
          Sign in
        </button>

        {/* Account Overview */}
        <div className="pt-1 border-t border-gray-800 space-y-0.5">
          <h4 className="text-white text-[9px] font-medium">Account Overview</h4>
          <div className="flex justify-between text-[8px]">
            <span className="text-gray-400">Account Equity</span>
            <span className="text-white">$0.00</span>
          </div>
          <div className="flex justify-between text-[8px]">
            <span className="text-gray-400">Balance</span>
            <span className="text-white">$0.00</span>
          </div>
          <div className="flex justify-between text-[8px]">
            <span className="text-gray-400">Unrealised PnL</span>
            <span className="text-white">$0.00</span>
          </div>
        </div>

  {/* Trading Info */}
        <div className="pt-1 border-t border-gray-800 space-y-0.5">
          <div className="flex justify-between text-[8px]">
            <span className="text-gray-400">Liq</span>
            <span className="text-white">126.59</span>
          </div>
          <div className="flex justify-between text-[8px]">
            <span className="text-gray-400">Value</span>
            <span className="text-white">$2,409.23</span>
          </div>
          <div className="flex justify-between text-[8px]">
            <span className="text-gray-400">Margin</span>
            <span className="text-white">$120.59</span>
          </div>
          <div className="flex justify-between text-[8px]">
            <span className="text-gray-400">Estimated fees</span>
            <span className="text-white">0.035% / 0.010%</span>
          </div>
        </div>
      </div>
    </div>
  );
};