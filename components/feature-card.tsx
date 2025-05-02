"use client";

import { motion } from "framer-motion";
import { Shield, Network, Lock, Code, Wifi, Settings, KeyRound } from "lucide-react";

type IconName = "Shield" | "Network" | "Lock" | "Code" | "Wifi" | "Settings" | "KeyRound";

interface FeatureCardProps {
  title: string;
  description: React.ReactNode;
  icon: IconName;
  delay?: number;
}

export default function FeatureCard({
  title,
  description,
  icon,
  delay = 0,
}: FeatureCardProps) {
  const iconComponents = {
    Shield: Shield,
    Network: Network,
    Lock: Lock,
    Code: Code,
    Wifi: Wifi,
    Settings: Settings,
    KeyRound: KeyRound,
  };

  const IconComponent = iconComponents[icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="bg-surface-light dark:bg-surface-dark p-6 rounded-2xl shadow-md hover:shadow-lg border border-gray-100 dark:border-gray-700 overflow-x-auto"
    >
      <div className="flex flex-row">
        <div className="bg-primary/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
          <IconComponent className="h-6 w-6 text-primary" />
        </div>
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white self-center ms-4">
          {title}
        </h3>
      </div>
      <p className="text-gray-600 dark:text-gray-300 my-6">{description}</p>
    </motion.div>
  );
}
