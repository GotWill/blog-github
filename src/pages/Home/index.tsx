import * as C from './styles'
import ImgCover from '../../assets/cover.png'
import { CardResume } from '../../components/CardResume'


export function Home() {
    return (
        <C.Container>
            <header>
                <img src={ImgCover} alt="" />
            </header>

            <CardResume/>
        </C.Container>
    )
}