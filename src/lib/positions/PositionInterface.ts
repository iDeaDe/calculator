enum PositionStatus {
    Active,
    Inactive,
    Deleted
}

interface PositionInterface {
    id: number,
    name: string,
    cost: number,
    unit: string,
    status: PositionStatus
}

export { PositionInterface, PositionStatus };