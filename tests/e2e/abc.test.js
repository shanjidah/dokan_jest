describe('Google', () => {
    beforeAll(async () => {
      await page.goto('https://shanjida.ajaira.website');
    });
  
    it('should be titled "Google"', async () => {
      
      await expect(page.title()).resolves.toMatch('Google');
    });
  });