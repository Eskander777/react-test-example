import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting component", function () {
  test("renders Hello World as a text", function () {
    // Arrange
    render(<Greeting />);

    // Act
    // ...nothing

    // Assert
    const helloWorldElement = screen.getByText(/hello world/i);
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders 'It's good to see you!' if the button was not clicked", function () {
    render(<Greeting />);

    const goodToSeeYouEl = screen.getByText("good to see you", {
      exact: false,
    });
    expect(goodToSeeYouEl).toBeInTheDocument();
  });

  test("renders 'Changed!' if the button was clicked", function () {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // Assert
    const changedEl = screen.getByText("changed", {
      exact: false,
    });
    expect(changedEl).toBeInTheDocument();
  });

  test("does not renders 'It's good to see you!' if the button was clicked", function () {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // Assert
    const goodToSeeYouEl = screen.queryByText("good to see you", {
      exact: false,
    });
    expect(goodToSeeYouEl).toBeNull();
  });
});
