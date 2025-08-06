import React from 'react';
import { motion } from 'motion/react';
import { StatusBadgeProps } from '../types';

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  const getStatusStyles = () => {
    switch (status) {
      case 'healthy':
        return 'bg-green-500 text-white';
      case 'error':
        return 'bg-red-500 text-white';
      case 'disabled':
        return 'bg-yellow-500 text-gray-800';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  return (
    <motion.span
      className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusStyles()}`}
      role="status"
      aria-label={`Status: ${status}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2 }}
      whileHover={{ scale: 1.05 }}
    >
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </motion.span>
  );
};

export default StatusBadge;