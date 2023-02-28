export type ThreadComment = {
    parentId: string,
    id: string,
    author: string,
    message: string,
    repliesId: string[]
}