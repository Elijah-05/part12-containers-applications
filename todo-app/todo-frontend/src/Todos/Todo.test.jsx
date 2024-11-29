import { fireEvent, render, screen } from "@testing-library/react";
import { expect, test, vi } from "vitest";
import Todo from "./Todo";

test("renders a todo item and handles actions", () => {
  const todo = {
    _id: "1",
    text: "Test Todo",
    done: false,
  };

  const onDelete = vi.fn();
  const onComplete = vi.fn();

  render(<Todo todo={todo} onDelete={onDelete} onComplete={onComplete} />);

  expect(screen.getByText("Test Todo")).toBeInTheDocument();
  expect(screen.getByText("This todo is not done")).toBeInTheDocument();

  fireEvent.click(screen.getByText("Delete"));
  expect(onDelete).toHaveBeenCalled();

  fireEvent.click(screen.getByText("Set as done"));
  expect(onComplete).toHaveBeenCalled();
});
