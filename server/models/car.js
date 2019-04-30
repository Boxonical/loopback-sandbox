'use strict';

module.exports = function(Car) {
  Car.prototype.updateWithDotNotation = function(seats) {
    const self = this;
    return self.updateAttributes({'interior.seats': seats});
  };

  Car.prototype.updateWithMongoExtendedOperators = function() {
    const self = this;
    return self.updateAttributes({$inc: {'fuel': 1}});
  };

  // Car.disableRemoteMethodByName('create');
  Car.disableRemoteMethodByName('upsert');
  Car.disableRemoteMethodByName('updateAll');

  // Car.disableRemoteMethodByName('prototype.patchAttributes');

  Car.disableRemoteMethodByName('find');
  Car.disableRemoteMethodByName('findOne');

  Car.disableRemoteMethodByName('createChangeStream');

  Car.disableRemoteMethodByName('deleteById');

  Car.disableRemoteMethodByName('confirm');
  Car.disableRemoteMethodByName('count');
  Car.disableRemoteMethodByName('exists');

  Car.disableRemoteMethodByName('replaceById');
  Car.disableRemoteMethodByName('replaceOrCreate');
  // Car.disableRemoteMethodByName('upsertWithWhere');
};
