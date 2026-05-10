import { render, screen } from "@testing-library/react"
import Heroes from "../components/Heroes/Heroes"
import { expect } from "vitest"

describe("Heroes component",()=>{

    test("should be rendered without props",()=>{
        render(<Heroes />)

        let p= screen.getByRole("paragraph")
        expect(p).toHaveTextContent(/no heroes/i)
        let ul= screen.queryByRole("list")
        expect(ul).not.toBeInTheDocument()

    })
    test("should be rendered with props",()=>{
        let heroes=[
            {id:10,name:"super man",strength:20},
            {id:11,name:"bat man",strength:13},
        ]
        render(<Heroes heroes={heroes}/>)

        let p= screen.queryByRole("paragraph")
        expect(p).not.toBeInTheDocument()
        let ul= screen.queryByRole("list")
        expect(ul).toBeInTheDocument()
        let liTags= screen.queryAllByRole("listitem")
        expect(liTags).toHaveLength(heroes.length)
        expect(liTags[0]).toHaveTextContent(heroes[0].name)
    })

})
