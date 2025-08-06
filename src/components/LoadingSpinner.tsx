import React from "react";
import { motion } from "motion/react";
import { LoadingSpinnerProps } from "../types";

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  isLoading,
  size = "md",
  color = "blue",
}) => {
  if (!isLoading) return null;

  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-8 w-8",
    lg: "h-12 w-12",
  };

  const colorClasses = {
    blue: "text-blue-600",
    gray: "text-gray-600",
    white: "text-white",
  };

  return (
    <motion.div
      className="flex justify-center items-center"
      role="status"
      aria-label="Loading"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className="relative">
        <motion.div
          className={`${sizeClasses[size]} ${colorClasses[color]}`}
          animate={{ rotate: 360 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <svg
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        </motion.div>
      </div>
      <span className="sr-only">Loading...</span>
    </motion.div>
  );
};

export default LoadingSpinner;
