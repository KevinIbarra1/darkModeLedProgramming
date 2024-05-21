import React, { useState } from "react";
import emailjs from "emailjs-com";

export default function ContactoSectionContactDarkReverse4() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_9c4qhrq",
        "template_h5pcn0j",
        formData,
        "nDhuH3_PmLmIHYTUW"
      )
      .then((response) => {
        alert("Message sent successfully!");
      })
      .catch((error) => {
        alert("Error sending message: ", error);
      });
  };

  return (
    <React.Fragment>
      <section className="py-10 bg-gray-800 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="py-16 px-8 bg-gray-900 overflow-hidden rounded-3xl">
            <div className="max-w-5xl mx-auto">
              <div className="mb-10 md:max-w-md mx-auto text-center">
                <span className="inline-block mb-4 text-sm text-blue-500 font-bold uppercase tracking-widest">
                  Contact Us
                </span>
                <h2 className="font-heading mb-6 text-4xl md:text-5xl lg:text-6xl text-white font-black tracking-tight">
                  Get connected
                </h2>
                <p className="text-gray-400 font-bold">
                  Have questions? Send us a message and well get back to you as
                  soon as possible.
                </p>
              </div>
              <form
                className="p-10 bg-gray-800 rounded-3xl"
                onSubmit={handleSubmit}
              >
                <div className="flex flex-wrap -m-5 mb-1">
                  <div className="w-full md:w-1/2 p-5">
                    <label
                      className="block mb-2 text-sm text-gray-500 font-bold"
                      htmlFor="contactDarkReverseInput2-1"
                    >
                      Full Name
                    </label>
                    <input
                      className="appearance-none px-6 py-3.5 w-full text-lg text-gray-500 font-bold bg-gray-900 placeholder-gray-500 outline-none focus:ring-4 focus:ring-blue-200 rounded-full"
                      id="contactDarkReverseInput2-1"
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="w-full md:w-1/2 p-5">
                    <label
                      className="block mb-2 text-sm text-gray-500 font-bold"
                      htmlFor="contactDarkReverseInput2-2"
                    >
                      Email address
                    </label>
                    <input
                      className="appearance-none px-6 py-3.5 w-full text-lg text-gray-500 font-bold bg-gray-900 placeholder-gray-500 outline-none focus:ring-4 focus:ring-blue-200 rounded-full"
                      id="contactDarkReverseInput2-2"
                      type="email"
                      name="email"
                      placeholder="Email address"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -m-5">
                  <div className="w-full md:w-1/2 p-5">
                    <label
                      className="block mb-2 text-sm text-gray-500 font-bold"
                      htmlFor="contactDarkReverseInput2-3"
                    >
                      Phone
                    </label>
                    <input
                      className="appearance-none px-6 py-3.5 w-full text-lg text-gray-500 font-bold bg-gray-900 placeholder-gray-500 outline-none focus:ring-4 focus:ring-blue-200 rounded-full"
                      id="contactDarkReverseInput2-3"
                      type="text"
                      name="phone"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="w-full md:w-1/2 p-5">
                    <label
                      className="block mb-2 text-sm text-gray-500 font-bold"
                      htmlFor="contactDarkReverseInput2-4"
                    >
                      Subject
                    </label>
                    <input
                      className="appearance-none px-6 py-3.5 w-full text-lg text-gray-500 font-bold bg-gray-900 placeholder-gray-500 outline-none focus:ring-4 focus:ring-blue-200 rounded-full"
                      id="contactDarkReverseInput2-4"
                      type="text"
                      name="subject"
                      placeholder="Type your subject"
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -m-3.5">
                  <div className="w-full p-3.5">
                    <label
                      className="block mb-2 text-sm text-gray-500 font-bold"
                      htmlFor="contactDarkReverseInput2-5"
                    >
                      Message
                    </label>
                    <textarea
                      className="appearance-none px-6 py-5 w-full text-lg text-gray-500 font-bold bg-gray-900 placeholder-gray-500 outline-none focus:ring-4 focus:ring-blue-200 rounded-3xl"
                      id="contactDarkReverseInput2-5"
                      name="message"
                      rows={8}
                      placeholder="Enter your message"
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="w-full p-3.5">
                    <div className="flex flex-wrap items-center -m-2">
                      <div className="w-full md:w-1/2 p-2">
                        <div className="flex flex-wrap md:justify-end -m-2">
                          <div className="w-full md:w-auto p-2">
                            <button
                              type="submit"
                              className="block w-full px-8 md:px-16 py-3.5 text-lg text-center text-white font-bold bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-200 rounded-full"
                            >
                              Send Message
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
