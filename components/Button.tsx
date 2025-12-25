import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'white-outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  ...props
}) => {
  const baseStyles = "font-semibold rounded-lg shadow-md transition-all transform active:scale-95 duration-200 flex items-center justify-center";

  const variants = {
    primary: "bg-primary hover:bg-primary-hover text-white cursor-pointer",
    outline: "border border-primary text-primary hover:bg-primary hover:text-white",
    "white-outline": "border border-white text-white hover:bg-white hover:text-primary"
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-2 text-sm",
    lg: "px-5 py-2 text-base"
  };

  const widthStyle = fullWidth ? "w-full" : "";

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthStyle} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};