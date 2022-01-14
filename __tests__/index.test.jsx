import { render } from "@testing-library/react";
import { MockedProvider } from '@apollo/client/testing';
import { mocksPokemons } from "mocks/mockPokemons";
import Home from "pages/index";

describe("Pokemon Home Page", () => {
  it('should render pokemon lists component without crash', () => {
    const { container } = render(
      <MockedProvider mocks={mocksPokemons}>
        <Home />
      </MockedProvider>
    );
    expect(container).not.toBeNull();
  });

  it('should render pokemon lists', () => {
    const { container } = render(
      <MockedProvider mocks={mocksPokemons}>
        <Home />
      </MockedProvider>
    );
    expect(container).toMatchSnapshot();
  });
});