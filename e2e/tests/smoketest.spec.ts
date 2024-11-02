import { test, expect } from "@playwright/test";

const BASE_URL =
  process.env.BASE_URL ?? "https://testingrequired.github.io/the-testing-book";

test("has title", async ({ page }) => {
  // When
  await page.goto(BASE_URL);

  // Then
  await expect(page).toHaveTitle("The Testing Book");
});

test("get book link", async ({ page }) => {
  // Given
  await page.goto(BASE_URL);

  // When
  await page.getByText("online").click();

  // Then
  await expect(page.url()).toBe(`${BASE_URL}/book/`);
});
