
it('login As admin"', async () => {
    await page.goto('http://dokan.test/my-account');

     await page.type('#username','admin',);
     await page.type('#password','admin');
     await page.click('button[value="Log in"]');

     jest.useRealTimers()
   },10000);
   
    
