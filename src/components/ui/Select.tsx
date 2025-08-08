import React from 'react';
import { clsx } from 'clsx';
import { ChevronDown } from 'lucide-react';

interface SelectOption {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

interface SelectProps {
  options: SelectOption[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  label?: string;
  className?: string;
}

export const Select: React.FC<SelectProps> = ({
  options,
  value,
  onChange,
  placeholder = 'Select...',
  label,
  className,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const selectedOption = options.find(opt => opt.value === value);

  return (
    <div className="relative w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          {label}
        </label>
      )}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={clsx(
          'w-full px-4 py-2 rounded-lg border bg-white dark:bg-dark-card',
          'text-left flex items-center justify-between',
          'border-gray-300 dark:border-dark-border',
          'hover:border-gray-400 dark:hover:border-gray-600',
          'focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent',
          'transition-all duration-200',
          className
        )}
      >
        <div className="flex items-center gap-2">
          {selectedOption?.icon}
          <span className={clsx(
            selectedOption ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'
          )}>
            {selectedOption?.label || placeholder}
          </span>
        </div>
        <ChevronDown className={clsx(
          'h-4 w-4 text-gray-500 transition-transform',
          isOpen && 'rotate-180'
        )} />
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute z-20 w-full mt-1 bg-white dark:bg-dark-card rounded-lg border border-gray-200 dark:border-dark-border shadow-lg">
            <div className="py-1 max-h-60 overflow-auto">
              {options.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => {
                    onChange(option.value);
                    setIsOpen(false);
                  }}
                  className={clsx(
                    'w-full px-4 py-2 text-left flex items-center gap-2',
                    'hover:bg-gray-100 dark:hover:bg-gray-800',
                    'transition-colors',
                    option.value === value && 'bg-gray-50 dark:bg-gray-800'
                  )}
                >
                  {option.icon}
                  <span className="text-gray-900 dark:text-white">
                    {option.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};