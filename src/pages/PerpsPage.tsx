import React, { useState } from 'react';
import { OrderBook } from '../components/trading/OrderBook';
import { TradingPanel } from '../components/trading/TradingPanel';
import { clsx } from 'clsx';

export const PerpsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('open-orders');

  const tabs = [
    { id: 'open-orders', label: 'Open Orders' },
    { id: 'positions', label: 'Positions' },
    { id: 'order-history', label: 'Order History' },
    { id: 'trade-history', label: 'Trade History' },
    { id: 'funding-history', label: 'Funding History' },
    { id: 'deposit-withdraw', label: 'Deposit/Withdraw History' },
  ];

  return (
    <div className="min-h-screen bg-[#000000] text-white w-full">
      {/* Main Grid */}
      <div className="grid grid-rows-[1fr_auto] gap-2 p-2 min-h-screen">
        {/* Top Row - 3-Column Grid */}
        <div className="grid grid-cols-[1090px_220px_270px] gap-2 min-h-0">
          {/* Left Column - Top Bar + Chart */}
          <div className="flex flex-col gap-2 min-h-0">
            {/* Top Bar */}
            <div className="flex items-center justify-between bg-[#000000] rounded-lg h-11 min-h-[44px] px-3 border border-gray-800 w-full"
                 style={{ minHeight: 44, height: 44 }}>
              {/* Left - Pair Selector */}
              <div className="flex items-center gap-2 min-w-[150px]">
                {/* Token icon (replace src as needed) */}
                <img
                  src="https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/aptos/info/logo.png"
                  alt="APT"
                  className="w-6 h-6 rounded-full bg-black border border-gray-700"
                  style={{ minWidth: 24, minHeight: 24 }}
                />
                <span className="text-white text-[15px] font-semibold tracking-wide leading-none">APT - PERP</span>
                <svg className="w-4 h-4 text-gray-400 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>

              {/* Right - Market Data */}
              <div className="flex flex-1 justify-end items-center h-full min-w-0">
                <div className="grid grid-cols-6 gap-0 h-full w-full max-w-4xl min-w-[540px]">
                  {/* Mark */}
                  <div className="flex flex-col justify-center px-4 h-full border-l border-t-0 border-b-0 border-r border-gray-800 first:rounded-r-none last:rounded-l-none">
                    <span className="text-gray-400 text-[10px] leading-tight font-normal">Mark</span>
                    <span className="text-white text-[13px] font-bold leading-tight">$7.32</span>
                  </div>
                  {/* 24h Change */}
                  <div className="flex flex-col justify-center px-4 h-full border-l border-t-0 border-b-0 border-r border-gray-800">
                    <span className="text-gray-400 text-[10px] leading-tight font-normal">24h change</span>
                    <span className="text-emerald-400 text-[13px] font-bold leading-tight">+2%</span>
                  </div>
                  {/* Oracle Price */}
                  <div className="flex flex-col justify-center px-4 h-full border-l border-t-0 border-b-0 border-r border-gray-800">
                    <span className="text-gray-400 text-[10px] leading-tight font-normal">Oracle Price</span>
                    <span className="text-white text-[13px] font-bold leading-tight">$11.1</span>
                  </div>
                  {/* 24h Volume */}
                  <div className="flex flex-col justify-center px-4 h-full border-l border-t-0 border-b-0 border-r border-gray-800">
                    <span className="text-gray-400 text-[10px] leading-tight font-normal">24h volume</span>
                    <span className="text-white text-[13px] font-bold leading-tight">245,694,542</span>
                  </div>
                  {/* Funding + Next Funding (combined, center aligned) */}
                  <div className="flex flex-col justify-center items-center px-5 h-full border-l border-t-0 border-b-0 border-r-0 border-gray-800 text-center">
                    <span className="text-gray-400 text-[10px] leading-tight font-normal">Funding / Next</span>
                    <span className="flex items-center justify-center gap-2">
                      <span className="text-yellow-400 text-[13px] font-bold leading-tight">0.012%</span>
                      <span className="text-gray-500 text-[13px] font-bold leading-tight">/</span>
                      <span className="text-white text-[13px] font-bold leading-tight">00:23:34</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Chart Area */}
            <div className="flex-1 bg-[#111111] rounded border border-gray-800 flex items-center justify-center overflow-hidden min-h-[400px]">
              <div className="text-center select-none">
                <div className="text-gray-500 text-lg tracking-wide">Graph</div>
              </div>
            </div>
          </div>

          {/* Middle Column - OrderBook */}
          <div className="min-h-0">
            <OrderBook />
          </div>

          {/* Right Column - Trading Panel (Extended Height) */}
          <div className="min-h-0">
            <div className="h-full min-h-[800px]">
              <TradingPanel />
            </div>
          </div>
        </div>

        {/* Bottom Row - Trading Panel spanning all columns */}
        <div className="grid grid-cols-[1090px_220px_270px] gap-2">
          {/* Bottom Tabs for Left + Middle columns */}
          <div className="col-span-2 border-t border-gray-800 bg-[#000000] w-full">
            <div className="flex border-b border-gray-800 px-2 overflow-x-auto scrollbar-none min-h-[38px]">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={clsx(
                    'px-4 py-2 text-[11px] font-medium border-b-2 transition-colors whitespace-nowrap min-w-[120px] text-left',
                    activeTab === tab.id
                      ? 'text-white border-white bg-[#181A20]'
                      : 'text-gray-400 border-transparent hover:text-gray-200'
                  )}
                  style={{
                    borderTopLeftRadius: tab.id === tabs[0].id ? 4 : 0,
                    borderTopRightRadius: tab.id === tabs[tabs.length - 1].id ? 4 : 0,
                  }}
                >
                  {tab.label}
                </button>
              ))}
              <div className="flex-1" />
              <button
                className="flex items-center justify-center w-6 h-6 ml-2 rounded hover:bg-gray-800 transition-colors border border-gray-800"
                tabIndex={-1}
                aria-label="Expand"
              >
                <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            <div className="relative h-[110px] min-h-[110px] max-h-[110px] overflow-y-auto border border-gray-800 border-t-0 rounded-b-md">
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <p className="text-gray-500 text-[11px] mb-2">Sign in to view this content.</p>
                <button className="px-4 py-1 bg-cyan-400 text-black rounded text-xs font-semibold hover:bg-cyan-300 transition-colors">
                  Sign in
                </button>
              </div>
            </div>
          </div>
          
          {/* Account Overview Panel */}
          <div className="bg-[#000000] rounded-xl border border-black px-2 py-2 min-h-[180px] flex flex-col justify-start">
            <div className="mb-1">
              <span className="text-white text-[15px] font-semibold">Account Overview</span>
            </div>
            <div className="flex flex-col gap-">
              <div className="flex items-center justify-between">
                <span className="text-[11px] text-gray-400 font-medium underline underline-offset-2 decoration-gray-500 cursor-pointer hover:text-gray-300 transition-colors">
                  Account Equity
                </span>
                <span className="text-[11px] text-gray-200 font-semibold">$0.00</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[11px] text-gray-400 font-medium underline underline-offset-2 decoration-gray-500 cursor-pointer hover:text-gray-300 transition-colors">
                  Balance
                </span>
                <span className="text-[11px] text-gray-200 font-semibold">$0.00</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[11px] text-gray-400 font-medium underline underline-offset-2 decoration-gray-500 cursor-pointer hover:text-gray-300 transition-colors">
                  Balance available to trade
                </span>
                <span className="text-[11px] text-gray-200 font-semibold">$0.00</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[11px] text-gray-400 font-medium">
                  Unrealised PnL
                </span>
                <span className="text-[11px] text-gray-200 font-semibold">$0.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};