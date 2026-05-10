import { http, HttpResponse } from "msw";
import { setupServer } from 'msw/node'

const handlers=[
    http.get("https://api.chucknorris.io/jokes/random",()=>{
        return HttpResponse.json({value:"hahaha"},{status:200})
    }),
    // http.post("",()=>{

    // })
]

export const server=setupServer(...handlers)