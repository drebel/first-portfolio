
export default function About(){

    return (
        <>
        <section className="about grid-2" id="about">
            <div className="about--img">
                <img src="/headshot.jpg" alt="headshot" />
            </div>  
            <div className="about--text">
                <h2>About</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam iure enim vero facilis cum harum voluptatibus fugit corrupti, laborum reprehenderit repellat similique rerum mollitia perspiciatis excepturi voluptatum, nemo at necessitatibus.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatem enim pariatur, nostrum hic qui praesentium eligendi nesciunt magnam, modi fugiat aut quae? Odit, dolor aspernatur. Architecto rerum aliquam earum!</p>
                <a href="#contact" className="cta">Let's Work!</a>
            </div>
        </section>
        </>
    )
}