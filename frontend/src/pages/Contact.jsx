import React from 'react'

const Contact = () => {
  return (
    <div className="max-w-xl mx-auto py-10 px-4 text-gray-700">
      <h1 className="prata-regular text-3xl font-bold mb-6 text-center">Contact Us</h1>
      <p className="mb-6 text-center text-gray-500">
        We'd love to hear from you! Whether you have questions, feedback, or need support, please reach out using the form below or via our contact details.
      </p>
      <form className="space-y-5">
        <div>
          <label className="block mb-1 font-semibold" htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring"
            placeholder="Your Name"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold" htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring"
            placeholder="you@example.com"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold" htmlFor="message">Message</label>
          <textarea
            id="message"
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring"
            rows="4"
            placeholder="Type your message here..."
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
        >
          Send Message
        </button>
      </form>
      <div className="mt-8 text-center text-gray-600">
        <p>Email: <b>contact@astrapewear.com</b></p>
        <p>Phone: <b>+1-212-456-7890</b></p>
        <p>Address: 123 Fashion Ave, New York, NY 10001</p>
      </div>
    </div>
  )
}

export default Contact