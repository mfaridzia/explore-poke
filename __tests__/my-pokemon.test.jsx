import { render } from "@testing-library/react";
import MyPokemon from "pages/my-pokemon";

describe("MyPokemon Home Page", () => {
  it('should render my pokemon without crash', () => {
    const { container } = render(
      <MyPokemon />
    );
    expect(container).not.toBeNull();
  });

  it('should render my pokemon lists', () => {
    const { container } = render(
      <MyPokemon />
    );
    expect(container).toMatchSnapshot();
  });
});