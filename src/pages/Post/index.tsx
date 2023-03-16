import * as C from './styles'
import ImgCover from '../../assets/cover.png'
import { Link } from 'react-router-dom'
import { ArrowSquareOut, CalendarBlank, CaretLeft, ChatCircle, GithubLogo } from 'phosphor-react'
import { useParams } from 'react-router-dom'
import { api } from '../../api'
import { useEffect, useState } from 'react'
import { PostsType } from '../../contexts/Posts'
import ReactMarkdown from 'react-markdown'


export function Post() {
    const [postsCompleted, setPostsCompleted] = useState({} as PostsType)
    let { id } = useParams();

    async function getPosts() {
        const response = await api.get(`repos/rocketseat-education/reactjs-github-blog-challenge/issues/${id}`)
        setPostsCompleted(response.data)
    }

    useEffect(() => {
            getPosts()
    }, [])
  

    console.log(postsCompleted?.created_at)
 
    return (
        <C.Container>
            <header>
                <img src={ImgCover} alt="" />
            </header>
            <C.ContainerResumeCard>
                <div className="card">
                    <div className="header">
                        <Link to="/">
                            <CaretLeft size={24} />
                            VOLTAR
                        </Link>
                        <Link to={postsCompleted.html_url}>
                            VER NO GITHUB
                            <ArrowSquareOut size={18} />
                        </Link>
                    </div>




                    <div className="content">
                        <h2>{postsCompleted.title}</h2>
                        <div className='icons'>
                            <div>
                                <GithubLogo size={24} color="#7B96B2" />
                                <span>{postsCompleted.user?.login}</span>
                            </div>
                            <div>
                                <CalendarBlank size={24} color="#7B96B2" />
                                <span>{postsCompleted?.created_at}</span>
                            </div>
                            <div>
                                <ChatCircle size={24} color="#7B96B2" />
                                <span>{postsCompleted.comments}</span>
                            </div>
                        </div>
                    </div>



                </div>
            </C.ContainerResumeCard>

            <C.AreaDescription>

                    <C.ContentBody>

                    <ReactMarkdown children= {postsCompleted.body} />
                    </C.ContentBody>
                
                   
                    
                   
                   
                
                {/* <div className="link">
                    <Link to="">
                        Dynamic typing
                    </Link>
                    <p>
                        JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:

                    </p>
                </div> */}

                <div className="box">

                </div>

            </C.AreaDescription>
        </C.Container>
    )
}