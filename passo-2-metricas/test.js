import http from 'k6/http'
import { sleep } from 'k6'
import {BASE_URL} from '../config.js'

export const options = {
    vus: 10, // numero de usuarios virtuais 
    duration: '30s', // tempo de execucao do teste
}
export default function () {
    http.get(`${BASE_URL}/api/health`)
    //sleep(0.5)
}