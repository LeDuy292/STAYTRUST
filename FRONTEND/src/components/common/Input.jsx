import React from 'react';

const Input = ({ label, id, type = "text", className = "", error, children, ...props }) => {
  return (
    <div className="space-y-1.5">
      {label && (
        <label htmlFor={id} className="text-xs font-semibold uppercase tracking-wider text-slate-500">
          {label}
        </label>
      )}
      {children ? (
        children
      ) : (
        <input
          id={id}
          type={type}
          className={`w-full bg-slate-900/50 border rounded-lg px-4 py-3 text-sm focus:ring-2 focus:border-transparent outline-none transition-all text-white placeholder-slate-500 
            ${error ? 'border-red-500 focus:ring-red-500/50' : 'border-gray-700 focus:ring-primary'} 
            ${className}`}
          {...props}
        />
      )}
      {error && (
        <p className="text-xs text-red-500 font-medium mt-1">{error}</p>
      )}
    </div>
  );
};

export default Input;