var Item = function (name, sellIn, quality) {
  var maxQuality = 50;
  var minQuality = 0;
  var minSellIn = 0;
  
  this.name = name;  
  this.sellIn = sellIn;
  this.quality = quality;
  
  this.updateQuality = function() {
  	qualityUpdater.update();
  }
  
  this.decreaseSellIn = function () {
	this.sellIn = this.hasReachedMinSellIn() ? 0 : this.sellIn - 1;
  };
  
  this.hasReachedMinSellIn = function () {
    return this.sellIn <= minSellIn;
  };
  
  this.decreaseQuality = function (amount) {
  	amount = amount || 1;
    if (! this.hasReachedMinQuality())
	    this.quality -= amount;
  };

  this.increaseQuality = function (amount) {
  	amount = amount || 1;
  	if (! this.hasReachedMaxQuality())
    	this.quality += amount;
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
  
  var qualityUpdater = new Strategy(this);
};

var Strategy = function(item) {
	var ticket = "Backstage passes to a TAFKAL80ETC concert";
    var legendary = "Sulfuras, Hand of Ragnaros";
    var aged = "Aged Brie";
    var conjured = "Conjured Mana Cake";
    
  	this.item = item;
  	this.update = function(){
  		item.decreaseQuality()
  		if (item.hasReachedMinSellIn()) 
			item.decreaseQuality();
  	};
	
	
	if (item.is(ticket)) this.update = ticketStrategy;
	else if (item.is(legendary)) this.update = legendaryStrategy;
	else if (item.is(aged)) this.update = agedStrategy;
	else if (item.is(conjured)) this.update = conjuredStrategy;
	
	function ticketStrategy() {
  		var middleSellIn = 5;
  		var farSellIn = 10;
  		
  		item.increaseQuality()
  		if (item.sellIn <= farSellIn) item.increaseQuality()
  		if (item.sellIn <= middleSellIn) item.increaseQuality()
  		if (item.hasReachedMinSellIn()) item.resetQuality()
	}
	function legendaryStrategy() {
	}
	function conjuredStrategy() {
		item.decreaseQuality(2);
		if (item.hasReachedMinSellIn()) 
			item.decreaseQuality(2);
	}
	function agedStrategy() {
		item.increaseQuality()
		if (item.hasReachedMinSellIn()) 
			item.increaseQuality();
	}
}

