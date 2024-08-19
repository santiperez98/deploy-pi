const REGEX_URL = /(http|https|ftp|ftps):\/\/[a-zA-Z0-9-.]+\.[a-zA-Z]{2,3}(\/\S*)?/
const REGEX_IMG = /.*(png|jpg|jpeg|gif)$/

export function filter (options, dogs) {
    let filteredDogs = [...dogs]
    if (Object.values(options).every((item) => item === null) ||
        !Object.keys(options).length ) {
        return dogs
    }

    if (options.temperament && options.temperament !== 'null') {
        filteredDogs = dogs?.filter((item) => {
            return item.temperaments?.includes(options.temperament)
        })
    }

    if (options.origin  && options.origin !== 'null') {
       filteredDogs = filteredDogs.filter((item) => {
         if (options.origin === 'bd') {
            return /\D/.test(item.id)
         }
         return !/\D/.test(item.id)
       })
    }

    if (options.order &&  options.order !== 'null'  ) {
        filteredDogs = filteredDogs.sort((a, b) => {
            if (/^a/.test(options.order)) {
               if (a.name < b.name) return -1
               if (a.name > b.name) return 1
               return 0
            }
            if (a.name < b.name) return 1
            if (a.name > b.name) return -1
            return 0
        })
    }

    if (options.weight &&  options.weight !== 'null') {
        filteredDogs = filteredDogs.sort((a, b) => {
            if (options.weight === 'menor') {
                let weightA = isNaN(parseInt(a.weight[0])) ? a.weight[1] : a.weight[0]
                let weightB = isNaN(parseInt(b.weight[0])) ? b.weight[1] : b.weight[0]
                return parseInt(weightA) - parseInt(weightB)
            }
            let weightA = a.weight.length === 2 ? a.weight[1] : a.weight[0]
            let weightB = b.weight.length === 2 ? b.weight[1] : b.weight[0]
            return parseInt(weightB) - parseInt(weightA)
        })
    }
    return filteredDogs
}

export function paginate (dogs) {
    let currentPage = 1
    const pagination = {}
    pagination[currentPage] = []
    for(let i = 0; i < dogs.length; i++) {
      if(pagination[currentPage].length < 8) pagination[currentPage].push(dogs[i])
      else {
        currentPage++
        pagination[currentPage] = []
        pagination[currentPage].push(dogs[i])
      }
    }
    return pagination
}

export const validate = (inputs) => {
    const errors = {};

    // Validación del nombre
    if (!inputs.name) {
        errors.name = 'El campo raza no puede estar vacío';
    }

    // Validación de la imagen
    if (!inputs.imagen) {
        errors.imagen = 'El campo imagen no puede estar vacío';
    } else if (!REGEX_URL.test(inputs.imagen) || !REGEX_IMG.test(inputs.imagen)) {
        errors.imagen = 'Ingrese una URL válida que apunte a una imagen (png, jpg, jpeg, gif)';
    }

    // Validación del peso
    if (inputs['peso-min'] === '0') {
        errors['peso-min'] = 'Falta el peso mínimo';
    }

    if (inputs['peso-max'] === '0') {
        errors['peso-max'] = 'Falta el peso máximo';
    }

    if (inputs['peso-min'] !== '0' && inputs['peso-max'] !== '0') {
        const min = parseInt(inputs['peso-min'], 10);
        const max = parseInt(inputs['peso-max'], 10);
        if (min > max) {
            errors.peso = 'El peso mínimo no puede ser mayor que el máximo';
        }
    }

    // Validación de la altura
    if (inputs['altura-min'] === '0') {
        errors['altura-min'] = 'Falta la altura mínima';
    }

    if (inputs['altura-max'] === '0') {
        errors['altura-max'] = 'Falta la altura máxima';
    }

    if (inputs['altura-min'] !== '0' && inputs['altura-max'] !== '0') {
        const min = parseInt(inputs['altura-min'], 10);
        const max = parseInt(inputs['altura-max'], 10);
        if (min > max) {
            errors.altura = 'La altura mínima no puede ser mayor que la máxima';
        }
    }

    // Validación de la esperanza de vida
    if (!inputs['lifeSpan-min'] || !inputs['lifeSpan-max']) {
        errors['lifeSpan'] = 'Los campos de esperanza de vida no pueden estar vacíos';
    }

    if (inputs['lifeSpan-min'] && inputs['lifeSpan-max']) {
        const min = parseInt(inputs['lifeSpan-min'], 10);
        const max = parseInt(inputs['lifeSpan-max'], 10);
        if (min > max) {
            errors.lifeSpan = 'La esperanza de vida mínima no puede ser mayor que la máxima';
        }
    }

    return errors;
}
