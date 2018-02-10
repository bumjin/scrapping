const puppeteer = require('puppeteer');
//dom element selectors
const USERNAME_SELECTOR = '#loginForm > input.input_id';
const PASSWORD_SELECTOR = '#loginForm > input.input_pw';
const BUTTON_SELECTOR = '#loginForm > div.account_submit > button';

//const PARK_SELECTOR = '#menu-scroll > div.navmenu > a:nth-child(3)';
const SEARCH_TEXT_SELECTOR = "#selectSearchInput";
const SEARCH_BUTTON_SELECTOR = "#div_content > div.board_search > button";
const CREDS = require('./creds');


async function run() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('https://clien.net');

  //await page.screenshot({ path: 'screenshots/clien_before_login.png' });

  await page.click(USERNAME_SELECTOR);
  await page.keyboard.type(CREDS.username);

  await page.click(PASSWORD_SELECTOR);
  await page.keyboard.type(CREDS.password);

  await page.click(BUTTON_SELECTOR);

  await page.waitForNavigation();

  /* await page.screenshot({ path: 'screenshots/clien_after_login.png',
                          fullPage: true
                         }); */

  await page.keyboard.press('F');//모두의 공원 단축키
  await page.waitForNavigation();

  await page.screenshot({ path: 'screenshots/clien_park.png' });

  await page.click(SEARCH_TEXT_SELECTOR);
  await page.keyboard.type("김연아");

  await page.click(SEARCH_BUTTON_SELECTOR);

  //const titleToSearch = '%EA%B9%80%EC%97%B0%EC%95%84';
  //const parkUrl = 'https://www.clien.net/service/search/board/park?sk=title&sv=${titleToSearch}';

  //await page.goto(parkUrl);
  //await page.waitForNavigation();

  await page.waitFor(5*1000);

  await page.screenshot({ path: 'screenshots/clien_after_search.png' });
  
  browser.close();
}

run();
