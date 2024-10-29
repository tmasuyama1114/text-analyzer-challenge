import React from 'react'
import { useTextAnalysis } from '../hooks/useTextAnalysis'
import { TextAnalyzerProps } from '../types'
import { DEFAULT_MAX_CHARS, TEXT_LABELS } from '../constants'
import { TextArea } from './TextArea'
import { Warning } from './Warning'
import { StatsGrid } from './StatsGrid'
import { CopyButton } from './CopyButton'

const TextAnalyzer: React.FC<TextAnalyzerProps> = ({
  maxChars = DEFAULT_MAX_CHARS,
}) => {
  const { text, setText, stats, isWarning, handleCopy, remainingChars } =
    useTextAnalysis(maxChars)

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h1 className="text-2xl font-bold text-gray-900">
              {TEXT_LABELS.TITLE}
            </h1>
          </div>

          <div className="p-6 space-y-4">
            <TextArea value={text} onChange={setText} maxLength={maxChars} />

            {isWarning && (
              <Warning maxChars={maxChars} remainingChars={remainingChars} />
            )}

            <StatsGrid stats={stats} />

            <div className="flex justify-end">
              <CopyButton onClick={handleCopy} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TextAnalyzer
