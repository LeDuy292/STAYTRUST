import React from 'react';

const Button = ({ children, variant = "primary", className = "", icon, ...props }) => {
  const baseStyles = "w-full font-bold transition-all flex items-center justify-center gap-2 rounded-lg";
  
  const variants = {
    primary: "bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/25 py-3.5 text-base",
    outline: "border border-gray-700 hover:bg-slate-800 text-white py-3.5 bg-slate-900/20",
    ghost: "bg-primary hover:bg-primary/90 text-white px-5 py-2 text-sm font-semibold shadow-lg shadow-primary/20"
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
      {icon && <span className="material-symbols-outlined text-xl">{icon}</span>}
    </button>
  );
};

export default Button;