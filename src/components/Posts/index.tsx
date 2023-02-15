import { Link } from 'react-router-dom'
import * as C from './styles'

export function Posts() {
    return (
        <C.Container>
            <div className="container-posts">
                <div className="post">
                    <div className="header">
                        <h2>
                            <Link to="/post">
                                JavaScript data types and<br></br> data structures
                            </Link>
                        </h2>
                        <span>Há 1 dia</span>
                    </div>
                    <div className="content">
                        <p>Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in </p>
                    </div>
                </div>

                <div className="post">
                    <div className="header">
                        <h2> <Link to="/post">
                            JavaScript data types and<br></br> data structures
                        </Link></h2>
                        <span>Há 1 dia</span>
                    </div>
                    <div className="content">
                        <p>Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in </p>
                    </div>
                </div>

                <div className="post">
                    <div className="header">
                        <h2> 
                            <Link to="/post">
                            JavaScript data types and<br></br> data structures
                        </Link></h2>
                        <span>Há 1 dia</span>
                    </div>
                    <div className="content">
                        <p>Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in </p>
                    </div>
                </div>

                <div className="post">
                    <div className="header">
                        <h2> 
                            <Link to="/post">
                            JavaScript data types and<br></br> data structures
                        </Link></h2>
                        <span>Há 1 dia</span>
                    </div>
                    <div className="content">
                        <p>Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in </p>
                    </div>
                </div>
            </div>



        </C.Container>
    )
}