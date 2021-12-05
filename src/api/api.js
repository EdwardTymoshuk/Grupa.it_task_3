import * as axios from 'axios'

const instance = axios.create({
    baseURL: `https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json`,
    header: {
        'Access-Control-Allow-Origin:' : '*'
    }
})

export const quotesAPI = {
    getQuote() {
        return instance.get('/').then(response => response.data)
    }
}