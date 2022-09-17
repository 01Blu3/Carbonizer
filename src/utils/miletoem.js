const miletoem = (make, mile) => {
  switch (make) {
    case 'Impala':
      return mile * 409;
    case 'Honda':
      return mile * 305;
    case 'Ford':
      return mile * 411;
    case 'BMW':
      return mile * 234;
  }
};
