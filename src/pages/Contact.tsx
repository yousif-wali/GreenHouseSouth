"use client";
import { useState } from "react";
import Server from "./../Server.tsx";

export default function Contact() {
    const [form, setForm] = useState({
        Email: '',
        Subject: '',
        Message: '',
        Key: "Contact"
    });

    const handleChange = (e : any) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const validateForm = () => {
        const { Email, Subject, Message } = form;
        if (!Email || !Subject || !Message) {
            alert("Please fill in all fields before submitting.");
            return false;
        }
        return true;
    };

    const SendingContact = async () => {
        if (validateForm()) {
            await Server.post("/index.php", form)
                .then((res: any)=> window.location.reload())
                .catch((err: any)=> console.log(err.response.data));
        }
    };

    return (
        <section className="w-full min-h-[70vh]" style={{marginTop: "100px"}}>
            <section className="contact-form flex justify-center flex-col items-center w-full">
                <h1 className="text-4xl" style={{ color: "white", textShadow: "1px 1px 2px black" }}>Contact Us</h1>
                <div className="w-full max-w-xs">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input name="Email" value={form.Email} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Email" required/>
                    </div>
                    <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subject">
                        Subject
                    </label>
                    <input name="Subject" value={form.Subject} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="subject" type="text" placeholder="Subject"/>
                    </div>
                    <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Message">
                        Message
                    </label>
                    <textarea name="Message" value={form.Message} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline h-[100px]" id="Message" placeholder="Message"></textarea>
                    </div>
                    <div className="flex items-center justify-between">
                    <button onClick={SendingContact} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        Send
                    </button>
                    </div>
                </form>
                </div>
            </section>
        </section>
    );
}
