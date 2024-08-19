const { Temperaments } = require('../db')

const getAllTemperaments = async () => {
  try {
    const response = await fetch('https://api.thedogapi.com/v1/breeds')
    const data = await response.json()



    const allTemperaments = data.map((item) => item.temperament?.split(', ')).flat()


    const cleanOcurrences = new Set(allTemperaments)

    cleanOcurrences.forEach(async (item) => {
      if (item) {
        await Temperaments.findOrCreate({
          where: { name: item }
        })
      }
    })
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = getAllTemperaments
