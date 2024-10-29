import React from 'react'

interface StatItemProps {
  label: string
  value: number
}

export const StatItem: React.FC<StatItemProps> = ({ label, value }) => (
  <div className="bg-white p-4 rounded-lg shadow-sm border">
    <div className="text-sm text-gray-500">{label}</div>
    <div className="text-2xl font-bold text-gray-900">{value}</div>
  </div>
)
