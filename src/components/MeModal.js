import styled from 'styled-components'
import myPhoto from '../images/photo_of_my_self.png'

const Modal = styled.div`
    background-color: rgba(255, 255, 255, 0.815);
    display: flex;
    flex-flow: row;
    margin-left: 17em;
    margin-right: 17rem;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
`

const About = styled.div`
    display: flex;
    flex-flow: column;
    margin-top: 1.5rem;
    margin-bottom: 4rem;
    margin-left: 1.5rem;
    margin-right: 3rem;
    align-items: center;
`

const Intro = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    margin-right: 7.5rem;
    margin-left: 3rem;
    justify-content: center;
    gap: 1.5rem;
`

const Img = styled.img`
    width: 310px;
    height: auto;
    margin-bottom: 1.5rem;
    margin-left: 6rem;
    margin-right: 6rem;
`

const H1 = styled.h1`
    color: var(--text--color--black-color);
    font-family: var(--text--wght100-font-family);
    font-weight: 100;
    text-transform: uppercase;
    font-size: 50px;
    margin-bottom: 1.5rem;
`

const AboutP = styled.p`
    color: var(--text--color--black-color);
    font-family: var(--text--wght100-font-family);
    font-weight: 100;
    font-size: 15px;
`

const AboutSpan = styled.span`
    color: var(--profile--photo-color);
    border-bottom: 1px solid var(--profile--photo-color);
`

const AboutA = styled.a`
    text-decoration: none;

    &:hover ${AboutSpan} {
        transition: 0.7s;
        color: var(--text--color--grey-color);
        border-color: var(--text--color--grey-color);
    }
`

const FirstText = styled.p`
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    color: var(--text--color--grey-color);
    font-family: var(--text--wght900-font-family);
    font-weight: 900;
`

const SecondText = styled.p`
    font-size: 18px;
    line-height: 36px;
    text-align: center;
    letter-spacing: -0.04em;
    color: var(--text--color--light__grey-color);
    font-family: var(--text--wght100-font-family);
    font-weight: 100;
`

const Socials = styled.div`
    display: flex;
    gap: 1.5rem;
    margin-bottom: 1.5rem;
`

const I = styled.i`
    color: black;
    font-size: 30px;
    &:hover {
        transition: .7s;
        color: var(--color--light_orange-color);
    }
`

const Arrows = styled.div`
    display: flex;
    flex-flow: column;
    margin-top: 3.5rem;
`

const Arrow = styled.i`
    font-size: 40px;
    color: rgba(51, 51, 51, 0.473);
`

function MeModal() {
    return (
        <>
        <Modal>
            <About>
                <Img src={myPhoto} alt="Photo of myself" />
                <H1>Michael Hajn??</H1>
                <AboutP>student of <AboutA href="https://www.inf.upol.cz/">
                    <AboutSpan>Palacky University</AboutSpan>
                </AboutA>
                </AboutP>
            </About>
            <Intro>
                <FirstText>Pov??dom?? o v??lce a jejich hr??zach mi dal Remarque, jemnou du??i poezie ve mn?? vyp??stovali dva Karlov?? (Erben, M??cha), minulost??, p????tomnost?? a budoucnost?? m?? provedl Harari, Peterson m?? nau??il uv??dom??losti a Mathew Wallker mi dal d??vody pro?? sp??t. </FirstText>
                <SecondText>Nejsou tu v??ichni a nikdy ani nebudou .. je jich moc pro ??vod t??chto str??nek a nemysl??m si, ??e tento seznam autor??, kte???? mi n??co dali bude v horizontu m??ho ??ivota kone??n?? (pak se kone??n??m stane) a nem??lo by smysl jej neust??l?? akatualizovat. Kde v??ak v??ichni jsou, alespon ????ste??n?? je prosotr moj?? hlavy. </SecondText>
                <Socials>
                    <a href="https://discord.gg/HxbxK5Fn">
                        <I className="fab fa-discord" />
                    </a>
                    <a href="https://github.com/3n0wd3n">
                        <I className="fab fa-github" />
                    </a>
                    <a href="https://replit.com/@MichalHajny">
                        <I className="fab fa-replyd" />
                    </a>
                    <a href="https://open.spotify.com/playlist/21xbphk2DeMQ30MKT0XqSy?si=dbe8df021ee34f0e">
                        <I className="fab fa-spotify" />
                    </a>
                    <a href="https://www.youtube.com/feed/channels">
                        <I className="fab fa-youtube" />
                    </a>
                    <a href="https://twitter.com/HajnyMichael">
                        <I className="fab fa-twitter" />
                    </a>
                </Socials>
            </Intro>
        </Modal>
        <Arrows>
            <Arrow className="fas fa-chevron-down" />
            <Arrow className="fas fa-chevron-down" />
        </Arrows>
        </>
    )
}

export default MeModal
