import React from "react";
import { motion } from "framer-motion";

interface ProgressProps {
  percentage: number;
  volume: number;
  index?: number;
  formatVolumeForChart: (volume: number) => string;
}

const Progress: React.FC<ProgressProps> = ({
  percentage,
  volume,
  index = 0,
  formatVolumeForChart,
}) => {
  return (
    <div className="w-full bg-gray-100 rounded-full h-5 relative">
      <motion.div
        className="bg-gray-900 h-5 rounded-full flex items-center justify-end pr-2"
        initial={{ width: 0 }}
        animate={{ width: `${percentage}%` }}
        transition={{
          duration: 0.4,
          delay: index * 0.05,
          ease: "easeOut",
        }}
      >
        <span className="text-xs text-white font-medium">
          {formatVolumeForChart(volume)}
        </span>
      </motion.div>
    </div>
  );
};

export default Progress;
