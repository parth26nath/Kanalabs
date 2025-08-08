import React from 'react';

interface Order {
  price: number;
  size: number;
  sum: number;
}

export const OrderBook: React.FC = () => {
  const sellOrders: Order[] = [
    { price: 22.825, size: 387.825, sum: 22.825 },
    { price: 22.000, size: 45.082, sum: 22.000 },
    { price: 22.000, size: 45.082, sum: 22.000 },
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
    { price: 22.825, size: 387.825, sum: 22.825 },
    { price: 22.825, size: 387.825, sum: 22.825 },
  ];

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="grid grid-cols-3 gap-2 px-4 py-2 border-b border-gray-200 dark:border-dark-border">
        <div className="text-xs font-medium text-gray-500 dark:text-gray-400">
          Price (USDT)
        </div>
        <div className="text-xs font-medium text-gray-500 dark:text-gray-400 text-right">
          Size (APT)
        </div>
        <div className="text-xs font-medium text-gray-500 dark:text-gray-400 text-right">
          Sum (APT)
        </div>
      </div>

      {/* Sell Orders */}
      <div className="flex-1 overflow-y-auto">
        {sellOrders.map((order, index) => (
          <div
            key={`sell-${index}`}
            className="grid grid-cols-3 gap-2 px-4 py-1 hover:bg-gray-50 dark:hover:bg-gray-800/50 relative"
          >
            <div
              className="absolute inset-0 bg-red-500/10 dark:bg-red-500/5"
              style={{ width: `${(order.size / 400) * 100}%` }}
            />
            <div className="text-sm font-medium text-red-500 relative z-10">
              {order.price.toFixed(3)}
            </div>
            <div className="text-sm text-gray-900 dark:text-white text-right relative z-10">
              {order.size.toFixed(3)}
            </div>
            <div className="text-sm text-gray-900 dark:text-white text-right relative z-10">
              {order.sum.toFixed(3)}
            </div>
          </div>
        ))}
      </div>

      {/* Current Price */}
      <div className="px-4 py-3 border-y border-gray-200 dark:border-dark-border bg-gray-50 dark:bg-gray-800/50">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-red-500">2345.5</span>
            <span className="text-red-500">↓</span>
          </div>
          <span className="text-sm text-gray-500 dark:text-gray-400">2345.6</span>
        </div>
      </div>

      {/* Buy Orders */}
      <div className="flex-1 overflow-y-auto">
        {buyOrders.map((order, index) => (
          <div
            key={`buy-${index}`}
            className="grid grid-cols-3 gap-2 px-4 py-1 hover:bg-gray-50 dark:hover:bg-gray-800/50 relative"
          >
            <div
              className="absolute inset-0 bg-green-500/10 dark:bg-green-500/5"
              style={{ width: `${(order.size / 400) * 100}%` }}
            />
            <div className="text-sm font-medium text-green-500 relative z-10">
              {order.price.toFixed(3)}
            </div>
            <div className="text-sm text-gray-900 dark:text-white text-right relative z-10">
              {order.size.toFixed(3)}
            </div>
            <div className="text-sm text-gray-900 dark:text-white text-right relative z-10">
              {order.sum.toFixed(3)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};