import { render, screen } from '@testing-library/react'
import { Warning } from './Warning'
import { describe, it, expect } from 'vitest'

describe('Warning', () => {
  it('警告メッセージが正しく表示されること', () => {
    const maxChars = 100
    const remainingChars = 20
    render(<Warning maxChars={maxChars} remainingChars={remainingChars} />)

    expect(screen.getByText(/文字数が制限/)).toBeInTheDocument()
    expect(screen.getByText(/100文字/)).toBeInTheDocument()
    expect(screen.getByText(/20文字/)).toBeInTheDocument()
  })
})
