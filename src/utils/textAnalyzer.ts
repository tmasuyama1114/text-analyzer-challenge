import { TextStats } from '../types'

/**
 * テキストを解析して統計情報を返す
 * @param text 解析対象のテキスト
 * @returns TextStats オブジェクト
 */
export const analyzeText = (text: string): TextStats => {
  // 基本的な文字数
  const chars = text.length

  // 空白を除いた文字数
  const charsNoSpace = text.replace(/\s/g, '').length

  // 単語数の計算（連続する空白は1つとして扱う）
  const words = text.trim() === '' ? 0 : text.trim().split(/\s+/).length

  return {
    chars,
    charsNoSpace,
    words,
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
