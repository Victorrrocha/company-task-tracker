import { ThreadComment } from "../threads/thread-comments/comment.type";


export const Comments: ThreadComment[] = [
    {
        parentId: '1',
        id: '32',
        author: 'Kevin Feige',
        message: 'This is a comment',
        repliesId: ['33']
    },
    {
        parentId: '32',
        id: '33',
        author: 'Pedro Pascal',
        message: 'This is the way',
        repliesId: ['36']
    },
    {
        parentId: '33',
        id: '36',
        author: 'Victor Rocha',
        message: 'The reply of a reply',
        repliesId: []
    },
    {
        parentId: '1',
        id: '45',
        author: 'Joel',
        message: 'Show\'s gonna last 3 weeks',
        repliesId: ['46']
    },
    {
        parentId: '45',
        id: '46',
        author: 'Abed',
        message: 'Six seasons and a movie!',
        repliesId: []
    }
]