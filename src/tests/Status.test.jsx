import { render, screen, fireEvent } from "@testing-library/react";
import Status from "../tests/lab/Status";

describe("Status component", () => {
  test('should render "🔴 Offline" initially', () => {
    render(<Status />);
    expect(screen.getByText("🔴 Offline")).toBeInTheDocument();
  });

  test('should switch to "🟢 Online" when clicked once', () => {
    render(<Status />);
    fireEvent.click(screen.getByText("Toggle Status"));
    expect(screen.getByText("🟢 Online")).toBeInTheDocument();
  });

  test('should switch back to "🔴 Offline" when clicked twice', () => {
    render(<Status />);
    const btn = screen.getByText("Toggle Status");

    fireEvent.click(btn);
    fireEvent.click(btn);

    expect(screen.getByText("🔴 Offline")).toBeInTheDocument();
  });
});
