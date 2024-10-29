import React from 'react'
import { TEXT_LABELS } from '../constants'

interface WarningProps {
  maxChars: number
  remainingChars: number
}

export const Warning: React.FC<WarningProps> = ({
  maxChars,
  remainingChars,
}) => (
  <div className="bg-yellow-50 border border-yellow-400 rounded-lg p-4 text-yellow-800">
    {TEXT_LABELS.WARNING_MESSAGE.replace('{max}', maxChars.toString()).replace(
      '{remaining}',
      remainingChars.toString()
    )}
  </div>
)
