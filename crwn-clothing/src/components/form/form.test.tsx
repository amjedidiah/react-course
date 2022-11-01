/* eslint-disable testing-library/no-debugging-utils */
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Form, { FormProps, FormType } from "./form";

const mockedFormProps = {
  onSubmit: jest.fn() as jest.Mock,
  formFields: [
    {
      type: "email",
    },
    {
      type: "password",
      "data-testid": "password",
    },
  ],
  buttons: [
    {
      type: "submit",
      value: "Sign In",
    },
  ],
  formType: "login" as keyof typeof FormType,
} as FormProps;

describe("Form", () => {
  it("should render successfully", () => {
    expect.assertions(5);

    render(<Form {...mockedFormProps} />);

    expect(screen).toMatchSnapshot();
    expect(screen.getByTestId("form")).toBeInTheDocument();
    expect(screen.getAllByRole("textbox")).toHaveLength(1);
    expect(screen.getAllByTestId("password")).toHaveLength(1);
    expect(
      screen.getByRole("button", {
        name: /sign in/i,
      })
    ).toBeInTheDocument();
  });

  it("should handle input change", async () => {
    expect.assertions(2);

    render(<Form {...mockedFormProps} />);
    const emailInput = screen.getByRole("textbox");
    await userEvent.type(emailInput, "Hello", {
        delay: 500,
    })

    expect(screen).toMatchSnapshot();
    expect(emailInput).toHaveValue("Hello");
  });

  it("should submit", async () => {
    expect.assertions(2);

    render(<Form {...mockedFormProps} />);
    await userEvent.click(
      screen.getByRole("button", {
        name: /sign in/i,
      })
    );

    expect(screen).toMatchSnapshot();
    expect(mockedFormProps.onSubmit).toHaveBeenCalledTimes(1);
  });
});
