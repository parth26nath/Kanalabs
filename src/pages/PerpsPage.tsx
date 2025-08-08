import React, { useState } from 'react';
import { Card } from '../components/ui/Card';
import { OrderBook } from '../components/trading/OrderBook';
import { TradingPanel } from '../components/trading/TradingPanel';
import { TrendingUp } from 'lucide-react';
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
    <div className="h-full overflow-hidden flex flex-col">
      {/* Trading Header */}
      <div className="bg-white dark:bg-dark-card border-b border-gray-200 dark:border-dark-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 lg:gap-6">
              {/* Token Pair */}
              <div className="flex items-center gap-2">
                <h1 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white">
                  APT - PERP
                </h1>
                <button className="p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800">
                  <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>

              {/* Price Info */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm">
                <div>
                  <div className="text-gray-500 dark:text-gray-400">Mark</div>
                  <div className="font-semibold text-gray-900 dark:text-white">$7.32</div>
                </div>
                <div>
                  <div className="text-gray-500 dark:text-gray-400">24h change</div>
                  <div className="font-semibold text-green-500 flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    +2%
                  </div>
                </div>
                <div>
                  <div className="text-gray-500 dark:text-gray-400">Oracle Price</div>
                  <div className="font-semibold text-gray-900 dark:text-white">$11.1</div>
                </div>
                <div>
                  <div className="text-gray-500 dark:text-gray-400">24h volume</div>
                  <div className="font-semibold text-gray-900 dark:text-white">245,694,542</div>
                </div>
                <div>
                  <div className="text-gray-500 dark:text-gray-400">Funding</div>
                  <div className="font-semibold text-gray-900 dark:text-white flex items-center gap-1">
                    0.012%
                    <span className="text-xs text-gray-500">00:23:34</span>
                  </div>
                </div>
                <div>
                  <div className="text-gray-500 dark:text-gray-400">Next Funding</div>
                  <div className="font-semibold text-gray-900 dark:text-white">00:23:34</div>
                </div>
              </div>
            </div>

            {/* Account Balance */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-4">
              <button className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors text-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                <span className="hidden sm:inline">Win $20</span>
              </button>
              <button className="px-3 sm:px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-sm">
                Deposit
              </button>
              <button className="px-3 sm:px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors text-sm">
                Sign in
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Trading Area */}
      <div className="container mx-auto px-4 py-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* Left Side - Order Book & Chart */}
          <div className="lg:col-span-8 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Order Book */}
              <Card className="h-[500px] p-0">
                <OrderBook />
              </Card>

              {/* Chart Area */}
              <Card className="h-[500px] flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">📊</div>
                  <p className="text-gray-500 dark:text-gray-400">Graph</p>
                  <p className="text-sm text-gray-400 dark:text-gray-500 mt-2">
                    Trading chart will be displayed here
                  </p>
                </div>
              </Card>
            </div>

            {/* Trades Table */}
            <Card>
              <div className="px-4 py-3 border-b border-gray-200 dark:border-dark-border">
                <h3 className="font-semibold text-gray-900 dark:text-white">Trades</h3>
              </div>
              <div className="p-4">
                <table className="w-full">
                  <thead>
                    <tr className="text-left text-sm text-gray-500 dark:text-gray-400">
                      <th className="pb-2">Price</th>
                      <th className="pb-2">Size</th>
                      <th className="pb-2">Time</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr className="border-t border-gray-100 dark:border-gray-800">
                      <td className="py-2 text-red-500">5.600</td>
                      <td className="py-2 text-gray-900 dark:text-white">23.234</td>
                      <td className="py-2 text-gray-500 dark:text-gray-400">12:36:28</td>
                    </tr>
                    <tr className="border-t border-gray-100 dark:border-gray-800">
                      <td className="py-2 text-red-500">5.600</td>
                      <td className="py-2 text-gray-900 dark:text-white">23.234</td>
                      <td className="py-2 text-gray-500 dark:text-gray-400">12:36:28</td>
                    </tr>
                    <tr className="border-t border-gray-100 dark:border-gray-800">
                      <td className="py-2 text-red-500">5.600</td>
                      <td className="py-2 text-gray-900 dark:text-white">23.234</td>
                      <td className="py-2 text-gray-500 dark:text-gray-400">12:36:28</td>
                    </tr>
                    <tr className="border-t border-gray-100 dark:border-gray-800">
                      <td className="py-2 text-red-500">5.600</td>
                      <td className="py-2 text-gray-900 dark:text-white">23.234</td>
                      <td className="py-2 text-gray-500 dark:text-gray-400">12:36:28</td>
                    </tr>
                    <tr className="border-t border-gray-100 dark:border-gray-800">
                      <td className="py-2 text-green-500">5.600</td>
                      <td className="py-2 text-gray-900 dark:text-white">23.234</td>
                      <td className="py-2 text-gray-500 dark:text-gray-400">12:36:28</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card>
          </div>

          {/* Right Side - Trading Panel */}
          <div className="lg:col-span-4 space-y-4">
            <div className="h-[500px]">
              <TradingPanel />
            </div>

            {/* Account Overview */}
            <Card>
              <div className="px-4 py-3 border-b border-gray-200 dark:border-dark-border">
                <h3 className="font-semibold text-gray-900 dark:text-white">Account Overview</h3>
              </div>
              <div className="p-4 space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">Account Equity</span>
                  <span className="font-medium text-gray-900 dark:text-white">$0.00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">Balance</span>
                  <span className="font-medium text-gray-900 dark:text-white">$0.00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">Balance available to trade</span>
                  <span className="font-medium text-gray-900 dark:text-white">$0.00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">Unrealised PnL</span>
                  <span className="font-medium text-gray-900 dark:text-white">$0.00</span>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Bottom Tabs */}
        <Card className="mt-4">
          <div className="border-b border-gray-200 dark:border-dark-border">
            <nav className="flex gap-1 px-4">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={clsx(
                    'px-4 py-3 text-sm font-medium border-b-2 transition-colors',
                    activeTab === tab.id
                      ? 'text-primary border-primary'
                      : 'text-gray-600 dark:text-gray-400 border-transparent hover:text-gray-900 dark:hover:text-white'
                  )}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>
          <div className="p-8 text-center">
            <p className="text-gray-500 dark:text-gray-400">
              Sign in to see your {tabs.find(t => t.id === activeTab)?.label.toLowerCase()}
            </p>
            <button className="mt-4 px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
              Sign in
            </button>
          </div>
        </Card>
      </div>
    </div>
  );
};