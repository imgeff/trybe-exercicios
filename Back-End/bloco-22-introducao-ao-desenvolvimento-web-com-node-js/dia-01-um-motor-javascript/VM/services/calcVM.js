const calcVM = (distance, time) => {
  const distanceMeters = distance * 1000;
  const timeseconds = time * 60;
  const VM = (distanceMeters / timeseconds).toFixed(2);
  return VM;
}

module.exports = calcVM;
