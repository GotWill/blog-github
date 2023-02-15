import * as C from './styles'
import ImgCover from '../../assets/cover.png'
import { Link } from 'react-router-dom'
import { ArrowSquareOut, CalendarBlank, CaretLeft, ChatCircle, GithubLogo } from 'phosphor-react'


export function Post() {
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
                        <Link to="">
                            VER NO GITHUB
                            <ArrowSquareOut size={18} />
                        </Link>
                    </div>

                    <div className="content">
                        <h2>JavaScript data types and data structures</h2>
                        <div className='icons'>
                            <div>
                                <GithubLogo size={24} color="#7B96B2" />
                                <span>GotWill</span>
                            </div>
                            <div>
                                <CalendarBlank size={24} color="#7B96B2" />
                                <span>Há 1 dia</span>
                            </div>
                            <div>
                                <ChatCircle size={24} color="#7B96B2" />
                                <span>5 comentários</span>
                            </div>
                        </div>
                    </div>
                </div>
            </C.ContainerResumeCard>

            <C.AreaDescription>
                <p>
                    Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.
                </p>
                <div className="link">
                    <Link to="">
                        Dynamic typing
                    </Link>
                    <p>
                    JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:

                    </p>
                </div>

                <div className="box">
                    
                </div>

            </C.AreaDescription>
        </C.Container>
    )
}