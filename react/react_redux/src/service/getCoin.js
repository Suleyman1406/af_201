import axios from "axios"
import { BASE_URL } from "consts"

export const getCoin = (pageCount = 1, perPage = 100) => {
  return axios.get(`${BASE_URL}v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${perPage}&page=${pageCount}&sparkline=false`)
} 
