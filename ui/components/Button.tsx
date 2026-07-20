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
      className={`cursor-pointer rounded-lg bg-blue-700 px-4 py-2 font-medium text-white transition-colors duration-200 hover:bg-blue-700 active:scale-95 ${className}`}
    >
      {children}
    </button>
  );
}
