import React, { useState } from 'react'

function ContactForm() {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const submitContact = (e) => {
        e.preventDefault()

        if (firstName === '' || lastName === '' || email === '') {
            alert('Enter a task Name')
            return false;
        }

        // Create and Send form info as email
        

    }

    return (
        <div id="contact" className="contact h-screen mt-12">
            <h1 className='pt-4 text-3xl'>Contact</h1>

            <form>
                <div className="name flex justify-between my-2">
                    <div className="first-name flex flex-col">
                        <label for="fname">First name:</label>
                        <input className=' bg-primary border-2 border-secondary py-1' type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} id="fname" name="fname"/>
                    </div>

                    <div className="last-name flex flex-col">
                        <label for="lname">Last name:</label>
                        <input className=' bg-primary border-2 border-secondary py-1' type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} id="lname" name="lname"/>
                    </div>
                </div>

                <div className="email flex flex-col my-2">
                    <label for="email">Email:</label>
                    <input className=" bg-primary border-2 border-secondary py-1" type="text" value={email} onChange={(e) => setEmail(e.target.value)} id="email" name="email"/>
                </div>

                <div className="message flex flex-col my-2">
                    <label for="email">Message:</label>
                    <input className='bg-primary border-2 border-secondary py-1 h-36 resize-y' type="text" value={message} onChange={(e) => setMessage(e.target.value)} id="email" name="email"/>
                </div>

                <div className='flex'>
                    <div className='grow'>

                    </div>
                    <button className='border-2 border-secondary px-2 py-2 my-2' onClick={submitContact}>
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}

export default ContactForm