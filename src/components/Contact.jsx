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
            <h2>Contact</h2>
            <form>
                <label htmlFor="form--name">Name</label>
                <input id='form--name' type="text" placeholder="Name" onChange={handleChange}/>
                <label htmlFor="form--email">email</label>
                <input id="form--email" type="text" placeholder="Email" onChange={handleChange}/>
                <label htmlFor="form--message"></label>
                <textarea name="" id="form--message" placeholder="Message" cols="30" rows="10" onChange={handleChange}></textarea>
                <button onClick={handleSubmit}>Send Message</button>
            </form>
            <div className="contact--emailArea">
                <h1>DrewBeland.dpt@gmail.com</h1>
                <button className="CTA contact--emailButton">Send Mail</button>
            </div>
        </section>
    )
}