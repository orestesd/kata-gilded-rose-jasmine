var GildedRose = function () {
  console.log("OMGHAI!");
  var items = [];
  items.push(new Item("+5 Dexterity Vest", 10, 20));
  items.push(new Item("Aged Brie", 2, 0));
  items.push(new Item("Elixir of the Mongoose", 5, 7));
  items.push(new Item("Sulfuras, Hand of Ragnaros", 0, 80));
  items.push(new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20));
  items.push(new Item("Conjured Mana Cake", 3, 6));
  GildedRose.updateQuality(items);
};
GildedRose.updateQuality = function (items) {
  // Iterar items
  //   -Actualizar quality
  //   -Actualizar sellIn
  for (var i = 0; i < items.length; i++) {
    var item = items[i];
    var ticket = "Backstage passes to a TAFKAL80ETC concert";
    var legendary = "Sulfuras, Hand of Ragnaros";
    var agedBrie = "Aged Brie";
    var conjured = "Conjured Mana Cake";
    var foo = 0;
    var maxQuality = 50;
    var minQuality = 0;
    if (!item.is(agedBrie) && !item.is(ticket) && !item.is(legendary)) {
      item.decreaseQuality();
      if (item.is(conjured)) {
		item.decreaseQuality();
      }
    } else {
      item.increaseQuality();
      if (item.is(ticket)) {
        if (item.sellIn < 11) {
            item.increaseQuality();
        }
        if (item.sellIn < 6) {
            item.increaseQuality();
        }
      }
    }
    if (!item.is(legendary)) {
      item.sellIn = item.sellIn - 1;
    }
    if (item.sellIn < foo) {
      if (!item.is(agedBrie)) {
        if (!item.is(ticket) && !item.is(legendary)) {
          item.decreaseQuality();
          if (item.is(conjured)) {
          	item.decreaseQuality();
          }
        } else {
          item.resetQuality();
        }
      } else {
        item.increaseQuality();
      }
    }
  }
  return items;
};
