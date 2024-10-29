import { useState, useEffect, useCallback } from 'react'
import { TextStats } from '../types'
import { analyzeText, shouldShowWarning } from '../utils/textAnalyzer'
import { DEFAULT_MAX_CHARS, WARNING_THRESHOLD } from '../constants'

export const useTextAnalysis = (maxChars: number = DEFAULT_MAX_CHARS) => {
  const [text, setText] = useState('')
  const [stats, setStats] = useState<TextStats>({
    chars: 0,
    charsNoSpace: 0,
    words: 0,
    lines: 0,
  })
  const [isWarning, setIsWarning] = useState(false)

  useEffect(() => {
    const newStats = analyzeText(text)
    setStats(newStats)
    setIsWarning(shouldShowWarning(newStats.chars, maxChars, WARNING_THRESHOLD))
  }, [text, maxChars])

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(text)
      return true
    } catch (err) {
      console.error('Failed to copy text: ', err)
      return false
    }
  }, [text])

  return {
    text,
    setText,
    stats,
    isWarning,
    handleCopy,
    remainingChars: maxChars - stats.chars,
  }
}
