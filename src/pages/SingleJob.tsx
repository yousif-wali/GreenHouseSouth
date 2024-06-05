import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Server from "../Server.tsx";

export default function SingleJob() {
  const { JobId } = useParams();
  const [data, setData] = useState({
    Id: '',
    Title: '',
    Description: '',
    MinimumRequirement: '',
    Location: '',
    Wage: ''
  });

  const [formData, setFormData] = useState({
    Name: '',
    Email: '',
    Job_Id: JobId,
    Dob: ''
  });

  const [Cv, setCv] = useState(null);

  const handleChange = (elem) => {
    const { name, value } = elem.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCV = (elem) => {
    setCv(elem.target.files[0]);
  };

  const handleSubmit = async () => {
    const fileData = new FormData();
    fileData.append("Name", formData.Name);
    fileData.append("Email", formData.Email);
    fileData.append("Job_Id", JobId);
    fileData.append("Dob", formData.Dob);
    fileData.append("CV", Cv);
    fileData.append("Key", "ApplyForAJob");

    await fetch("https://greenhousesouth.com/Server/index.php", { method: "POST", body: fileData });
    alert("You have successfully applied to this position");
    window.location.reload();
  };

  useEffect(() => {
    Server.post("/index.php", { Key: "LoadSingleJobViaId", Id: JobId })
      .then(res => setData(res.data[0]));
  }, [JobId]);

  return (
    <div className="container mx-auto mt-10 p-4">
      <h2 className="text-2xl font-bold text-green-600 mb-6">We help you start your new career</h2>

      <div className="bg-white shadow rounded-lg p-6 mb-6">
        <div className="flex justify-between items-center mb-4">
          <span className="text-xl font-semibold">{data.Title}</span>
          <span className="text-lg font-semibold text-blue-600">${data.Wage}/hr</span>
        </div>
        <div className="mb-4">
          <p className="text-gray-700">{data.Description}</p>
        </div>
        <div className="mb-4">
          <b className="block text-gray-800">Minimum Requirement</b>
          <p className="text-gray-700">{data.MinimumRequirement}</p>
        </div>
        <div>
          <b className="block text-gray-800">Location:</b>
          <p className="text-gray-700">{data.Location}</p>
        </div>
      </div>

      <div className="bg-white shadow rounded-lg p-6">
        <div className="mb-4">
          <label htmlFor="Name" className="block text-gray-700 font-semibold mb-2">Full Name:</label>
          <input
            type="text"
            name="Name"
            onChange={handleChange}
            value={formData.Name}
            placeholder="Full Name"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="Email" className="block text-gray-700 font-semibold mb-2">Email:</label>
          <input
            type="email"
            name="Email"
            onChange={handleChange}
            value={formData.Email}
            placeholder="Email"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="Dob" className="block text-gray-700 font-semibold mb-2">Date of Birth:</label>
          <input
            type="date"
            name="Dob"
            onChange={handleChange}
            value={formData.Dob}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="CV" className="block text-gray-700 font-semibold mb-2">CV:</label>
          <input
            type="file"
            accept=".pdf"
            name="CV"
            onChange={handleCV}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <button
          onClick={handleSubmit}
          className="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg mt-3"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
