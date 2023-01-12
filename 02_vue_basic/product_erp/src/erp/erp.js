const sampleData = {
  name: 'Asia',
  producers: [
    { name: 'Byzantium', cost: 10, production: 9 },
    { name: 'Attalia', cost: 12, production: 20 },
    { name: 'Sinope', cost: 10, production: 6 },
  ],
  demand: 30, // 수요
  price: 20, // 가격
};

function province(data) {
  let resultObj = Object.assign({}, data);
  resultObj.producers.forEach((p) => {
    // 비용 항목
    Object.defineProperty(p, 'productionCost', {
      get() {
        return p.production * p.cost;
      },
    });
  });
  Object.defineProperty(resultObj, 'shortfall', {
    get() {
      let result = resultObj.demand; // 수요
      resultObj.producers.forEach((p) => {
        // forEach를 통해 수요에서 공장들의 생산량을 뺴준다.
        result -= p.production;
      });
      return result;
    },
  });
  Object.defineProperty(resultObj, 'profit', {
    get() {
      let totalCost = 0; // 총비용
      resultObj.producers.forEach((p) => {
        // forEach를 통해 각 공장들의 비용을 더한다.
        totalCost += p.productionCost;
      });
      return resultObj.demand * resultObj.price - totalCost; // 총매출에서 공장들의 비용을 뺀다.
    },
  });
  return resultObj;
}

export { sampleData, province };
