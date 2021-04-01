const Journey = require("./journey");

const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map((location) => {
    return location.startLocation;
  });
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map((location) => {
    return location.endLocation;
  });

};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter((transpo) => {
    return transpo.transport === transport;
  });

};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter((dist) => {
    return dist.distance >= minDistance;
  });

};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce((total, dist) => {
    return total += dist.distance;
  }, 0);
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  // return unique = [...new Set(this.journeys.map(item => item.transport))];
  
  const transportModes = this.journeys.map(item => item.transport);
  const uniqueTransportModesSet = new Set(transportModes);
  // console.log(uniqueTransportModesSet)
  return [...uniqueTransportModesSet]
};


module.exports = Traveller;
