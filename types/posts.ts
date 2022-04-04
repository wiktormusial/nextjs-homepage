export interface Post {
    content: string,
    createdAt: string,
    publishedAt: string,
    title: string,
}

export interface PostPayload {
    data: {
        attributes: Post
        id: number
    }[]
}