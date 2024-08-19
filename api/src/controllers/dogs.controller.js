const { Dogs, Temperaments } = require('../db')
const { Op } = require('sequelize')
const Formatter = require('../helpers/Formatter')

const formatter = new Formatter()

const API_KEY = 'live_HO7iCeIZPbtaW4eto9ZgKZOdocp2qSrKyR9OBFX43e9eQrs2UWcLkKjTwiCjuWJi';
const API_URL = 'https://api.thedogapi.com/v1/breeds';

const getDogApi = async () => {
  try {
    const response = await fetch(API_URL, {
      headers: {
        'x-api-key': API_KEY
      }
    });
    const data = await response.json();
    formatter.setAPI(data);
    return formatter.dataFormatterApi();
  } catch (error) {
    throw new Error(error);
  }
}

const getDogByNameAPI = async (name) => {
  try {
    const response = await fetch(API_URL, {
      headers: {
        'x-api-key': API_KEY
      }
    });
    const dogs = await response.json();
    const filteredDogs = dogs.filter((item) => {
      return item.name.toLowerCase().includes(name.toLowerCase());
    });
    formatter.setAPI(filteredDogs);
    return formatter.dataFormatterApi();
  } catch (error) {
    throw new Error(error);
  }
}

const getDogByIdAPI = async (id) => {
  try {
    const response = await fetch(API_URL, {
      headers: {
        'x-api-key': API_KEY
      }
    });
    const data = await response.json();
    const dog = data.find((item) => item.id === parseInt(id));
    formatter.setAPI([dog]);
    return formatter.dataFormatterApi();
  } catch (error) {
    throw new Error(error);
  }
}

// Las funciones que no requieren la API key permanecen igual
const getDogBD = async () => {
  try {
    const dogResponse = await Dogs.findAll({
      include: Temperaments
    })
    formatter.setDB(dogResponse)
    return formatter.dataFormatterDB()
  } catch (error) {
    throw new Error(error)
  }
}

const getDogByNameBD = async (nameDog) => {
  try {
    const response = await Dogs.findAll({
      where: {
        name: {
          [Op.iRegexp]: nameDog
        }
      },
      include: Temperaments
    })
    formatter.setDB(response)
    return formatter.dataFormatterDB()
  } catch (error) {
    throw new Error(error)
  }
}

const getDogByIdBD = async (id) => {
  try {
    const data = await Dogs.findAll({
      where: {
        id
      },
      include: Temperaments
    })
    formatter.setDB(data)
    return formatter.dataFormatterDB()
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = {
  getDogApi,
  getDogBD,
  getDogByNameAPI,
  getDogByNameBD,
  getDogByIdAPI,
  getDogByIdBD
}
