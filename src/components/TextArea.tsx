import React from 'react'
import { TEXT_LABELS } from '../constants'

interface TextAreaProps {
  value: string
  onChange: (text: string) => void
  maxLength: number
}

export const TextArea: React.FC<TextAreaProps> = ({
  value,
  onChange,
  maxLength,
}) => (
  <textarea
    value={value}
    onChange={(e) => onChange(e.target.value)}
    className="w-full h-64 p-4 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white shadow-sm"
    placeholder={TEXT_LABELS.PLACEHOLDER}
    maxLength={maxLength}
  />
)
