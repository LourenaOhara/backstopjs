module.exports = async page => {
    await page.type("#first-name", "Matthew");
    await page.type("#last-name", "Murdock");
    await page.type("#email", "mmurdock@marvel.com.br");
    await page.click("#agree");
}