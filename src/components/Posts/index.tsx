import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { PostContext } from '../../contexts/Posts'
import * as C from './styles'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'





export function Posts() {
    const { posts } = useContext(PostContext)

    return (
        <C.Container>
            <div className="container-posts">

                {posts.length > 0 && posts.map((post) => {
                    return (
                        <div className="post" key={post.number}>
                            <div className="header">
                                <h2>
                                    <Link to={`post/${post.number}`} >
                                        {post.title}
                                    </Link>
                                </h2>
                                <span>{formatDistanceToNow(new Date(post.created_at), { addSuffix: true, locale: ptBR })}</span>
                            </div>
                            <div className="content">
                                <p>
                                    {post.body}
                                </p>
                            </div>
                        </div>
                    )
                })}

            </div>



        </C.Container>
    )
}