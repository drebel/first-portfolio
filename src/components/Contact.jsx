import {useState} from "react"

export default function Contact(){

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    function handleChange(event){


    }

    function handleSubmit(event){
        event.preventdefault()

    }

    return (
        <section className="contact" id="contact">
            <div className="contact--img">
                <img src="src\assets\original-b069dfb027ddc9338205b6df5c2bd23d.jpg" alt="" />
            </div>
            <div className="contact--text">
                <h2>Contact</h2>
                <form className="form">
                    <label htmlFor="form--name">Name</label>
                    <input id='form--name' type="text" placeholder="Name" onChange={handleChange}/>
                    <label htmlFor="form--email">Email</label>
                    <input id="form--email" type="text" placeholder="Email" onChange={handleChange}/>
                    <label htmlFor="form--message">Message</label>
                    <textarea name="" id="form--message" placeholder="Leave a message" cols="30" rows="10" onChange={handleChange}></textarea>
                    <button onClick={handleSubmit} className="cta">Send Message</button>
                </form>
            </div>
            <div className="contact--email">
                <h1>DrewBeland.dpt@gmail.com</h1>
                <button className="cta contact--emailButton">Send Mail</button>
            </div>
        </section>
    )
}