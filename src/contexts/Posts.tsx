import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../api";

export type PostsType = {
    title: string,
    body: string,
    created_at: string,
    comments: number,
    html_url: string,
    number: string,
    user: {
        login: string
    }
}

type PostProps = {
    getRepos: (query?: string) => Promise<void>;
    posts: PostsType[];
}

export const PostContext = createContext({} as PostProps)

type childrenProps = {
    children: ReactNode
}

export function PostProvider({ children }: childrenProps) {

    const [posts, setPosts] = useState<PostsType[]>([])


    async function getRepos(query: string = "") {
        const response = await api.get('/search/issues', {
            params: {
                q: `${query}repo:rocketseat-education/reactjs-github-blog-challenge`
            }
        })

        setPosts(response.data.items)

    }


    useEffect(() => {
        getRepos()
    }, [])


    return (
        <PostContext.Provider
            value={{ getRepos, posts }}>
            {children}
        </PostContext.Provider>
    )
}

