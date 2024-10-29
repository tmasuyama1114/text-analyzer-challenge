import React from 'react'
import { StatItem } from './StatItem'
import { TextStats } from '../types'
import { TEXT_LABELS } from '../constants'

interface StatsGridProps {
  stats: TextStats
}

export const StatsGrid: React.FC<StatsGridProps> = ({ stats }) => (
  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
    <StatItem label={TEXT_LABELS.CHARS_WITH_SPACES} value={stats.chars} />
    <StatItem
      label={TEXT_LABELS.CHARS_WITHOUT_SPACES}
      value={stats.charsNoSpace}
    />
    <StatItem label={TEXT_LABELS.WORD_COUNT} value={stats.words} />
    <StatItem label={TEXT_LABELS.LINE_COUNT} value={stats.lines} />
  </div>
)