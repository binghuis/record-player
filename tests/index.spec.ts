import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://oa.hanbotech.com.cn/');
  await page.goto('http://oa.hanbotech.com.cn/login');
  await page.getByPlaceholder('手机号/账户').click();
  await page.getByPlaceholder('手机号/账户').fill('18710169102');
  await page.getByPlaceholder('密码').click();
  await page.getByPlaceholder('密码').fill('123456');
  await page.getByRole('button', { name: '登 录' }).click();
  await page.getByPlaceholder('密码').click();
  await page.getByPlaceholder('密码').fill('18710169102');
  await page.getByRole('button', { name: '登 录' }).click();
  await page.getByText('我的项目').click();
  await page.getByLabel('项目状态').click();
  await page.getByText('进行中').click();
  await page.getByRole('button', { name: '查 询' }).click();
  await page.getByRole('button', { name: '重 置' }).click();
  await page.getByRole('button', { name: '新建项目' }).click();
  await page.getByRole('button', { name: '取 消' }).click();
  await page.getByText('我的绩效').click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: '2023 / 04' }).click();
  const page1 = await page1Promise;
  await page1.getByText('我的项目').click();
  await page1.locator('img').click();
});