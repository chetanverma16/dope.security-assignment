import React from "react";
import { motion } from "motion/react";
import Progress from "@/components/Progress";
import { DataVisualizationProps } from "@/types";

const formatVolumeForChart = (volume: number): string => {
  if (volume >= 1000000000) {
    return `${(volume / 1000000000).toFixed(1)}GB`;
  } else if (volume >= 1000000) {
    return `${(volume / 1000000).toFixed(0)}MB`;
  } else if (volume >= 1000) {
    return `${(volume / 1000).toFixed(0)}KB`;
  }
  return `${volume}B`;
};

const DataVisualization: React.FC<DataVisualizationProps> = ({ data }) => {
  const maxVolume = Math.max(...data.map((item) => item.volume));

  return (
    <motion.div
      className="bg-white p-6 rounded-lg shadow w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.1 }}
    >
      <h2 className="text-xl font-semibold mb-6 text-gray-800">
        Volume Data by User
      </h2>
      <div className="space-y-4 w-full">
        {data.map((item, index) => {
          const percentage = (item.volume / maxVolume) * 100;
          return (
            <motion.div
              key={item.id}
              className="flex flex-col gap-y-1 w-full items-start"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <div className="w-full text-sm font-medium text-gray-700 truncate">
                {item.name}
              </div>
              <Progress
                percentage={percentage}
                volume={item.volume}
                index={index}
                formatVolumeForChart={formatVolumeForChart}
              />
            </motion.div>
          );
        })}
        <div className="mt-4 text-sm text-gray-500">
          <div className="flex justify-between items-center gap-x-2">
            <span className="px-2 py-1 bg-gray-900 rounded-xl text-white">
              0
            </span>
            <span className="flex h-[1px] bg-gray-200 w-full"></span>
            <span className="px-2 py-1 bg-gray-900 rounded-xl text-white">
              {formatVolumeForChart(maxVolume)}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default DataVisualization;
