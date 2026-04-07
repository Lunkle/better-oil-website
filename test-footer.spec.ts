import { test, expect } from '@playwright/test';

test('verify footer and mobile menu', async ({ page }) => {
  await page.goto('http://localhost:3000');

  // Scroll to bottom
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'orange_footer.png' });

  // Test mobile menu
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto('http://localhost:3000');
  await page.click('button[aria-label="Toggle menu"]');
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'orange_mobile_menu.png' });
});
