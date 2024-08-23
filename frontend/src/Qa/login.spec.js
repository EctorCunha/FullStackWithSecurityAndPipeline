import { By, Builder, until, Browser, Key } from "selenium-webdriver";

(async function loginTest() {
  let driver = await new Builder().forBrowser(Browser.FIREFOX).build();

  try {
    await driver.get("http://localhost:5173/login");

    await driver.manage().setTimeouts({implicit: 500})
    await driver.manage().window().maximize()

    await driver.findElement(By.name("username")).sendKeys("teste");
    await driver.findElement(By.name("password")).sendKeys("test", Key.ENTER);
    // await driver
    //   .findElement(By.xpath('//*[@id="root"]/div[2]/form/button'))
    //   .click();

    await driver.wait(until.urlIs("http://localhost:5173/listPage"), 10000);

    console.log(
      "Login bem-sucedido e redirecionamento para /listPage verificado."
    );
  } catch (error) {
    console.error("Erro durante o teste de login:", error);
  } finally {
    await driver.quit();
  }
})();