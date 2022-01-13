import { renderHook } from "@testing-library/react-hooks";
import useBackgroundColor from "src/hooks/useBackgroundColor";

describe('useBackgroundColor', () => {
  it('should render empty color if image url is not given', () => {
    const imageUrl = "";
    const { result } = renderHook(
      () => useBackgroundColor(imageUrl)
    );
    expect(result.current.backgroundColor).toEqual('');
  });
});