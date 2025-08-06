import React from "react";
import { motion } from "motion/react";
import { DataTableProps } from "@/types";
import StatusBadge from "@/components/StatusBadge";

const formatVolume = (volume: number): string => {
  const units = ["B", "KB", "MB", "GB", "TB"];
  let size = volume;
  let unitIndex = 0;

  while (size >= 1024 && unitIndex < units.length - 1) {
    size /= 1024;
    unitIndex++;
  }

  return `${size.toFixed(unitIndex === 0 ? 0 : 2)} ${units[unitIndex]}`;
};

const DataTable: React.FC<DataTableProps> = ({ data }) => {
  return (
    <table className="min-w-full table-auto outline outline-gray-200 rounded-xl overflow-hidden">
      <thead className="bg-gray-50 border-b border-gray-200">
        <tr>
          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            ID
          </th>
          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Name
          </th>
          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Location
          </th>
          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Health Status
          </th>
          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            IP Address
          </th>
          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Volume
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {data.map((item, index) => (
          <motion.tr
            key={item.id}
            className="hover:bg-gray-50"
            initial={{ opacity: 0, x: -5 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, delay: index * 0.05 }}
          >
            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
              {item.id}
            </td>
            <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
              {item.name}
            </td>
            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
              {item.location}
            </td>
            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
              <StatusBadge status={item.health} />
            </td>
            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
              {item.ip}
            </td>
            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
              {formatVolume(item.volume)}
            </td>
          </motion.tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
