import styles from "./MovieInfo.module.css"
import FirstSectionMovieInfo from "./firstSectionMovieInfo/FirstSectionMovieInfo";

const MovieInfo = () => {

    return (
        <main>
            <div className="left">
                <FirstSectionMovieInfo />

                <div className="second-main photos">
                    <section className="one-section">
                        <div className="title">
                            <h2>Photos</h2>
                            <div className="buttons">
                                <a href="#"><img src="images/left_arrow_button.png" alt="left-arrow" /></a>
                                <a href="#"><img src="images/right_arrow_button.png" alt="right-arrow" /></a>
                            </div>
                        </div>
                        <div className="cards">
                            <div className="card">
                                <img src="images/movie_img.png" alt="card" />
                                <div className="name-container">
                                    <p>Jenna Ortega</p>
                                    <p>Noah Some</p>
                                </div>
                            </div>
            
                            <div className="card">
                                <img src="images/movie_img.png" alt="card" />
                                <div className="name-container">
                                    <p>Jenna Ortega</p>
                                    <p>Noah Some</p>
                                </div>
                            </div>
            
                            <div className="card">
                                <img src="images/movie_img.png" alt="card" />
                                <div className="name-container">
                                    <p>Jenna Ortega</p>
                                    <p>Noah Some</p>
                                </div>
                            </div>
            
                            <div className="card">
                                <img src="images/movie_img.png" alt="card" />
                                <div className="name-container">
                                    <p>Jenna Ortega</p>
                                    <p>Noah Some</p>
                                </div>
                            </div>
            
                        </div>
            
                        
                    </section>
                </div>

                <div className="second-main celebs">
                    <section className="one-section">
                        <div className="title">
                            <h2>Cast</h2>
                            <div className="buttons">
                                <a href="#"><img src="images/left_arrow_button.png" alt="left-arrow" /></a>
                                <a href="#"><img src="images/right_arrow_button.png" alt="right-arrow" /></a>
                            </div>
                        </div>
                        <div className="cards">
                            <div className="card">
                                <img src="images/person.png" alt="card" />
                                <div className="name-container">
                                    <p>Jenna Ortega</p>
                                    <p>Noah Some</p>
                                </div>
                            </div>
            
                            <div className="card">
                                <img src="images/person.png" alt="card" />
                                <div className="name-container">
                                    <p>Jenna Ortega</p>
                                    <p>Noah Some</p>
                                </div>
                            </div>
            
                            <div className="card">
                                <img src="images/person.png" alt="card" />
                                <div className="name-container">
                                    <p>Jenna Ortega</p>
                                    <p>Noah Some</p>
                                </div>
                            </div>
            
                            <div className="card">
                                <img src="images/person.png" alt="card" />
                                <div className="name-container">
                                    <p>Jenna Ortega</p>
                                    <p>Noah Some</p>
                                </div>
                            </div>
            
                            <div className="card">
                                <img src="images/person.png" alt="card" />
                                <div className="name-container">
                                    <p>Jenna Ortega</p>
                                    <p>Noah Some</p>
                                </div>
                            </div>
            
                            <div className="card">
                                <img src="images/person.png" alt="card" />
                                <div className="name-container">
                                    <p>Jenna Ortega</p>
                                    <p>Noah Some</p>
                                </div>
                            </div>
            
                        </div>
            
                        
                    </section>
                </div>

                <div className="reviews">
                    <div className="title">
                        <div className="left">
                            <h2>User Reviews</h2>
                            <a href="#">See all 1.4K</a>
                        </div>

                        <a href="#">Review +</a>
                    </div>

                    <div className="review-boxes">
                        <div className="box">
                            <p><span>10</span>/10</p>
                            <h6>One of the Greatest Sequel Ever Made, Dune: Part Two Was Easily The Best Films Of The Year So Far</h6>
                            <section className="post-info">
                                <p>Raya Petkova</p>
                                <p>&nbsp;   &#xb7;  20 Feb 2024</p>
                            </section>
                            <p className="review-desc">In the quiet embrace of ink and page, a story unfolded, timeless and sage, through the lens of a filmmaker's artistry, its essence soared, a masterpiece for all to see, i think Denis Villeneuve has just made the most visually stunning epic story of a movie that's ever been made, the most powerful story of a movie ever been told in the last 20 years, there has been no movies with this scale resulting in not just a piece of a film no more but a piece of art, it's what Infinity War and Endgame looks like...</p>
                        </div>

                        <div className="box">
                            <p><span>10</span>/10</p>
                            <h6>One of the Greatest Sequel Ever Made, Dune: Part Two Was Easily The Best Films Of The Year So Far</h6>
                            <section className="post-info">
                                <p>Raya Petkova</p>
                                <p>&nbsp;   &#xb7;  20 Feb 2024</p>
                            </section>
                            <p className="review-desc">In the quiet embrace of ink and page, a story unfolded, timeless and sage, through the lens of a filmmaker's artistry, its essence soared, a masterpiece for all to see, i think Denis Villeneuve has just made the most visually stunning epic story of a movie that's ever been made, the most powerful story of a movie ever been told in the last 20 years, there has been no movies with this scale resulting in not just a piece of a film no more but a piece of art, it's what Infinity War and Endgame looks like...</p>
                        </div>
                    </div>
                </div>
            </div>

            <aside>
                <ul>
                    <li><a href="#">Overview</a></li>
                    <li><a href="#">Cast & Crew</a></li>
                    <li><a href="#">User Reviews</a></li>
                    <li><a href="#">Storyline</a></li>
                    <li><a href="#">Details</a></li>
                </ul>
            </aside>
        </main>
    )
}

export default MovieInfo;