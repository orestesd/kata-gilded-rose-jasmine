var Item = function (name, sellIn, quality) {
  var maxQuality = 50;
  var minQuality = 0;
  this.sellIn = sellIn;
  this.quality = quality;

  this.decreaseQuality = function () {
    if (! this.hasReachedMinQuality())
	    this.quality -= 1;
  };

  this.increaseQuality = function () {
  	if (! this.hasReachedMaxQuality())
    	this.quality += 1;
  };

  this.is = function (otherName) {
    return otherName == name;
  };

  this.resetQuality = function () {
    this.quality = 0;
  };

  this.hasReachedMaxQuality = function () {
    return this.quality >= maxQuality;
  };

  this.hasReachedMinQuality = function () {
    return this.quality === minQuality;
  };
};
