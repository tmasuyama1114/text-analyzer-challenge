import { renderHook, act } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { useTextAnalysis } from './useTextAnalysis'

describe('useTextAnalysis', () => {
  it('初期状態が正しいこと', () => {
    const { result } = renderHook(() => useTextAnalysis())

    expect(result.current.text).toBe('')
    expect(result.current.stats).toEqual({
      chars: 0,
      charsNoSpace: 0,
      words: 0,
    })
    expect(result.current.isWarning).toBe(false)
  })

  it('テキストの更新が正しく行われること', () => {
    const { result } = renderHook(() => useTextAnalysis())

    act(() => {
      result.current.setText('Hello World')
    })

    expect(result.current.stats.chars).toBe(11)
    expect(result.current.stats.words).toBe(2)
  })

  it('コピー機能が正しく動作すること', async () => {
    const mockClipboard = {
      writeText: vi.fn().mockImplementation(() => Promise.resolve()),
    }
    Object.assign(navigator, {
      clipboard: mockClipboard,
    })

    const { result } = renderHook(() => useTextAnalysis())

    act(() => {
      result.current.setText('Test Text')
    })

    await act(async () => {
      await result.current.handleCopy()
    })

    expect(mockClipboard.writeText).toHaveBeenCalledWith('Test Text')
  })
})
