import { render, screen } from '@testing-library/react'
import { StatsGrid } from './StatsGrid'
import { describe, it, expect } from 'vitest'

describe('StatsGrid', () => {
  const mockStats = {
    chars: 10,
    charsNoSpace: 8,
    words: 2,
    lines: 1,
  }

  it('すべての統計情報が表示されること', () => {
    render(<StatsGrid stats={mockStats} />)

    expect(screen.getByText('10')).toBeInTheDocument()
    expect(screen.getByText('8')).toBeInTheDocument()
    expect(screen.getByText('2')).toBeInTheDocument()
    expect(screen.getByText('1')).toBeInTheDocument()
  })
})
