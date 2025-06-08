export const Project = () => {
    return (
        <section className="min-h-screen flex items-center justify-center py-20">
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl mb-8 font-bold bg-gradient-to-r text-center from-blue-500 to-cyan-400  bg-clip-text text-transparent leading-right">Featured projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      
              <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rbga(59,130,246,0.2)] transition">
              <h3 className="text-center mb-2 font-bold">Ecommerce</h3>
              <p>Developed key eCommerce functionalities for practice, including dynamic product 
                        display, search, reviews, shopping cart, and user authentication. Integrated random product generators and
                         recommendation systems using APIs to enhance interactivity and user experience.</p>
            

                    <div >
                     {["html" ,"bootstrap" ,"react"].map((tech, key)=>(


        <span key={key}className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full cursor-pointer text-sm hover:bg-blue-50/20 hover:shodow-[0_2px_8px_rbga(59,130,246,0.1)] transition-all">
            {tech}
        </span>
    ))}
    </div>

     </div>

     <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rbga(59,130,246,0.2)] transition">
              <h3 className="text-center mb-2 font-bold">News Monkey </h3>
              <p>"Developed a React-based website featuring a
                 fun and interactive monkey theme. Utilized React components for dynamic rendering, 
                ensuring a smooth and engaging user experience with responsive design and modern UI elements."</p>
            

                    <div >
                     {["html" ,"css","bootstrap" ,"react"].map((tech, key)=>(


        <span key={key}className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full cursor-pointer text-sm hover:bg-blue-50/20 hover:shodow-[0_2px_8px_rbga(59,130,246,0.1)] transition-all">
            {tech}
        </span>
    ))}
    </div>

     </div>

     </div> 
                    
                
            </div>
        </section>
    )
}