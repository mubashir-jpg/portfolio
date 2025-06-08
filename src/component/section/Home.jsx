import { Revealonscroll } from "../Revealonscroll"

export const Home = () => {

    return <section id="Home" className="min-h-screen flex items-center justify-center relative">
         {/* <Revealonscroll> */}
        <div className="text-center z-10 px-14">

        <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400  bg-clip-text text-transparent leading-right">
  Hi, I am a React Developer
</h2>

            <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
                I am passionate about creating interactive and dynamic user interfaces. I specialize in using React.js to build responsive web applications with a focus on clean code, performance, and user experience. Eager to grow my skills, I am committed to delivering high-quality solutions while learning and adapting to new technologies."
            </p>
            <div className="flex justify-center space-x-4">
                <a href="3Project" className="bg-blue-500 text-white py-3 px-6 rounded font-meadium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow[0_0_15px_rbga(59, 130, 246, 0.4)]">Views Project</a>

                <a href="3Contact" className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medim transition-all duration-200 hover:-translate-y-0.5 hover:shadow[0_0_15px_rbga(59, 130, 246, 0.4)] hover:bg-blue-500/10">Contact Me</a>
                
            </div>
        </div>
        {/* </Revealonscroll> */}
    </section>

}