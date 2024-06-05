import { useState } from "react";
import Server from "../Server.tsx";

export default function Appointment() {
    const [form, setForm] = useState({
        Name: '',
        Email: '',
        Time: '',
        Detail: '',
        Key: 'Consulting'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const validateForm = () => {
        const { Name, Email, Time, Detail } = form;
        if (!Name || !Email || !Time || !Detail) {
            alert("Please fill in all fields before submitting.");
            return false;
        }
        return true;
    };

    const sendConsult = async () => {
        if (validateForm()) {
            await Server.post("/index.php", form)
                .then(res => window.location.reload())
                .catch(err => console.log(err.response.data));
        }
    };

    return (
        <section>
            <section className="d-flex flex-column justify-content-center align-items-center w-[50%] ms-auto me-auto min-h-[100vh]">
                <h1 className="text-white text-4xl">Make an appointment with us</h1>
                <section className="form-control consulting-form p-4">
                    <section className="form-floating mt-3">
                        <input
                            id="name"
                            type="text"
                            name="Name"
                            value={form.Name}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="i"
                            required
                        />
                        <label htmlFor="name">Your Name:</label>
                    </section>
                    <section className="form-floating mt-3">
                        <input
                            id="email"
                            type="email"
                            name="Email"
                            value={form.Email}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="i"
                            required
                        />
                        <label htmlFor="email">Your Email:</label>
                    </section>
                    <section className="form-control mt-3">
                        <label>Pick best time</label>
                        <input
                            type="datetime-local"
                            className="ms-3 rounded"
                            name="Time"
                            value={form.Time}
                            onChange={handleChange}
                            required
                        />
                    </section>
                    <section className="form-floating mt-3">
                        <textarea
                            id="detail"
                            className="form-control"
                            name="Detail"
                            value={form.Detail}
                            onChange={handleChange}
                            placeholder="i"
                            style={{ height: "150px" }}
                            required
                        ></textarea>
                        <label htmlFor="detail">Give us some detail:</label>
                    </section>
                    <button className="btn btn-success mt-3" onClick={sendConsult}>Get Free Consulting</button>
                </section>
            </section>
        </section>
    );
}
