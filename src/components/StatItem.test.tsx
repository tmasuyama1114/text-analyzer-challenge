import { render, screen } from '@testing-library/react'
import { StatItem } from './StatItem'
import { describe, it, expect } from 'vitest'

describe('StatItem', () => {
  it('ラベルと値が正しく表示されること', () => {
    const label = 'Test Label'
    const value = 42
    render(<StatItem label={label} value={value} />)

    expect(screen.getByText(label)).toBeInTheDocument()
    expect(screen.getByText('42')).toBeInTheDocument()
  })
})
