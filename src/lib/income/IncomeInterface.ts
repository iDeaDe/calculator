
interface IncomeInterface {
    count: number,
    sum: number,
    date: string,
    child?: IncomeInterface
}

export { IncomeInterface };