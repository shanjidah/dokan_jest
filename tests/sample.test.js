describe('Google', () => {
    beforeAll(async () => {
      await page.goto('https://shanjida.ajaira.website');
      jest.useRealTimers()
    },10000);
  
    it('should be titled "Google"', async () => {
      
      await expect(page.title()).resolves.toMatch('Shanjida');
      const account = await page.$x('/html/body/div/header/div[2]/div/nav/div[1]/ul/li[1]/a');
      account.click();
    });
  });