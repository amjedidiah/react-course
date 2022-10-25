import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchBox, { SearchBoxProps } from "./search-box";

const mockOnChangeHandler = jest.fn() as jest.Mock;
const mockProps = {
  onChangeHandler: mockOnChangeHandler,
  searchString: "",
} as SearchBoxProps;

describe("SearchBox", () => {
  it("should render successfully", () => {
    expect.assertions(2);

    render(<SearchBox {...mockProps} />);

    expect(screen).toMatchSnapshot();
    expect(screen.getByRole("searchbox")).toBeInTheDocument();
  });

  it("should render with placeholder", () => {
    expect.assertions(2);

    render(<SearchBox placeholder="test placeholder" {...mockProps} />);

    expect(screen).toMatchSnapshot();
    expect(screen.getByPlaceholderText("test placeholder")).toBeInTheDocument();
  });

  it("should render with custom class name", () => {
    expect.assertions(2);

    render(<SearchBox className="test-class" {...mockProps} />);

    expect(screen).toMatchSnapshot();
    expect(screen.getByRole("searchbox")).toHaveClass("test-class");
  });

  it("should render with correct value", () => {
    expect.assertions(2);

    render(<SearchBox {...mockProps} searchString="test search string" />);

    expect(screen).toMatchSnapshot();
    expect(screen.getByRole("searchbox")).toHaveValue("test search string");
  });

  it("should call onChangeHandler when value changes", async () => {
    expect.assertions(2);

    render(<SearchBox {...mockProps} />);

    await userEvent
      .setup()
      .type(screen.getByRole("searchbox"), `{backspace}minimal`);

    expect(screen).toMatchSnapshot();
    expect(mockOnChangeHandler).toHaveBeenCalled();
  });
});
