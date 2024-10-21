import puppeteer from 'puppeteer';

(async () => {
    const browser = await puppeteer.launch({
        headless: false
    });
    const page = await browser.newPage();
    // await page.goto('https://linktr.ee/abhishekmishra07');
    await page.goto('https://github.com/Abhishek-Mishra-77');
    await page.setViewport({ width: 1080, height: 1024 });
    await page.screenshot({ path: 'test.png' });
    await browser.close();
})();