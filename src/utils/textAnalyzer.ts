import { TextStats } from '../types'

/**
 * テキストを解析して統計情報を返す
 * @param text 解析対象のテキスト
 * @returns TextStats オブジェクト
 */
export const analyzeText = (text: string): TextStats => {
  const chars = text.length
  const charsNoSpace = text.replace(/\s/g, '').length
  const words = text.trim() === '' ? 0 : text.trim().split(/\s+/).length
  const lines = text === '' ? 0 : text.split(/\r\n|\r|\n/).length

  return {
    chars,
    charsNoSpace,
    words,
    lines,
  }
}

/**
 * 警告表示が必要かどうかを判定
 * @param currentChars 現在の文字数
 * @param maxChars 最大文字数
 * @param threshold 警告を表示する閾値（0-1）
 * @returns boolean
 */
export const shouldShowWarning = (
  currentChars: number,
  maxChars: number,
  threshold: number
): boolean => {
  return currentChars > maxChars * threshold
}
