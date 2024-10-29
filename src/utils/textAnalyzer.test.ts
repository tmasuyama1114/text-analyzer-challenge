import { describe, it, expect } from 'vitest'
import { analyzeText, shouldShowWarning } from './textAnalyzer'

describe('analyzeText', () => {
  it('空のテキストを正しく解析できること', () => {
    const result = analyzeText('')
    expect(result).toEqual({
      chars: 0,
      charsNoSpace: 0,
      words: 0,
    })
  })

  it('基本的なテキストを正しく解析できること', () => {
    const result = analyzeText('Hello World')
    expect(result).toEqual({
      chars: 11,
      charsNoSpace: 10,
      words: 2,
    })
  })

  it('複数のスペースを含むテキストを正しく解析できること', () => {
    const result = analyzeText('Hello   World')
    expect(result).toEqual({
      chars: 13,
      charsNoSpace: 10,
      words: 2,
    })
  })

  it('前後の空白を含むテキストを正しく解析できること', () => {
    const result = analyzeText('  Hello World  ')
    expect(result).toEqual({
      chars: 15,
      charsNoSpace: 10,
      words: 2,
    })
  })

  it('タブ文字を含むテキストを正しく解析できること', () => {
    const result = analyzeText('Hello\tWorld')
    expect(result).toEqual({
      chars: 11,
      charsNoSpace: 10,
      words: 2,
    })
  })
})

describe('shouldShowWarning', () => {
  it('閾値を超えた場合に警告を表示すること', () => {
    expect(shouldShowWarning(81, 100, 0.8)).toBe(true)
  })

  it('閾値以下の場合に警告を表示しないこと', () => {
    expect(shouldShowWarning(79, 100, 0.8)).toBe(false)
  })
})
