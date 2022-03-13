
enum IncomeStatus {
    Active,
    Inactive,
    Deleted
}

interface IncomeInterface {
    id: number,
    count: number,
    positionId: number,
    date: string
    status: IncomeStatus
}

export { IncomeInterface, IncomeStatus };