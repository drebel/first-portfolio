import {useState} from "react"

export default function Contact(){

    const [formData, setFormData] = useState(
        {name: "",
        email: "",
        message: ""  
        }
    )
    
    function handleChange(event){
        setFormData(prevFormData => ({
                ...prevFormData,
                [event.target.name]: event.target.value
            })
        )

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
                    <input id='form--name' type="text" placeholder="Name" name="name" value={formData.name} onChange={handleChange}/>
                    <label htmlFor="form--email">Email</label>
                    <input id="form--email" type="text" placeholder="Email" name="email" value={formData.email} onChange={handleChange}/>
                    <label htmlFor="form--message">Message</label>
                    <textarea name="message" value={formData.message} id="form--message" placeholder="Leave a message" cols="30" rows="10" onChange={handleChange} />
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