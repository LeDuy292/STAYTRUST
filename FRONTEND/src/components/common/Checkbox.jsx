import React from 'react';

const Checkbox = ({ id, label, ...props }) => {
  return (
    <div className="flex items-start gap-3 mt-6">
      <div className="flex items-center h-5">
        <input
          id={id}
          type="checkbox"
          className="w-4 h-4 rounded border-gray-700 bg-slate-900/50 text-primary focus:ring-primary focus:ring-offset-card-dark transition-all cursor-pointer"
          {...props}
        />
      </div>
      {label && (
        <label htmlFor={id} className="text-xs text-slate-400 leading-tight cursor-pointer">
          {label}
        </label>
      )}
    </div>
  );
};

export default Checkbox;