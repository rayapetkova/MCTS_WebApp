import PopularCelebs from "./popularCelebs/PopularCelebs"

const ListPeople = () => {
    return (
        <PopularCelebs numOfCards={6} numOfRows={3} listFeature={true} />
    )
}

export default ListPeople;