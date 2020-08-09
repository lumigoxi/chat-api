const error = (req, res, message, status) => {
  res.status(status || 500).send({
    error: message,
    body: null,
  });
};

const success = (req, res, message, status) => {
  res.status(status || 200).send({
    error: null,
    message,
  });
};

module.exports = {
  error,
  success,
};
