const puppeteer = require('puppeteer');
//dom element selectors
const USERNAME_SELECTOR = '#loginForm > input.input_id';
const PASSWORD_SELECTOR = '#loginForm > input.input_pw';
const BUTTON_SELECTOR = '#loginForm > div.account_submit > button';

const CREDS = require('./creds');


async function run() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('https://clien.net');

  await page.screenshot({ path: 'screenshots/clien_before_login.png' });

  await page.click(USERNAME_SELECTOR);
  await page.keyboard.type(CREDS.username);

  await page.click(PASSWORD_SELECTOR);
  await page.keyboard.type(CREDS.password);

  await page.click(BUTTON_SELECTOR);

  await page.waitForNavigation();

  await page.screenshot({ path: 'screenshots/clien_after_login.png' });
  
  browser.close();
}

run();
