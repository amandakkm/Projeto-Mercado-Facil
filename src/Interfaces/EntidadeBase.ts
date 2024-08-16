export interface EntidadeBase{
    id: string,
    createdAt: Date | null,
    active: boolean,
    isDeleted: boolean
}