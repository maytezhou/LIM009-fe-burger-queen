import React from "react";
import {
  render,
  fireEvent,
  waitForElement,
  act,
  queryAllByAltText
} from "@testing-library/react";
import "@testing-library/jest-dom";
import "@testing-library/react/cleanup-after-each";
import "@testing-library/jest-dom/extend-expect";
import Menu from "../components/Menu";
import Desayuno from "../components/Desayuno";

it("renders", () => {
  const { asFragment } = render(<Menu />);
  expect(asFragment()).toMatchSnapshot();
});
it.only("se deberia renderizar bebidas despues de un click", async () => {
  const { asFragment, getByTestId, getByText, getAllByText } = render(<Menu />);
  act(() => {
    fireEvent.click(getByText("Desayuno"));
  });
  // const desayunoElement = await waitForElement(() => {
  //   return <Desayuno />;
  // });
  //comprobando que se renderize el componente menu
  expect(getByText('Desayuno')).toHaveAttribute('type', expect.stringContaining('button'));

  // await waitForElement(()=> getAllByText((_, { textContent }) => textContent === 'Café con leche')[0])
  // const [ node ] = getAllByText(
  //   (_, { textContent }) => textContent === "Café con leche"
  // )
  // expect(node.textContent).toBe("Jen is fun")
  const { asFragment } = render(<Menu />);
  expect(asFragment()).toMatchSnapshot();
  // expect(getByTestId('imgLogo')).toHaveClass('center');
  //  expect(findAllByAltText ('img'));
  // const arrh6= await waitForElement(()=> {
  //   return query()
  // })
  //expect(desayunoElement).toEqual("");

  // const desayunoProducto = await waitForElement(() => {
  //   return getByTestId("desayuno-producto");
  // });

  // expect(desayunoProducto.textContent.startsWith("")).toBe(true);
});
