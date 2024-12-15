let ALL_TRANSACTIONS = [
  {
    "id": 1,
    "date": "01-01-2024",
    "category": "Shop",
    "price": "30",
    "status": "Active",
    "userid": "xyz",
  },
];

const getTransactions = (args) => {
  const { id } = args;
  return ALL_TRANSACTIONS.filter((item) => {
    return item.id == id;
  })[0];
};

const getAllTransactions = () => {
  return ALL_TRANSACTIONS;
};

const updateTransactions = ({ id, input: { date, userid, category, status, price } }) => {
  const newTransaction = ALL_TRANSACTIONS.map((item) => {
    if (item.id === id) {
      item.date = date;
      item.price = price;
      item.status = status;
      item.category = category;
      item.userid = userid
    }
    return item;
  });
  return newTransaction.filter(({ id: toDoId }) => toDoId === id)[0];
};

const addTransactions = ({ input: { date, userid, category, status, price } }) => {
  const numOfTransactions = ALL_TRANSACTIONS.length;
  const addTransactions = { id: numOfTransactions + 1, date, userid, category, status, price};
  ALL_TRANSACTIONS.push(addTransactions);
  return addTransactions;
};

const deleteTransactions = ({ id: deletedId }) => {
  const deletedTransactions = ALL_TRANSACTIONS.filter(({ id }) => {
    return id === deletedId;
  })[0];
  ALL_TRANSACTIONS = ALL_TRANSACTIONS.slice(
    ALL_TRANSACTIONS.findIndex(({ id }) => id === deletedId),
    1
  );
  return deletedTransactions;
};

const resolvers = {
  transaction: getTransactions,
  transactions: getAllTransactions,
  updateTransactions,
  addTransactions,
  deleteTransactions,
};

module.exports = resolvers;