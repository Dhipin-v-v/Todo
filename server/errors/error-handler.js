const errorHandlerMiddleware = (err, req, res, next) => {
  const defaultError = {
    statusCode: err.statusCode || 500,
    message: err.message || 'Something went wrong, try again later',
  }
  res.status(defaultError.statusCode).json({ msg: defaultError.message })
}

export default errorHandlerMiddleware