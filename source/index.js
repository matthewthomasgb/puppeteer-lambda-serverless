const chromium = require('chrome-aws-lambda')

exports.handler = async (event, context, callback) => {
  let result = null
  let browser = null

  try {
    browser = await chromium.puppeteer.launch({
      args: chromium.args,
      defaultViewport: chromium.defaultViewport,
      executablePath: await chromium.executablePath,
      headless: chromium.headless,
      ignoreHTTPSErrors: true
    })

    const page = await browser.newPage()

    // Puppeteer script goes here
    await page.goto('https://google.com')

    result = await page.title()
  } catch (error) {
    return callback(error)
  } finally {
    if (browser !== null) {
      await browser.close()
    }
  }

  return callback(null, result)
}
