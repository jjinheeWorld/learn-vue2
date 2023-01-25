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
  let resultObj = {
    name: data.name,
    demand: data.demand,
    price: data.price,
    producers: [],
    addProducer(arg) {
      resultObj.producers.push(producer(arg));
    },
    get shortfall() {
      let result = resultObj.demand;
      resultObj.producers.forEach((p) => {
        result -= p.production;
      });
      return result;
    },
    get profit() {
      let totalCost = 0;
      resultObj.producers.forEach((p) => {
        totalCost += p.productionCost;
      });
      return resultObj.demand * resultObj.price - totalCost;
    },
  };

  data.producers.forEach((p) => {
    resultObj.addProducer(p);
  });
  function producer(data) {
    let result = {
      name: data.name,
      cost: data.cost,
      production: data.production,
      get productionCost() {
        return result.production * result.cost;
      },
    };
    return result;
  }
  return resultObj;
}

export { sampleData, province };
