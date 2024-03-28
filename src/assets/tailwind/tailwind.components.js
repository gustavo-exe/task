import plugin from 'tailwindcss/plugin'

module.exports = plugin(({ addComponents }) => {
  addComponents({
    '.input-group': {
      '.input-label': {
        marginBottom: '1rem',
        fontSize: '1rem',
        lineHeight: '1.125rem',
        fontWeight: '600'
      },
      '.input-default': {
        padding: '1rem',
        backgroundColor: '#FBFBFB',
        borderRadius: '0.75rem',
        display: 'flex',
        alignItems: 'center',
        gap: '0.625rem'
      },
      '.input-error': {
        padding: '1rem',
        backgroundColor: '#FDD1D1',
        borderRadius: '0.75rem',
        display: 'flex',
        alignItems: 'center',
        gap: '0.625rem'
      },
      '.input-disable': {
        padding: '1rem',
        backgroundColor: '#EDEDED',
        borderRadius: '0.75rem',
        display: 'flex',
        alignItems: 'center',
        gap: '0.625rem'
      },
      '.input-default input, .input-error input, .input-disable input, .input-default textarea, .input-error textarea, .input-disable textarea':
        {
          outline: 'none',
          border: 'none',
          flex: '1',
          width: '100%',
          backgroundColor: 'transparent'
        }
    }
  })
})
