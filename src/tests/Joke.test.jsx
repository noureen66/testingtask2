import { render, screen, waitFor } from "@testing-library/react"
import JokeFetcher from "../components/Joke/Joke"
import { afterAll, beforeAll } from "vitest"
import { server } from "../mocks/server"

describe("Joke component",()=>{
   beforeAll(()=>{
    server.listen()
   })
   afterAll(()=>{
    server.close()
   })
    test("should be rendered",async()=>{

        render(<JokeFetcher />)

        let h1=screen.queryByRole("heading")
        expect(h1).toHaveTextContent(/loading/i)

        //         expect(h1).toHaveTextContent(/haha/i)//error xxxxxxxxx
        
        //1
    //    await waitFor(()=>{
    //         expect(h1).toHaveTextContent(/haha/i)
    //     })
        //2
        expect(await screen.findByRole("heading")).toHaveTextContent(/haha/i)
    })

})
