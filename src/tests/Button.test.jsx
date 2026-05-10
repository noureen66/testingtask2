import { render, screen } from "@testing-library/react";
import Button from "../components/Button/Button"
import { expect, vi } from "vitest";
import userEvent from "@testing-library/user-event";

describe("Button component",()=>{
    test("should be rendered",()=>{
        //render component
        render(<Button >click me</Button>)
        //access DOM
       let btn= screen.getByRole("button")
        //assert
        expect(btn).toBeInTheDocument()
        expect(btn).toHaveTextContent("click me")
    })
    test("should invoke click handler after firing event",async()=>{
        let user= userEvent.setup()
        //passing click handler
        let fakeHandler= vi.fn()
        //render
        render(<Button onClick={fakeHandler}>click me</Button>)
        expect(fakeHandler).not.toHaveBeenCalled()
        
        //firing click
        let btn= screen.getByRole("button")
        await user.click(btn)
        //assert
        expect(fakeHandler).toHaveBeenCalled()
    })
})