
module.exports = {
  config: {
    updateChannel: 'stable',
    fontSize: 12,
    fontFamily: '"Consolas NF", Menlo, "DejaVu Sans Mono", Consolas, "Lucida Console", monospace',
    cursorColor: 'rgba(248,28,229,0.8)',
    cursorShape: 'BLOCK',
    cursorBlink: false,
    foregroundColor: '#fff',
    backgroundColor: '#000',
    borderColor: '#333',
    padding: '12px 14px',
    MaterialTheme: {
      theme: "Palenight",
      accentColor: "#64FFDA",
    },
    shell: '/bin/zsh',
    bell: 'SOUND',
    copyOnSelect: false,
    hyperTabs: {
      trafficButtons: true,
      tabIconsColored: true,
    },
  },
  plugins: [
    'hyper-material-theme',
    'hyper-statusline',
    'hyper-blink',
    'hyperlinks',
    'hypercwd',
    'hyper-tabs-enhanced',
    'hyper-quit',
  ]
};