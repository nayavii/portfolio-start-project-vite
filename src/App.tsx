import { Footer } from './layout/footer/Footer'
import { Header } from './layout/header/Header'
import { About } from './layout/sections/about/About'
import { Contacts } from './layout/sections/contacts/Contacts'
import { Experience } from './layout/sections/experience/Experience'
import { Main } from './layout/sections/main/Main'
import { Projects } from './layout/sections/projects/Projects'
import { Skills } from './layout/sections/skills/Skills'


function App() {
    return (
        <div className="App">
            <Header />
            <Main/>
            <About/>
            <Experience title='Education'/>
            <Experience title='Work History'/>
            <Skills/>
            <Projects/>
            <Contacts/>
            <Footer/>
        </div>
    )
}

export default App

