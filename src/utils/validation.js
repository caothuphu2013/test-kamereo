export const isValidPhone = (phone) => {
  const phoneRegex = /^(1?(-?\d{3})-?)?(\d{3})(-?\d{4})$/;
  return phoneRegex.test(phone);
};
