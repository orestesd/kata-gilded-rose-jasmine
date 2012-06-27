describe("GildedRose shop manager", function () {
  describe("Situación incial (tests de cobertura para refactor)", function () {

    it("actualiza la calidad y el sellIn de los productos adecuadamente", function () {
      var items = [];
      items.push(new Item("+5 Dexterity Vest", 10, 20));
      items.push(new Item("Aged Brie", 2, 0));
      items.push(new Item("Sulfuras, Hand of Ragnaros", 0, 80));
      items.push(new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20));
      items.push(new Item("Conjured Mana Cake", 3, 6));
      items = GildedRose.updateQuality(items);
      [
        {s:9,  q:19},
        {s:1,  q:1},
        {s:0,  q:80},
        {s:14, q:21},
        {s:2,  q:4}
      ].forEach(function (testCase, idx) {
            expect(items[idx].quality).toBe(testCase.q);
            expect(items[idx].sellIn).toBe(testCase.s);
          });
    });
    
    it("actualiza la calidad y el sellIn de los productos adecuadamente cuando hemos superado el sellIn", function () {
      var items = [];
      items.push(new Item("+5 Dexterity Vest", 0, 20));
      items.push(new Item("Aged Brie", 0, 0));
      items.push(new Item("Sulfuras, Hand of Ragnaros", 0, 80));
      items.push(new Item("Backstage passes to a TAFKAL80ETC concert", 0, 20));
      items.push(new Item("Conjured Mana Cake", 0, 6));
      items = GildedRose.updateQuality(items);
      [
        {s:0, q:18},
        {s:0, q:2},
        {s:0, q:80},
        {s:0, q:0},
        {s:0, q:2}
      ].forEach(function (testCase, idx) {
            expect(items[idx].quality).toBe(testCase.q);
            expect(items[idx].sellIn).toBe(testCase.s);
          });
    });
    
  });
});
