import React from "react";

const handleSubmit = (e) => {
  e.preventDefault()
}

const Contact = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen p-4">
      <form onSubmit={() =>handleSubmit()} action="https://getform.io/f/62361dba-f3a8-45ac-991f-56140551ede9" method="POST" className="flex flex-col max-w-[600px] w-full">
        <div className="pb-8">
          <p className="text-3xl font-bold">Contact Me</p>
          <p>Fill the form below or send me a mail - benjaminrenny@gmail.com</p>
        </div>
        <input className="p-2 bg-gray-300" type="text" placeholder="Name" />
        <input className="p-2 my-4 bg-gray-300" type="email" placeholder="Email" />
        <textarea className="p-2 bg-gray-300" name="message" rows="5" placeholder="Message" ></textarea>
        <button className="px-4 py-3 font-bold text-black bg-cyan-700">Let's Link Up</button>
      </form>
    </div>
  );
};

export default Contact;
