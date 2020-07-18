function laraErrorParser (error) {
  const errors = []
  try {
    const errorObj = error.response.data.errors
    const result = Object.entries(errorObj)
    result.forEach((item1) => {
      item1.forEach((item2, index2) => {
        if (index2 === 1) {
          item2.forEach((item3) => {
            errors.push(item3)
          })
        }
      })
    })
  } catch (e) {
    let message = error.message
    try {
      message = error.response.data.message
    } catch (e) {
      message = error.message
    }
    errors.push(message)
  }
  return errors
}

module.exports.laraErrorParser = laraErrorParser;
