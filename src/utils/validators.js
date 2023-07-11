export const requiredField = value => {
    if(value) return undefined
    return "Обязательное поле"
}


export const ValidatePassword = value => {
    let error;
    if(!value){
        error = "Required"
      } else if (
        !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/i.test(value)
      ) {
        error = 'Invalid password';
      }
      return error
}

export const ValidateEmail = value => {
    let error;
    if(!value){
        error = "Required"
      } else if (
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/i.test(value)
      ) {
        error = 'Invalid password';
      }
      return error
}
