import { render, screen, fireEvent } from '@testing-library/react'
import { TextArea } from './TextArea'
import { describe, it, expect, vi } from 'vitest'

describe('TextArea', () => {
  it('値が正しく表示されること', () => {
    const value = 'Test text'
    const onChange = vi.fn()
    render(<TextArea value={value} onChange={onChange} maxLength={100} />)

    const textarea =
      screen.getByPlaceholderText('テキストを入力してください...')
    expect(textarea).toHaveValue(value)
  })

  it('入力時にonChangeが呼ばれること', () => {
    const onChange = vi.fn()
    render(<TextArea value="" onChange={onChange} maxLength={100} />)

    const textarea =
      screen.getByPlaceholderText('テキストを入力してください...')
    fireEvent.change(textarea, { target: { value: 'New text' } })

    expect(onChange).toHaveBeenCalledWith('New text')
  })
})
