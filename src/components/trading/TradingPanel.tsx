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
  const [leverage, setLeverage] = useState(2);

  return (
    <div className="h-full bg-[#0a0a0a] rounded-xl border border-gray-800 flex flex-col overflow-hidden shadow-[0_0_0_1px_rgba(31,31,31,0.6)]">
      <div className="p-3 space-y-4 flex-1 overflow-hidden">
        
        {/* Profile Section */}
        <div className="space-y-2.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="text-white text-[13px] font-medium leading-none">Profile 1</span>
              <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-1.5 rounded-md bg-[#181818] border border-gray-600 shadow-[0_0_10px_rgba(156,163,175,0.25)] hover:shadow-[0_0_14px_rgba(156,163,175,0.4)] transition-shadow">
                <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                </svg>
              </button>
              <button className="p-1.5 rounded-md bg-[#181818] border border-gray-600 shadow-[0_0_10px_rgba(156,163,175,0.25)] hover:shadow-[0_0_14px_rgba(156,163,175,0.4)] transition-shadow">
                <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l3-3m0 0l-3-3m3 3H9" />
                </svg>
              </button>
            </div>
          </div>
          <div className="text-gray-400 text-[12px] leading-none">0.00 USDT</div>
        </div>

        {/* Position Mode Selector */}
        <div className="flex gap-2">
          <button
            onClick={() => setOrderType('isolated')}
            className={clsx(
              'flex-1 py-2.5 px-3 rounded-lg text-[13px] font-medium transition-colors border',
              orderType === 'isolated'
                ? 'bg-[#141414] text-white border-gray-600'
                : 'bg-transparent text-gray-400 border-gray-700 hover:border-gray-600'
            )}
          >
            Isolated
          </button>
          <button
            onClick={() => setOrderType('hedge')}
            className={clsx(
              'flex-1 py-2.5 px-3 rounded-lg text-[13px] font-medium transition-colors border',
              orderType === 'hedge'
                ? 'bg-[#141414] text-white border-gray-600'
                : 'bg-transparent text-gray-400 border-gray-700 hover:border-gray-600'
            )}
          >
            Hedge
          </button>
        </div>

        {/* Open/Close Tabs */}
        <div className="relative">
          <div className="flex">
            <button
              onClick={() => setTradeDirection('open')}
              className={clsx(
                'flex-1 py-3 text-[13px] font-medium transition-colors relative',
                tradeDirection === 'open'
                  ? 'text-white'
                  : 'text-gray-400 hover:text-gray-300'
              )}
            >
              Open
              {tradeDirection === 'open' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#3EEAD8] rounded-full" />
              )}
            </button>
            <button
              onClick={() => setTradeDirection('close')}
              className={clsx(
                'flex-1 py-3 text-[13px] font-medium transition-colors relative',
                tradeDirection === 'close'
                  ? 'text-white'
                  : 'text-gray-400 hover:text-gray-300'
              )}
            >
              Close
              {tradeDirection === 'close' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#3EEAD8] rounded-full" />
              )}
            </button>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-800" />
        </div>

        {/* Market/Limit Selector */}
        <div className="flex items-center justify-between">
          <div className="flex">
            <button
              onClick={() => setMarketType('market')}
              className={clsx(
                'px-4 py-2 text-[13px] font-medium transition-colors relative',
                marketType === 'market'
                  ? 'text-white'
                  : 'text-gray-400 hover:text-gray-300'
              )}
            >
              Market
              {marketType === 'market' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#3EEAD8] rounded-full" />
              )}
            </button>
            <button
              onClick={() => setMarketType('limit')}
              className={clsx(
                'px-4 py-2 text-[13px] font-medium transition-colors relative',
                marketType === 'limit'
                  ? 'text-white'
                  : 'text-gray-400 hover:text-gray-300'
              )}
            >
              Limit
              {marketType === 'limit' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#3EEAD8] rounded-full" />
              )}
            </button>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-white text-[13px] font-semibold">{leverage}x</span>
            <button onClick={() => setLeverage((l) => l)} className="px-2 py-1 rounded-md bg-[#121212] border border-gray-700 text-gray-300 hover:text-white">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Price Input */}
        <div className="space-y-2">
          <label className="block text-[11px] text-gray-400">Price</label>
          <div className="relative">
            <input
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full bg-[#0f0f10] border border-gray-800 rounded-xl px-4 py-3 text-white text-[20px] pr-20 focus:border-[#3EEAD8] focus:outline-none shadow-inner shadow-black/40"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-3">
              <span className="text-[#3EEAD8] text-[12px] cursor-pointer hover:text-cyan-300">Mid</span>
              <span className="text-white text-[12px] font-semibold">USDT</span>
            </div>
          </div>
        </div>

        {/* Amount Input */}
        <div className="space-y-2">
          <label className="block text-[11px] text-gray-400">Amount</label>
          <div className="relative">
            <input
              type="text"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="0.00"
              className="w-full bg-[#0f0f10] border border-gray-800 rounded-xl px-4 py-3 text-white text-[20px] pr-20 focus:border-[#3EEAD8] focus:outline-none placeholder-gray-500 shadow-inner shadow-black/40"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1">
              <span className="text-white text-[12px] font-semibold">APT</span>
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
            </div>
          </div>
        </div>

        {/* Percentage Slider */}
        <div className="space-y-3">
          <div className="relative">
            <input
              type="range"
              min="0"
              max="100"
              value={percentage}
              onChange={(e) => setPercentage(Number(e.target.value))}
              className="slider w-full h-[6px] bg-gray-800 rounded-full appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, #22d3ee 0%, #22d3ee ${percentage}%, #374151 ${percentage}%, #374151 100%)`
              }}
            />
            <div className="flex justify-end mt-2">
              <span className="text-gray-400 text-[12px]">{percentage} %</span>
            </div>
          </div>
        </div>

        {/* Buy/Sell Info */}
        <div className="flex justify-between text-[12px]">
          <div className="text-gray-400">
            <span>Buy </span>
            <span className="text-white">0.049 BTC</span>
          </div>
          <div className="text-gray-400">
            <span>Sell </span>
            <span className="text-white">0.049 BTC</span>
          </div>
        </div>

        {/* TP/SL Options */}
        <div className="flex items-center justify-between">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={tpslEnabled}
              onChange={(e) => setTpslEnabled(e.target.checked)}
              className="w-4 h-4 text-[#3EEAD8] bg-[#111111] border-gray-600 rounded focus:ring-[#3EEAD8] focus:ring-2"
            />
            <span className="text-[13px] text-white">TP/SL</span>
          </label>
          <div className="flex gap-3">
            <button className="px-3 py-1.5 rounded-md border border-gray-700 text-[13px] text-gray-300 hover:text-white">Long</button>
            <button className="px-3 py-1.5 rounded-md border border-gray-700 text-[13px] text-gray-300 hover:text-white">Short</button>
          </div>
        </div>

        {/* Swap Now Button (from SwapInterface) */}
        <button
          className="w-full rounded-[20px] py-2 mt-2 border border-[#00d1b2] bg-[#000000] 
                     text-[#19c7b2] font-manrope font-semibold text-lg
                     transition-all duration-200
                     outline-none focus:outline-none"
          style={{
            boxShadow: "0 4px 0 0 #19c7b2 inset",
            letterSpacing: 0,
            transform: "rotate(180deg)",
          }}
        >
          <span style={{ display: "inline-block", transform: "rotate(180deg)", width: "100%" }}>
            Sign in
          </span>
        </button>

        {/* Stats Grid (3 columns: left value, label, right value) */}
        <div className="grid grid-cols-3 gap-y-2 text-center">
          <div className="text-white text-[13px] font-semibold">126.59</div>
          <div className="text-gray-400 text-[12px]">Liq</div>
          <div className="text-white text-[13px] font-semibold">126.59</div>

          <div className="text-white text-[13px] font-semibold">$2,409.23</div>
          <div className="text-gray-400 text-[12px]">Value</div>
          <div className="text-white text-[13px] font-semibold">$2,409.23</div>

          <div className="text-white text-[13px] font-semibold">$120.59</div>
          <div className="text-gray-400 text-[12px]">Margin</div>
          <div className="text-white text-[13px] font-semibold">$120.59</div>

          <div className="text-white text-[13px] font-semibold">8%</div>
          <div className="text-gray-400 text-[12px]">Slippage</div>
          <div className="text-white text-[13px] font-semibold">8%</div>
        </div>

        {/* Estimated Fees */}
        <div className="text-center">
          <div className="text-gray-500 text-[11px]">Estimated fees</div>
          <div className="text-white text-[12px] font-semibold">0.035% / 0.010%</div>
        </div>
      </div>
    </div>
  );
};