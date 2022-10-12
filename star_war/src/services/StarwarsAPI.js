
import axios from 'axios'

const BASE_URL = "https://swapi.dev/api"


// const sleep = async delay => new Promise(r => setTimeout(r, delay))


const getCharacters = async (page) => {
    const res = await axios.get(`${BASE_URL}/people/?page=${page}`)
    return res.data
}

const getCharacter = async (id) => {
    const res = await axios.get(`${BASE_URL}/people/${id}`)
    return res.data
}

const getFilms = async () => {
    const res = await axios.get(`${BASE_URL}/films`)
    return res.data
}

const getFilm = async (id) => {
    const res = await axios.get(`${BASE_URL}/films/${id}`)
    return res.data
}

const exportedObjects = {
  getCharacters,
  getCharacter,
  getFilms,
  getFilm
};

export default exportedObjects