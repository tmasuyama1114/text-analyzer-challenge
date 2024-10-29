export interface TextStats {
  chars: number
  charsNoSpace: number
  words: number
  lines: number
}

export interface TextAnalyzerProps {
  maxChars?: number
  initialText?: string
}
