const puppeteer = require('puppeteer');

async function run() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  await page.goto('https://clien.net');
  await page.screenshot({ path: 'screenshots/clien.png' });
  
  browser.close();
}

run();
