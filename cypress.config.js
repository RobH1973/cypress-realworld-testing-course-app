module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.family === 'chromium' && browser.name !== 'electron') {
          launchOptions.args = launchOptions.args.filter(
            (arg) => arg !== '--start-maximized'
          );
          launchOptions.args.push('--window-size=1400,1200');
          launchOptions.args.push('--window-position=0,0');
        }
        return launchOptions;
      });

      return config;
    },
  },
};
