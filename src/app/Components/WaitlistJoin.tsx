'use client'
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { addToWaitList, checkEmailExists } from '@/firebaseFunctions/waitlist';


export default function WaitlistJoin() {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);


    const handleSubmit = async () => {
        if (!email) {
            alert('Please enter your email!');
            return;
        }

        setLoading(true);


        const alreadyPresent = await checkEmailExists(email)

        if (alreadyPresent) {
            setEmail("")
            setLoading(false)
            alert("Already Signed up for waitlist!")
            return
        }

        try {
            // Send email via EmailJS
            await emailjs.send(
                'service_5eisd19', // Replace with your EmailJS service ID
                'template_25za1bg', // Replace with your EmailJS template ID
                {
                    to_email: email,
                    message: 'Thank you for joining DOOG waitlist!'
                },
                'HgNl9PpgJYm-Wdu9t' // Replace with your EmailJS user ID
            );

            // Initialize Firebase (you should move this to a separate config file)
            await addToWaitList(email)

            setEmail('');
            alert('Successfully joined waitlist!');
        } catch (err) {
            alert('Failed to join waitlist. Please try again.');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full md:w-2/3 lg:w-1/2 xl:w-[40%] md:bg-white bg-transparent md:border border-borderColor rounded-full">
            <div className="flex md:flex-row flex-col items-center px-[8px]">
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 py-[16px] md:py-[24px] mb-[16px] md:mb-0 rounded-full border-borderColor border-[1px] md:border-none text-[16px] pl-[16px] focus:outline-none text-primaryText w-full md:w-auto md:bg-white font-normal"
                />

                <button
                    onClick={handleSubmit}
                    disabled={loading}
                    className="rounded-full py-[16px] px-[24px] flex justify-center items-center font-montserrat text-[16px] font-semibold bg-button-gradient text-white ml-auto w-full md:w-auto transition-all duration-300"
                >
                    {loading ? 'Joining...' : 'Join the waitlist'}
                </button>
            </div>
        </div>
    )
}