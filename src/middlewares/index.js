let cont = 0;

module.exports = (req, res, next) => {
  cont = cont + 1;
  console.log('Requisições feitas: ', (cont));
  
  return next();
}