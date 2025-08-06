import React, { useState } from "react";
import { motion } from "motion/react";
import { FormData } from "@/types";

interface FormErrors {
  appName?: string;
  volume?: string;
}

const AccessibleForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    appName: "",
    volume: 0,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.appName.trim()) {
      newErrors.appName = "App name is required";
    } else if (formData.appName.trim().length < 2) {
      newErrors.appName = "App name must be at least 2 characters long";
    }

    if (formData.volume <= 0) {
      newErrors.volume = "Volume must be greater than 0";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!validateForm()) {
      setIsSubmitting(false);
      return;
    }

    try {
      console.log("Form submitted:", formData);
      alert("Form submitted successfully! Check console for details.");
      setFormData({ appName: "", volume: 0 });
      setErrors({});
    } catch (error) {
      console.error("Form submission error:", error);
      alert("There was an error submitting the form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof FormData, value: string | number) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <motion.div
      className="bg-white p-6 rounded-lg shadow max-w-md"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.2 }}
    >
      <h2 className="text-xl font-semibold mb-6 text-gray-800">
        Add New Application
      </h2>
      <form onSubmit={handleSubmit} noValidate>
        <div className="mb-4">
          <label
            htmlFor="appName"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            App Name *
          </label>
          <input
            type="text"
            id="appName"
            value={formData.appName}
            onChange={(e) => handleInputChange("appName", e.target.value)}
            className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 ${
              errors.appName ? "border-red-500" : "border-gray-300"
            }`}
            aria-invalid={!!errors.appName}
            aria-describedby={errors.appName ? "appName-error" : undefined}
            required
          />
          {errors.appName && (
            <p
              id="appName-error"
              className="mt-1 text-sm text-red-600"
              role="alert"
            >
              {errors.appName}
            </p>
          )}
        </div>

        <div className="mb-6">
          <label
            htmlFor="volume"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Volume (bytes) *
          </label>
          <input
            type="number"
            id="volume"
            min="1"
            value={formData.volume}
            onChange={(e) =>
              handleInputChange("volume", parseInt(e.target.value) || 0)
            }
            className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 ${
              errors.volume ? "border-red-500" : "border-gray-300"
            }`}
            aria-invalid={!!errors.volume}
            aria-describedby={errors.volume ? "volume-error" : undefined}
            required
          />
          {errors.volume && (
            <p
              id="volume-error"
              className="mt-1 text-sm text-red-600"
              role="alert"
            >
              {errors.volume}
            </p>
          )}
        </div>

        <motion.button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-2 px-4 rounded-md text-white font-medium transition-colors ${
            isSubmitting
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          }`}
          whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
          whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
          transition={{ duration: 0.1 }}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </motion.button>
      </form>
    </motion.div>
  );
};

export default AccessibleForm;
