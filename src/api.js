import axios from 'axios'
import Cookies from 'js-cookie'
import { TOKEN } from './app.constants'

export const $axios = axios.create({
    baseUrl: '/api',
    headers: {
        'Content-Type': 'application/json',
        //Authorization: `Bearer ${localStorage.getItem('token')}` // менее надежный вариант //
        Authorization: Cookies.get(TOKEN) ? `Bearer ${Cookies.get(TOKEN)}` : ''
    }
})
