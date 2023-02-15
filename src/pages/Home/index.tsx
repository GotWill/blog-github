import * as C from './styles'
import ImgCover from '../../assets/cover.png'
import { CardResume } from '../../components/CardResume'
import { NewForm } from '../../components/NewForm'
import { Posts } from '../../components/Posts'


export function Home() {
    return (
        <C.Container>
            <header>
                <img src={ImgCover} alt="" />
            </header>

            <CardResume/>
            <NewForm/>
            <Posts/>
        </C.Container>
    )
}