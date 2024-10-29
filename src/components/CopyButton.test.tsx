import { render, screen, fireEvent } from '@testing-library/react'
import { CopyButton } from './CopyButton'
import { describe, it, expect, vi } from 'vitest'

describe('CopyButton', () => {
  it('クリック時にonClickが呼ばれること', () => {
    const onClick = vi.fn()
    render(<CopyButton onClick={onClick} />)

    const button = screen.getByText('テキストをコピー')
    fireEvent.click(button)

    expect(onClick).toHaveBeenCalled()
  })
})
