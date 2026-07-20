import React from "react";

type BotonProps = {
  onClick: () => void;
  className?: string;
  children: React.ReactNode;
};

export default function Button({ onClick, className, children }: BotonProps) {
  return (
    <button
      onClick={onClick}
      className={`cursor-pointer rounded-lg bg-emerald-600 px-4 py-2 font-medium text-white transition-all duration-200 hover:bg-emerald-700 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
    >
      {children}
    </button>
  );
}
