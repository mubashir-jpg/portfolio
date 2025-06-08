import { Revealonscroll } from "../Revealonscroll"

export const About = () => {

    const frontendskill = ["HTML", "CSS", "TAILWINDCSS", "BOOTSTRAP", "JAVASCRIPT", "REACT"]
    const backend = ["PHP", 'DATABASE', "XAMPP"]
    return <section>
        <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400  bg-clip-text  text-transparent text-center">About</h2>
            <div className="glass rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                <p className="text-gray-300 mb-6">

                    a passionate and eager-to-learn Frontend Developer. I'm currently focusing on mastering HTML, CSS, Tailwind CSS, JavaScript, and React. I love creating clean, responsive, and user-friendly websites. My goal is to build intuitive web experiences while continually improving my skills and knowledge in web development. I'm excited to take on new challenges and grow as a developer!

                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Frontend</h3>
                        <div className="flex flex-wrap gap-2">
                            {frontendskill.map((skill, key) => (
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-50/20 hover:shodow-[0_2px_8px_rbga(50,130,246,0.2)] transition">
                                    {skill}
                                </span>
                            ))}
                        </div>

                    </div>
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">backend</h3>
                        <div className="flex flex-wrap gap-2">
                            {backend.map((tech, key) => (
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-50/20 hover:shodow-[0_2px_8px_rbga(50,130,246,0.2)] transition">
                                    {tech}
                                </span>
                            ))}
                        </div>

                    </div>
                </div>


            </div>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mt-8">
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                    <  h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400  bg-clip-text  text-transparent text-center">Education</h2>
                    <ul className="list-disc list-inside text-gray-between space-y-2">
                        <li>
                            <strong>Computer Science student currently in my 6th semester of a BS in Computer Science at Abdul Wali Khan University Mardan. </strong> <strong>
                                I started my journey in 2022, and I’m set to graduate in 2026. During my time at university, I’ve developed a strong interest in web development, and I’m currently learning HTML, CSS, Tailwind CSS, JavaScript, and React. I’m passionate about creating user-friendly websites and continually improving my skills to become a proficient frontend developer.</strong>
                        </li>
                        <li>
                            Relevant coursework:: C++, OOP, DSA, DATABASE, WEB Devolpment
                        </li>
                    </ul>
                </div>
            </div>

        </div>

    </section>
}
