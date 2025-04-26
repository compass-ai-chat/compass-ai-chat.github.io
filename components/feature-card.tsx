"use client"

import { motion } from "framer-motion"
import { Shield, Network, Lock, Code, Wifi, Settings } from "lucide-react"

type IconName = "Shield" | "Network" | "Lock" | "Code" | "Wifi" | "Settings"

interface FeatureCardProps {
  title: string
  description: string
  icon: IconName
  delay?: number
}

export default function FeatureCard({ title, description, icon, delay = 0 }: FeatureCardProps) {
  const iconComponents = {
    Shield: Shield,
    Network: Network,
    Lock: Lock,
    Code: Code,
    Wifi: Wifi,
    Settings: Settings,
  }

  const IconComponent = iconComponents[icon]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="bg-surface-light dark:bg-surface-dark p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700"
    >
      <div className="bg-primary/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
        <IconComponent className="h-6 w-6 text-primary" />
      </div>
      <h3 className="text-xl font-bold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  )
}
