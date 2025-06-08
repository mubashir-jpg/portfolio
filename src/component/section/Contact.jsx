import { useState } from "react";
import emailjs from "emailjs-com";

export const Conttact = () => {
    const [formdata, setformdata] = useState({
        name: "",
        email: "",
        message: ""
    });

    const service_ID = "service_bjzjfjw";
    const template_ID = "template_vx5kfma";
    const public_key = "oXtfUb1dUR-4Oab7h";

    const handlesubmit = (e) => {
        e.preventDefault(); // ✅ Fixed typo here

        emailjs.send(service_ID, template_ID, formdata, public_key)
            .then(() => {
                alert("Message sent successfully!");
                setformdata({ name: "", email: "", message: "" });
            })
            .catch(() => {
                alert("Oops! Something went wrong. Please try again.");
            });
    };

    return (
        <section id="Contact" className="max-w-5xl m-auto grid items-center my-5">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                Get In Touch
            </h2>
            <form className="space-y-2 w-full" onSubmit={handlesubmit}>
                <div className="relative">
                    <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        value={formdata.name}
                        className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                        placeholder="Name.."
                        onChange={(e) => setformdata({ ...formdata, name: e.target.value })}
                    />
                </div>
                <div className="relative">
                    <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        value={formdata.email}
                        className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                        placeholder="Email.."
                        onChange={(e) => setformdata({ ...formdata, email: e.target.value })}
                    />
                </div>
                <div className="relative">
                    <textarea
                        name="message"
                        id="message"
                        required
                        rows={5}
                        value={formdata.message}
                        className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                        placeholder="Your Message.."
                        onChange={(e) => setformdata({ ...formdata, message: e.target.value })}
                    />
                </div>
                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-3 max-w-[160px] px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px rgba(59,130,246,0.4)]"
                    >
                        Send Message
                    </button>
                </div>
            </form>
        </section>
    );
};  
