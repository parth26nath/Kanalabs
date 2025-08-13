import React from 'react';

interface Order {
  price: number;
  size: number;
  sum: number;
}

interface Trade {
  price: number;
  size: number;
  time: string;
  direction: 'up' | 'down';
  side: 'buy' | 'sell';
}

export const OrderBook: React.FC = () => {
  const sellOrders: Order[] = [
    { price: 22.825, size: 307.825, sum: 22.825 },
    { price: 22.025, size: 307.825, sum: 22.025 },
    { price: 22.000, size: 45.082, sum: 22.000 },
    { price: 22.000, size: 45.082, sum: 22.000 },
    { price: 21.990, size: 0.114, sum: 21.990 },
    { price: 21.990, size: 0.114, sum: 21.990 },
    { price: 21.990, size: 0.114, sum: 21.990 },
    { price: 21.990, size: 0.114, sum: 21.990 },
    { price: 21.990, size: 0.114, sum: 21.990 },
    { price: 21.990, size: 0.114, sum: 21.990 },
  ];

  const buyOrders: Order[] = [
    { price: 21.990, size: 0.114, sum: 21.990 },
    { price: 21.990, size: 0.114, sum: 21.990 },
    { price: 21.990, size: 0.114, sum: 21.990 },
    { price: 21.990, size: 0.114, sum: 21.990 },
    { price: 21.990, size: 0.114, sum: 21.990 },
    { price: 21.990, size: 0.114, sum: 21.990 },
    { price: 22.000, size: 45.082, sum: 22.000 },
    { price: 22.000, size: 45.082, sum: 22.000 },
    { price: 22.025, size: 307.825, sum: 22.025 },
    { price: 22.025, size: 307.825, sum: 22.025 },
  ];

  const trades: Trade[] = [
    { price: 5.660, size: 23.234, time: '12:36:28', direction: 'down', side: 'sell' },
    { price: 5.660, size: 23.234, time: '12:35:28', direction: 'down', side: 'sell' },
    { price: 5.660, size: 23.234, time: '12:35:28', direction: 'down', side: 'buy' },
    { price: 5.660, size: 23.234, time: '12:35:28', direction: 'down', side: 'sell' },
    { price: 5.660, size: 23.234, time: '12:35:28', direction: 'down', side: 'buy' },
  ];

  return (
    <div className="h-full flex flex-col gap-3">
      {/* Orderbook */}
      <div className="flex-1 bg-[#000000] rounded-lg border border-gray-700/50 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="px-4 py-3 border-b border-gray-700/50 flex-shrink-0">
          <span className="text-white text-sm font-medium">Orderbook</span>
        </div>

        {/* Books */}
        <div className="flex-1 min-h-0 flex flex-col">
          {/* Column Headers */}
          <div className="grid grid-cols-3 px-4 py-2 border-b border-gray-700/30 flex-shrink-0">
            <div className="text-xs text-gray-400">Price<br/>(eUSDT)</div>
            <div className="text-xs text-gray-400 text-right">Size<br/>(eAPT)</div>
            <div className="text-xs text-gray-400 text-right">Sum<br/>(eAPT)</div>
          </div>

          {/* Lists with internal scroll if needed */}
          <div className="flex-1 grid grid-rows-[1fr_auto_1fr] min-h-0">
            {/* Asks (Sell Orders) */}
            <div className="overflow-hidden flex flex-col-reverse">
              {sellOrders.map((order, index) => (
                <div key={`sell-${index}`} className="relative grid grid-cols-3 px-4 py-1 hover:bg-gray-800/20 group">
                  <div 
                    className="absolute inset-y-0 right-0 bg-red-500/10" 
                    style={{ width: `${Math.min(100, (order.size / 400) * 100)}%` }} 
                  />
                  <div className="text-xs text-red-400 relative z-10 font-mono">{order.price.toFixed(3)}</div>
                  <div className="text-xs text-white/80 text-right relative z-10 font-mono">{order.size.toFixed(3)}</div>
                  <div className="text-xs text-white/80 text-right relative z-10 font-mono">{order.sum.toFixed(3)}</div>
                </div>
              ))}
            </div>

            {/* Mid price */}
            <div className="px-4 py-2 bg-[#000000] flex items-center justify-center border-y border-black">
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold text-red-400 font-mono">2345.5</span>
                <span className="text-red-400">↓</span>
                <span className="text-sm text-gray-400 font-mono">2345.6</span>
              </div>
            </div>

            {/* Bids (Buy Orders) */}
            <div className="overflow-hidden">
              {buyOrders.map((order, index) => (
                <div key={`buy-${index}`} className="relative grid grid-cols-3 px-4 py-1 hover:bg-gray-800/20 group">
                  <div 
                    className="absolute inset-y-0 right-0 bg-green-500/10" 
                    style={{ width: `${Math.min(100, (order.size / 400) * 100)}%` }} 
                  />
                  <div className="text-xs text-green-400 relative z-10 font-mono">{order.price.toFixed(3)}</div>
                  <div className="text-xs text-white/80 text-right relative z-10 font-mono">{order.size.toFixed(3)}</div>
                  <div className="text-xs text-white/80 text-right relative z-10 font-mono">{order.sum.toFixed(3)}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Trades - Separate Box */}
      <div className="bg-[#000000] rounded-lg border border-gray-700/50 flex flex-col min-h-[160px]">
        <div className="px-4 py-3 border-b border-gray-700/30 flex-shrink-0">
          <span className="text-white text-sm font-medium">Trades</span>
        </div>
        <div className="grid grid-cols-4 px-4 py-2 border-b border-gray-700/30 flex-shrink-0 bg-[#181A20]">
          <div className="text-xs text-gray-400">Price</div>
          <div className="text-xs text-gray-400 text-center">Size</div>
          <div className="text-xs text-gray-400 text-right">Time</div>
          <div className="text-xs text-gray-400 text-right"></div>
        </div>
        <div className="flex-1 overflow-auto">
          {trades.map((trade, index) => {
            // Determine color for price
                         const isBuy = trade.side === 'buy';
            const priceColor = isBuy ? 'text-green-400' : 'text-red-400';

            return (
              <React.Fragment key={index}>
                <div className="grid grid-cols-4 px-4 py-[7px] hover:bg-gray-800/20 group items-center">
                  <div className={`text-xs font-mono ${priceColor} bg-[#000000] rounded px-2 py-[2px] w-fit`}>
                    {trade.price.toFixed(3)}
                  </div>
                  <div className="text-xs text-white/80 text-center font-mono bg-[#000000] rounded px-2 py-[2px] w-fit mx-auto">
                    {trade.size.toFixed(3)}
                  </div>
                  <div className="text-xs text-gray-400 text-right font-mono bg-[#000000] rounded px-2 py-[2px] w-fit ml-auto">
                    {trade.time}
                  </div>
                  <div className="text-xs text-right">
                    <button className="opacity-100 transition-opacity">
                      <svg className="w-4 h-4 text-blue-400 hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 3h7v7m0 0L10 21l-7-7L21 10z" />
                      </svg>
                    </button>
                  </div>
                </div>
                {/* Divider line after each trade */}
                <div className="border-b border-gray-700/40 w-full" />
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};