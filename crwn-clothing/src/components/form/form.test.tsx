import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { mockAlert } from "setupTests";
import Form, { FormProps, FormType } from "./form";

const mockedFormProps = {
  onSubmit: jest.fn() as jest.Mock,
  formFields: [
    {
      type: "email",
      name: "email",
      required: true,
    },
    {
      type: "password",
      "data-testid": "password",
      name: "password",
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
    });

    expect(screen).toMatchSnapshot();
    expect(emailInput).toHaveValue("Hello");
  });

  it("should alert for invalid submission", async () => {
    expect.assertions(2);

    render(<Form {...mockedFormProps} />);

    await userEvent.click(screen.getByTestId("custom"));

    expect(screen).toMatchSnapshot();
    expect(mockAlert).toHaveBeenCalledWith("Please fill in all fields");
  });

  it("should alert for password mismatch", async () => {
    expect.assertions(2);

    const props = {
      ...mockedFormProps,
      formFields: [
        ...mockedFormProps.formFields,
        {
          name: "confirmPassword",
          required: true,
        },
      ],
    };
    render(<Form {...props} />);

    await userEvent.type(screen.getAllByRole("textbox")[0], "Hello");
    await userEvent.type(screen.getByTestId("password"), "World");
    await userEvent.type(screen.getAllByRole("textbox")[1], "Would");
    await userEvent.click(
      screen.getByRole("button", {
        name: /sign in/i,
      })
    );

    expect(screen).toMatchSnapshot();
    expect(mockAlert).toHaveBeenCalledWith("Passwords do not match");
  });

  it("should submit", async () => {
    expect.assertions(2);

    render(<Form {...mockedFormProps} />);
    await userEvent.type(screen.getByRole("textbox"), "Hello");
    await userEvent.click(
      screen.getByRole("button", {
        name: /sign in/i,
      })
    );

    expect(screen).toMatchSnapshot();
    expect(mockedFormProps.onSubmit).toHaveBeenCalledTimes(1);
  });
});
