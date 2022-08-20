import React from 'react';
import './Card.css';
import 'tachyons';

const Card = ({title, poem}) => {
    return (
        <div className="Cards">
            <div className="Card">
                <div className="Card-body">
                    <div className="Card-top">
                        <h2 className="Card-title">{title}</h2>
                        <div className="filled"></div>
                    </div>
                    <div className="Card-text">
                        {poem}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;