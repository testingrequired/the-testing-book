import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  // When
  await page.goto("https://testingrequired.github.io/the-testing-book/");

  // Then
  await expect(page).toHaveTitle("The Testing Book");
});

test("get book link", async ({ page }) => {
  // Given
  await page.goto("https://testingrequired.github.io/the-testing-book/");

  // When
  await page.getByText("online").click();

  // Then
  await expect(page.url()).toBe(
    "https://testingrequired.github.io/the-testing-book/book/"
  );
});
