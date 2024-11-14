import React from 'react'
import { toast } from 'react-toastify';
import {motion} from "motion/react"

function Contact() {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "0cdf400a-0dec-4b61-9cf5-d58236260b7c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Form Submitted Succesfully")
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.messsage)
      setResult("");
    }
  };
  return (
    <motion.div
    initial={{opacity:0, x:-200}}
    transition={{duration:1.5}}
    whileInView={{opacity:1, x:0}}
    viewport={{once:true}}
    className='text-center p-6 py-20 lg:px-32 w-full overflow-hidden' id='Contact'>
         <h1 className='text-2xl sm:text-4xl text-center font-bold mb-2'>
        Contact<span className='underline underline-offset-4 decoration-1 under font-light'>With Us</span>
      </h1>
      <p className='text-gray-500 max-w-80 mb-8 text-center mx-auto'>
        Ready to Make a Move? Build Your Future Togethger
      </p>
      <form onSubmit={onSubmit} className='max-w-2xl mx-auto text-gray-600 pt-8'>
        <div className='flex flex-wrap'>
          <div className='w-full md:w-1/2 text-left' >Your Name
          <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2' type="text" name='Name'  placeholder='Your Name' required/>
          </div>
          <div className='w-full md:w-1/2 text-left md:pl-4' >Your Email
          <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2' type="email" name='Email'  placeholder='Your Email' required/>
          </div>
        </div>
        <div className='my-6 text-left'>
          Messsage
          <textarea className='w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none' name="Message" placeholder='Message' required></textarea>     
        </div>
        <button className='mb-10 px-10 py-2 rounded bg-blue-600 text-white'>{result ? result : "Send Message"}</button>
      </form>
    </motion.div>
  )
}

export default Contact