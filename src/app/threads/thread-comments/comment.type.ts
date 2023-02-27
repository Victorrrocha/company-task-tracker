export type ThreadComment = {
    parentId: number,
    id: number,
    author: string,
    message: string,
    repliesId: number[]
}