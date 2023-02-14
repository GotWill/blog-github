import * as C from './styles'
import { ArrowSquareOut, GithubLogo, Buildings, Users } from 'phosphor-react'
import { Link } from 'react-router-dom'

export function CardResume(){
    return (
        <C.ResumeCard>
        <div className="card">
            <div className="info">
                <div>
                    <img src="https://avatars.githubusercontent.com/u/76708242?v=4" alt="" />
                </div>
                <div className='text'>
                    <h2>Willian Pereria</h2>
                    <p>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</p>

                    <div className='icons'>
                        <div>
                        <GithubLogo size={24} color="#3A536B" />
                            <span>GotWill</span>
                        </div>
                        <div>
                         <Buildings size={24} color="#3A536B"/>
                         <span>LewaGon</span>
                        </div>
                        <div>
                        <Users size={24} color="#3A536B"/>
                        <span>32 seguidores</span>
                        </div>
                    </div>
                </div>
                <div>
                    <Link to="" className='link'>
                            GITHUB
                        <ArrowSquareOut size={18} />
                    </Link>
                   
                </div>
            </div>
        </div>
    </C.ResumeCard>
    )
}