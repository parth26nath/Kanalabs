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
}

export const OrderBook: React.FC = () => {
  const sellOrders: Order[] = [
    { price: 22.825, size: 387.825, sum: 22.825 },
    { price: 22.000, size: 45.082, sum: 22.000 },
    { price: 22.000, size: 45.082, sum: 22.000 },
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
    { price: 22.000, size: 45.082, sum: 22.000 },
  ];

  const trades: Trade[] = [
    { price: 5.660, size: 23.234, time: '12:36:28' },
    { price: 5.660, size: 23.234, time: '12:36:28' },
    { price: 5.660, size: 23.234, time: '12:35:28' },
    { price: 5.660, size: 23.234, time: '12:35:28' },
    { price: 5.660, size: 23.234, time: '12:35:28' },
  ];

  return (
    <div className="h-full bg-[#111111] rounded border border-gray-800 flex flex-col overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-2 py-1 border-b border-gray-800 flex-shrink-0">
        <span className="text-white text-xs font-medium">Orderbook</span>
        <div className="flex items-center gap-1 text-[9px]">
          <span className="text-gray-400">Profit</span>
          <span className="text-white">0.00 USDT</span>
        </div>
      </div>

      {/* Books */}
      <div className="flex-1 min-h-0 flex flex-col">
        {/* Column Headers */}
        <div className="grid grid-cols-3 gap-1 px-2 py-0.5 border-b border-gray-800 flex-shrink-0">
          <div className="text-[10px] text-gray-400">Price (USDT)</div>
          <div className="text-[10px] text-gray-400 text-right">Size (APT)</div>
          <div className="text-[10px] text-gray-400 text-right">Sum (APT)</div>
        </div>

        {/* Lists with internal scroll if needed */}
        <div className="flex-1 grid grid-rows-[1fr_auto_1fr] min-h-0">
          {/* Asks */}
          <div className="overflow-auto no-scrollbar">
            {sellOrders.map((order, index) => (
              <div key={`sell-${index}`} className="relative grid grid-cols-3 gap-1 px-2 py-0.5 hover:bg-gray-800/40">
                <div className="absolute inset-y-0 right-0 bg-red-900/20" style={{ width: `${Math.min(100, (order.size / 400) * 100)}%` }} />
                <div className="text-[10px] text-red-400 relative z-10">{order.price.toFixed(3)}</div>
                <div className="text-[10px] text-gray-200 text-right relative z-10">{order.size.toFixed(3)}</div>
                <div className="text-[10px] text-gray-200 text-right relative z-10">{order.sum.toFixed(3)}</div>
              </div>
            ))}
          </div>

          {/* Mid price */}
          <div className="px-2 py-1 border-y border-gray-800 bg-[#0f0f0f] flex items-center justify-between">
            <div className="flex items-center gap-1">
              <span className="text-[11px] font-semibold text-red-400">22.000</span>
              <span className="text-[10px] text-red-400">▼</span>
            </div>
            <span className="text-[10px] text-gray-400">22.001</span>
          </div>

          {/* Bids */}
          <div className="overflow-auto no-scrollbar">
            {buyOrders.map((order, index) => (
              <div key={`buy-${index}`} className="relative grid grid-cols-3 gap-1 px-2 py-0.5 hover:bg-gray-800/40">
                <div className="absolute inset-y-0 right-0 bg-green-900/25" style={{ width: `${Math.min(100, (order.size / 400) * 100)}%` }} />
                <div className="text-[10px] text-emerald-400 relative z-10">{order.price.toFixed(3)}</div>
                <div className="text-[10px] text-gray-200 text-right relative z-10">{order.size.toFixed(3)}</div>
                <div className="text-[10px] text-gray-200 text-right relative z-10">{order.sum.toFixed(3)}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Trades */}
      <div className="border-t border-gray-800 flex flex-col min-h-[120px]">
        <div className="px-2 py-0.5 border-b border-gray-800 flex items-center justify-between flex-shrink-0">
          <span className="text-white text-xs font-medium">Trades</span>
          <span className="text-[10px] text-gray-500">Last 5</span>
        </div>
        <div className="grid grid-cols-3 gap-1 px-2 py-0.5 border-b border-gray-800 flex-shrink-0">
          <div className="text-[10px] text-gray-400">Price</div>
          <div className="text-[10px] text-gray-400 text-center">Size</div>
          <div className="text-[10px] text-gray-400 text-right">Time</div>
        </div>
        <div className="flex-1 overflow-auto no-scrollbar">
          {trades.map((trade, index) => (
            <div key={index} className="grid grid-cols-3 gap-1 px-2 py-0.5 hover:bg-gray-800/40">
              <div className="text-[10px] text-red-400">{trade.price.toFixed(3)}</div>
              <div className="text-[10px] text-gray-200 text-center">{trade.size.toFixed(3)}</div>
              <div className="text-[10px] text-gray-400 text-right">{trade.time}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};