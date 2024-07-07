import AddReview from "../addReview/AddReview";
import styles from "./Reviews.module.css"

const Reviews = ({ movieId }) => {

    return (
        <div className={styles['reviews']}>
            <div className={styles['title']}>
                <div className={styles['left']}>
                    <h2>User Reviews</h2>
                    <a href="#">See all 1.4K</a>
                </div>

                <a href="#">Review +</a>
            </div>

            <div className={styles['review-boxes']}>
                <div className={styles['box']}>
                    <p><span>10</span>/10</p>
                    <h6>One of the Greatest Sequel Ever Made, Dune: Part Two Was Easily The Best Films Of The Year So Far</h6>
                    <section className={styles['post-info']}>
                        <p>Raya Petkova</p>
                        <p>&nbsp;   &#xb7;  20 Feb 2024</p>
                    </section>
                    <p className={styles['review-desc']}>In the quiet embrace of ink and page, a story unfolded, timeless and sage, through the lens of a filmmaker's artistry, its essence soared, a masterpiece for all to see, i think Denis Villeneuve has just made the most visually stunning epic story of a movie that's ever been made, the most powerful story of a movie ever been told in the last 20 years, there has been no movies with this scale resulting in not just a piece of a film no more but a piece of art, it's what Infinity War and Endgame looks like...</p>
                </div>

                <div className={styles['box']}>
                    <p><span>10</span>/10</p>
                    <h6>One of the Greatest Sequel Ever Made, Dune: Part Two Was Easily The Best Films Of The Year So Far</h6>
                    <section className={styles['post-info']}>
                        <p>Raya Petkova</p>
                        <p>&nbsp;   &#xb7;  20 Feb 2024</p>
                    </section>
                    <p className={styles['review-desc']}>In the quiet embrace of ink and page, a story unfolded, timeless and sage, through the lens of a filmmaker's artistry, its essence soared, a masterpiece for all to see, i think Denis Villeneuve has just made the most visually stunning epic story of a movie that's ever been made, the most powerful story of a movie ever been told in the last 20 years, there has been no movies with this scale resulting in not just a piece of a film no more but a piece of art, it's what Infinity War and Endgame looks like...</p>
                </div>
            </div>

            <AddReview movieId={movieId} />
        </div>
    )
}

export default Reviews;