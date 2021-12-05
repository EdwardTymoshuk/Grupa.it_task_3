import React, { useEffect, useState, useRef } from 'react'
import MainPage from './MainPage'
import { quotesAPI } from '../../api/api'

const MainPageContainer = () => {

    const [quote, setQuote] = useState('')

    useEffect(() => getQuote(), [])

    const usePrevious = (value) => {
        const ref = useRef()
        useEffect(() => {
            ref.current = value
        })
        return ref.current;
    }

    const prevQuote = usePrevious(quote)

    const setPrevQuote = () => {
        setQuote(prevQuote)
    }

    const getQuote = async () => {
        let data = await quotesAPI.getQuote()
        let item = data[Math.floor(Math.random() * data.length)]
        setQuote(item)
    }

    return (
        <MainPage getQuote={getQuote} setPrevQuote={setPrevQuote} quote={quote} prevQuote={prevQuote} />
    )
}

export default MainPageContainer
