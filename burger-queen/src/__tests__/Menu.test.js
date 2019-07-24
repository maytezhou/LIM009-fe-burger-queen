import React from "react";
import { render, fireEvent, waitForElement, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import "@testing-library/react/cleanup-after-each";
import "@testing-library/jest-dom/extend-expect";
import Menu from "../components/Menu";

it("renders", () => {
  const { asFragment } = render(<Menu />);
  expect(asFragment()).toMatchSnapshot();
});
it("inserts", async () => {
  const { getByTestId, getByText } = render(<Menu />);
const btn = getByText("Desayuno")
  act(() => {
    fireEvent.click(btn);
  });
  const desayunoElement = await waitForElement(() => {
    return getByTestId("desayuno");
  });
  // expect(getByTestId('imgLogo')).toHaveClass('center');
  // expect(getByAltText('logo')).toHaveAttribute('alt', expect.stringContaining('logo'));
  expect(desayunoElement.textContent).toBe("Collection: Loading...");
});
