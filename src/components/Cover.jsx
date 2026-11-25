import Page from './Page'
import Hero from './Hero'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
function Cover() {
    return (
        <Page>
            <Hero name="Anthony Villalobos" pet="panda" />   
            <div className= "mt-auto flex justify-center gap-6">
                <a href="https://github.com/villaloban" target="_blank" rel="noopener noreferrer"
                
                className="flex items-center gap-1 hover:text-zinc-500 transition-colors">
                    <FaGithub /> GitHub
                </a>
                <a href="https://www.linkedin.com/in/anthony-villo" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-zinc-500 transition-colors">
                    <FaLinkedin /> LinkedIn
                </a>
                <a href="mailto:anthony.villalobos.epinoza@gmail.com"
                className="flex items-center gap-1 hover:text-zinc-500 transition-colors">
                    <MdEmail /> Email
                </a>

            </div>
        </Page>
    )
}

export default Cover

