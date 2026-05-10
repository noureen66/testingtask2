import calculateHeroStrengthPower from "../utils/heroStrength";

describe("calculateHeroStrengthPower function",()=>{
    test("should return (weak) when strength = 9",()=>{
        expect(calculateHeroStrengthPower(9)).toContain("weak")
    })
    test("should return (strong) when strength = 10",()=>{
        expect(calculateHeroStrengthPower(10)).toContain("strong")
    })
    test("should return (strong) when strength = 19",()=>{
        expect(calculateHeroStrengthPower(19)).toMatch(/strong/i)
    })
    test("should return (unbelievable) when strength = 20",()=>{
        expect(calculateHeroStrengthPower(20)).toMatch(/unbelievable/i)
    })
    test("should return (unbelievable) when strength = 22",()=>{
        expect(calculateHeroStrengthPower(22)).toMatch(/unbelievable/i)
    })
})