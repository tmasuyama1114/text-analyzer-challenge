export const DEFAULT_MAX_CHARS = 1000
export const WARNING_THRESHOLD = 0.8

export const TEXT_LABELS = {
  CHARS_WITH_SPACES: '文字数（空白含む）',
  CHARS_WITHOUT_SPACES: '文字数（空白除く）',
  WORD_COUNT: '単語数',
  LINE_COUNT: '行数',
  COPY_BUTTON: 'テキストをコピー',
  WARNING_MESSAGE:
    '文字数が制限（{max}文字）に近づいています。残り{remaining}文字です。',
  PLACEHOLDER: 'テキストを入力してください...',
  TITLE: 'Text Analyzer',
} as const
