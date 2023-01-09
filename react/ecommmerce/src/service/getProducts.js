import axios from "axios"
import { BASE_URL } from "consts"

export const getProducts = () => {
  return axios.get(`${BASE_URL}/products`)
}                  