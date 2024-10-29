import React from 'react'
import { TEXT_LABELS } from '../constants'

interface CopyButtonProps {
  onClick: () => void
}

export const CopyButton: React.FC<CopyButtonProps> = ({ onClick }) => (
  <button
    onClick={onClick}
    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
  >
    {TEXT_LABELS.COPY_BUTTON}
  </button>
)
