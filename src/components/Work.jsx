
export default function Work(){

    return (
        <section className="work flex" id="work">
            <h2>My Work</h2>
            <article className="work--item grid-2">
                <div className="detail">
                    <h3 className="">Gift List</h3>
                    <p className="description">
                        A simple gift registry for your close circle of friends and family.
                        <br />
                        <a href="https://giftlist.cyclic.app/">Live Preview </a>
                        <a href="https://github.com/drebel/gift-registry">Source Code </a>
                        </p>
                    <p className="tags">
                        <span>EJS</span>
                        <span>Node.js</span>
                        <span>Express</span>
                        <span>Passport</span>
                        <span>MongoDB</span>
                        <span>Mongoose</span>
                        <span>HTML5</span>
                        <span>CSS3</span>
                        <span>Bootstrap</span>
                        <span>REST API</span>
                    </p>
                </div>
                <div className="thumbnail">
                    <img src="src\assets\gift-list-screenshot.png" alt="Gift List Screenshot" />
                </div>
            </article>
        </section>
    )
}