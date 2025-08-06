"use client";

import React from "react";
import DataTable from "../components/DataTable";
import DataVisualization from "../components/DataVisualization";
import AccessibleForm from "../components/AccessibleForm";
import LoadingSpinner from "../components/LoadingSpinner";
import { sampleData } from "../data/sampleData";
import SectionWrapper from "@/components/SectionWrapper";

export default function Home() {
  return (
    <div className="flex flex-col gap-y-12">
      {/* Component: Data Table */}
      <SectionWrapper heading="Data Table">
        <DataTable data={sampleData} />
      </SectionWrapper>

      {/* Component: Data Visualization, Accessible Form, and Loading Spinner */}
      <SectionWrapper heading="Data Visualization">
        <DataVisualization data={sampleData} />
      </SectionWrapper>

      {/* Component: Accessible Form */}
      <SectionWrapper heading="Accessible Form">
        <AccessibleForm />
      </SectionWrapper>

      {/* Component: Loading Spinner */}
      <SectionWrapper heading="Loading Spinner">
        <div className="bg-gray-100 border border-gray-200 p-6 rounded-lg shadow">
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-4">
              <span className="text-sm font-medium">Small:</span>
              <LoadingSpinner isLoading={true} size="sm" color="gray" />
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm font-medium">Medium:</span>
              <LoadingSpinner isLoading={true} size="md" color="gray" />
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm font-medium">Large:</span>
              <LoadingSpinner isLoading={true} size="lg" color="gray" />
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
