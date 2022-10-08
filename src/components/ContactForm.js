import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';

function ContactForm() {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [number, setNumber] = useState('')
    const [linkedIn, setLinkedIn] = useState('')
    const [instagram, setInstagram] = useState('')


    const form = useRef()

    const submitContact = (e) => {
        e.preventDefault()

        if (firstName === '' || lastName === '' || email === '') {
            alert('Please fill out first and last name, along with email')
            return false;
        }

        // Create and Send form info as email
        emailjs.sendForm('service_r9k171c', 'template_yggvr08', form.current, 'BsY9s3kPZSzTWeR2B')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        // Clear state
        setFirstName('')
        setLastName('')
        setEmail('')
        setMessage('')
        setNumber('')
        setLinkedIn('')
        setInstagram('')
    }

    return (
        <div id="contact" className="contact h-screen revealUp">
            <h1 className='pt-4 text-3xl'>Contact</h1>

            <p className="pt-4 pb-4 text-xs uppercase leading-snug">If you’re ready to end generational poverty in your family, leave your contact information below.</p>

            <form ref={form}>
                <div className="name flex justify-between my-2">
                    <div className="first-name grow flex flex-col">
                        <label>First name:</label>
                        <input className=' bg-primary border-2 border-secondary py-1' type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} id="fname" name="fname"/>
                    </div>

                    <div className="last-name grow ml-1 flex flex-col">
                        <label>Last name:</label>
                        <input className=' bg-primary border-2 border-secondary py-1' type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} id="lname" name="lname"/>
                    </div>
                </div>

                <div className="email flex flex-col my-2">
                    <label>Email:</label>
                    <input className=" bg-primary border-2 border-secondary py-1" type="text" value={email} onChange={(e) => setEmail(e.target.value)} id="email" name="email"/>
                </div>

                <div className="email flex flex-col my-2">
                    <label>Phone Number:</label>
                    <input className=" bg-primary border-2 border-secondary py-1" type="text" value={number} onChange={(e) => setNumber(e.target.value)} id="number" name="number"/>
                </div>

                <div className="social-media-inputs flex justify-between my-2">
                    <div className="linkedIn-input grow flex flex-col">
                        <label>LinkedIn:</label>
                        <input className=' bg-primary border-2 border-secondary py-1' type="text" value={linkedIn} onChange={(e) => setLinkedIn(e.target.value)} id="linkedIn" name="LinkedIn"/>
                    </div>

                    <div className="instagram-input grow ml-1 flex flex-col">
                        <label>Instagram:</label>
                        <input className=' bg-primary border-2 border-secondary py-1' type="text" value={instagram} onChange={(e) => setInstagram(e.target.value)} id="instagram" name="instagram"/>
                    </div>
                </div>

                <div className="message flex flex-col my-2">
                    <label>Message:</label>
                    <input className='bg-primary border-2 border-secondary py-1 h-36 resize-y' type="text" value={message} onChange={(e) => setMessage(e.target.value)} id="email" name="message"/>
                </div>

                <div className='flex'>
                    <div className='grow'>

                    </div>
                    <button className='border-2 border-secondary px-2 py-2 my-2' onClick={submitContact}>
                        Submit
                    </button>
                </div>
            </form>

            {/* Links */}
            <div className="social-media-links py-4">
                <a href="https://www.linkedin.com/in/phyliciaevelinebuie/">
                    <i class="fa-brands fa-linkedin text-4xl text-secondary"></i>
                </a>
                <a href="https://www.instagram.com/phyliciaeveline/">
                    <i class="fa-brands fa-instagram text-4xl mx-2 text-secondary"></i>
                </a>
                <a>
                    <i class="fa-brands fa-twitter text-4xl text-secondary"></i>
                </a>
            </div>
        </div>
    )
}

export default ContactForm