const messages = [];

const save = (message) => {
  return new Promise((resolve, reject) => {
    try {
      messages.push(message);
      resolve("Message add succesfuly");
    } catch (error) {
      reject(error);
    }
  });
};

const list = () => {
  return new Promise((resolve, reject) => {
    messages.length !== 0 ? resolve(messages) : reject("DB is empty");
  });
};

module.exports = {
  save,
  list,
};
