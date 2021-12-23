describe('Google', () => {
    beforeAll(async () => {
      await page.goto('https://shanjida.ajaira.website');
      jest.useRealTimers()
    },10000);
  
    it('should be titled "Google"', async () => {
      
      await expect(page.title()).resolves.toMatch('Shanjida');
      
    });
  });