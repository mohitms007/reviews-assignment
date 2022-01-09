const formatDate = (date) => {
  let parsedDate;
  if (date.length > 10) {
    parsedDate =
      date.substr(2, 3) +
      "-" +
      date.substr(0, 2) +
      "-" +
      date.substr(6, 8).trim();
  } else {
    parsedDate =
      "0" +
      date.substr(2, 2).trim() +
      "-" +
      date.substr(0, 2) +
      "-" +
      date.substr(6, 8).trim();
  }
  return parsedDate.trim();
};

export default formatDate;