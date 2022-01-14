import { render } from "@testing-library/react";
import { MockedProvider } from '@apollo/client/testing';
import { mocksPokemon } from "mocks/mockPokemon";
import Pokemon from "pages/pokemon/[name]";

describe("Pokemon Detail Page", () => {  
  it('should render pokemon detail lists without crash', () => {
    const { container } = render(
      <MockedProvider mocks={mocksPokemon}>
        <Pokemon />
      </MockedProvider>
    );
    expect(container).not.toBeNull();
  });

  it('should render pokemon detail lists', () => {
    const { container } = render(
      <MockedProvider mocks={mocksPokemon}>
        <Pokemon />
      </MockedProvider>
    );
    expect(container).toMatchSnapshot();
  });
});