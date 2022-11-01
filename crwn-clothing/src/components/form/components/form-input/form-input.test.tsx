/* eslint-disable testing-library/no-debugging-utils */
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FormInput, { Label } from "./form-input";

const formInputProps = {
  id: "custom-id",
  value: "safety",
  type: "password",
  label: {
    value: "Email",
    id: "login-email-label"
  } as Label
}

describe("FormInput", () => {
  it("should render the form input", () => {
    expect.assertions(5);

    render(<FormInput />);
    const screenInput = screen.getByRole("textbox");

    expect(screen).toMatchSnapshot();
    expect(screenInput).toBeInTheDocument();
    expect(screenInput).toHaveAttribute("type", "text");
    expect(screenInput).toHaveValue("");
    expect(screen.queryByRole("form-input-label")).toBeNull();
  });

  it("should render the form input with custom id, type, and value", () => {
    expect.assertions(6);

    render(<FormInput {...formInputProps} />);
    const screenInput = screen.getByDisplayValue(/safety/i);

    expect(screen).toMatchSnapshot();
    expect(screenInput).toBeInTheDocument();
    expect(screenInput).toHaveAttribute("id", "custom-id");
    expect(screenInput).toHaveAttribute("type", "password");
    expect(screenInput).toHaveValue("safety");
    expect(screen.queryByRole("form-input-label")).toBeNull();
  });

  it("should render the form input with a label", () => {
    expect.assertions(2);

    render(<FormInput {...formInputProps} />);

    expect(screen).toMatchSnapshot();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
  });

  it("should render a shrunk label when the input has a value", () => {
    expect.assertions(3);

    render(<FormInput {...formInputProps} />);
    const screenInput = screen.getByLabelText("Email");

    expect(screen).toMatchSnapshot();
    expect(screenInput).toBeInTheDocument();
    expect(screen.getByText(/email/i)).toHaveClass("shrink");
  });

  it("should call onChange when the input value changes", async () => {
    expect.assertions(2);

    const mockOnChange = jest.fn() as jest.Mock;
    render(<FormInput onChange={mockOnChange} />);

    await userEvent.type(screen.getByRole("textbox"), "Hello");

    expect(screen).toMatchSnapshot();
    expect(mockOnChange).toHaveBeenCalled();
  });
});
