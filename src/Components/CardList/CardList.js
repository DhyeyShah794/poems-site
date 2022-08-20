import Card from '../Card/Card'
import './CardList.css'

const CardList = ({robots}) => {
    const cardArray = robots.map((content) => {
        return <Card key={content} title={content.titles} poem={content.poems} />
    })
    
    return (
        <pre><div className="Card-List">
            {cardArray}
        </div></pre>
    );
}

export default CardList;