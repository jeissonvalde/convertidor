
module.exports.toFahrenheit = (temperature) => {
  return (temperature * 9/5) + 32;
}

module.exports.toCelsius = (temperature) => {
  return (temperature - 32) * 5/9;
}
