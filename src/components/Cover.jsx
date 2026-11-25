import Page from './Page'
import Hero from './Hero'
function Cover() {
    return (
        <Page>
            <Hero name="Anthony Villalobos" pet="panda" />   
            <p className= "mt-auto text-center">GitHub · LinkedIn · Email</p>
        </Page>
    )
}

export default Cover

