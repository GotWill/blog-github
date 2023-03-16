import * as C from './styles'
import { ArrowSquareOut, GithubLogo, Buildings, Users } from 'phosphor-react'
import { Link } from 'react-router-dom'
import { api } from '../../api'
import { useState } from 'react'

type User = {
    avatar_url: string;
    name: string;
    followers: number;
    html_url: string;
    login: string;
    company: string;

}

export function CardResume() {

    const [user, setUser] = useState({} as User)

    api.get('/users/GotWill').then((response) => {
        setUser(response.data)
    })

  

    return (
        <C.ResumeCard>
          
                return (
                    <div className="card">
                        <div className="info">
                            <div>
                                <img src={user.avatar_url} alt={user.name} />
                            </div>
                            <div className='text'>
                                <h2>{user.name}</h2>
                                <p>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</p>

                                <div className='icons'>
                                    <div>
                                        <GithubLogo size={24} color="#3A536B" />
                                        <span>{user.login}</span>
                                    </div>
                                    <div>
                                        <Buildings size={24} color="#3A536B" />
                                        <span>{user.company}</span>
                                    </div>
                                    <div>
                                        <Users size={24} color="#3A536B" />
                                        <span>{user.followers} seguidores</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <Link to={user.html_url} className='link'>
                                    GITHUB
                                    <ArrowSquareOut size={18} />
                                </Link>

                            </div>
                        </div>
                    </div>
                )
     

        </C.ResumeCard>
    )
}