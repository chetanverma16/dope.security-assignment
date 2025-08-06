export interface DataItem {
  id: string;
  name: string;
  location: string;
  health: "healthy" | "error" | "disabled";
  ip: string;
  volume: number;
}

export interface StatusBadgeProps {
  status: "healthy" | "error" | "disabled";
}

export interface DataTableProps {
  data: DataItem[];
}

export interface DataVisualizationProps {
  data: DataItem[];
}

export interface LoadingSpinnerProps {
  isLoading: boolean;
  size?: "sm" | "md" | "lg";
  color?: "blue" | "gray" | "white";
}

export interface FormData {
  appName: string;
  volume: number;
}
