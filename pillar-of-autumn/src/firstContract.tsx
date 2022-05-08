import axios from 'axios'

async function getContract() {
    const http = axios.create({
        baseURL: "https://api.starton.io/v2",
        headers: {        
            "x-api-key": '3wIu7cjkaMnqPaeUTZceuBS0KhRq1DNi', //API KEY COPIED FROM STARTON
        },
    })
}