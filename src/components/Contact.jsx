// import {useState} from "react"

export default function Contact(){

    // const [formData, setFormData] = useState(
    //     {name: "",
    //     email: "",
    //     message: ""  
    //     }
    // )
    
    // function handleChange(event){
    //     setFormData(prevFormData => ({
    //             ...prevFormData,
    //             [event.target.name]: event.target.value
    //         })
    //     )

    // }

//     const encode = (data) => {
//         return Object.keys(data)
//             .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
//             .join("&");
//   }

    // function handleSubmit(event){
    //     fetch("/", {
    //         method: "POST",
    //         headers: { "Content-Type": "application/x-www-form-urlencoded" },
    //         body: encode({ "form-name": "contact", "name": formData.name, "email": formData.email, "message": formData.message})
    //   })
    //     .then(() => alert("Success!"))
    //     .catch(error => alert(error));

    //   event.preventDefault();

    // }

    return (
        <section className="contact" id="contact">
            <div className="contact--img">
                <img src="src\assets\original-b069dfb027ddc9338205b6df5c2bd23d.jpg" alt="" />
            </div>
            <div className="contact--text">
                <h2>Contact</h2>
                <form className="form" name="contact v1" method="post">
                    <input type="hidden" name="form-name" value="contact v1" />
                    <label htmlFor="form--name">Name</label>
                    <input id='form--name' type="text" placeholder="Name" name="name"/>
                    <label htmlFor="form--email">Email</label>
                    <input id="form--email" type="text" placeholder="Email" name="email"/>
                    <label htmlFor="form--message">Message</label>
                    <textarea name="message" id="form--message" placeholder="Leave a message" cols="30" rows="10" />
                    <button className="cta" type="submit">Send Message</button>
                </form>
            </div>
            <div className="contact--email">
                <h1>DrewBeland.dpt@gmail.com</h1>
                <a href="mailto:drewbeland.dpt@gmail.com" className="cta">
                    Send Mail
                </a>
            </div>
        </section>
    )
}