export const isValidEmailAddress = (address) => {
  const re = /^[ ]*([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})[ ]*$/i;

  if (re.test(address)) {
    return true;
  }
  return false;
};

export const dateConverted = (date) => {
  const convertedDate = new Date(date).toLocaleDateString('en-us');
  return convertedDate;
};
