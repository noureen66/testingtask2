import { render, screen } from "@testing-library/react";
import Counter from "../components/Counter/Counter";
import userEvent from "@testing-library/user-event";
import { beforeEach } from "vitest";

describe("Counter component", () => {
    beforeEach(() => {
        render(<Counter />);
    });
    /*  beforeAll will not work
        beforeAll -> render once
        test() 1 -> works
        cleanup runs by default
        test() 2 -> it will fail because DOM is empty now
     */
  test("should be rendered with counter=0 and 3 btns", () => {
    //h1 ==> 0
    let h1 = screen.getByRole("heading");
    // 3 btns
    let btns = screen.getAllByRole("button");

    expect(h1).toHaveTextContent(0);
    expect(btns).toHaveLength(3);
  });
  test("should increase count when pressing increase btn", async () => {
    let user = userEvent.setup();
    // render(<Counter />)

    let increaseBtn = screen.getByRole("button", { name: "Increment" }); //screen.getByText(/+/)
    let decreaseBtn = screen.getByRole("button", { name: "Decrement" }); //screen.getByText(/+/)
    await user.click(increaseBtn);
    await user.click(increaseBtn);
    await user.click(decreaseBtn);
    await user.click(decreaseBtn);
    await user.click(decreaseBtn);

    let h1 = screen.getByRole("heading");
    expect(h1).toHaveTextContent(-1);
  });
});
