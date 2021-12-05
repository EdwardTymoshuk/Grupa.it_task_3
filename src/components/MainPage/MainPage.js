import React from 'react'

const MainPage = (props) => {

    const { quote, author } = props.quote

    return (
        <div id="main" className="main">
            <h1>Oto twój losowy cytat: </h1>
            <div className="quote">
                <p>{quote}</p>
                <p>{author}</p>
            </div>

            {
                !props.prevQuote ?
                    <button disabled className="previous-quote-button" onClick={() => props.setPrevQuote()}>&#8592; Poprzedni</button> :
                    <button className="previous-quote-button" onClick={() => props.setPrevQuote()}>&#8592; Poprzedni</button>
            }
            <button className="next-quote-button" onClick={() => props.getQuote()}>Następny &#8594;</button>
        </div>
    )
}

export default MainPage
