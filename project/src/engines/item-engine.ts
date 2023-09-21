import { Item } from '../classes/item';
import { cityItems, blackMarketItems } from '../config/items-config';

export class ItemEngine {
  private static instance: ItemEngine;
  private cityItems: Item[] = [];
  private blackMarketItems: Item[] = [];

  private constructor() {
    // Initialize item prices from the configuration
    this.cityItems = cityItems.map(item => ({ ...item }));
    this.blackMarketItems = blackMarketItems.map(item => ({ ...item }));
  }

  public static getInstance(): ItemEngine {
    if (!ItemEngine.instance) {
      ItemEngine.instance = new ItemEngine();
    }
    return ItemEngine.instance;
  }

public updateItemPrices(): void {
  // Simulate price fluctuation for each item in both sets
  this.cityItems.concat(this.blackMarketItems).forEach(item => {
    // Adjust the price by a random percentage between -10% and 10%
    const priceChangePercentage = (Math.random() * 20 - 10) / 100;
    let newPrice = item.price * (1 + priceChangePercentage);
    
    // Ensure that the price doesn't go below a minimum value (e.g., 10) or above a maximum value (e.g., 500)
    newPrice = Math.min(Math.max(newPrice, 10), 500);
    
    // Round the new price to two decimal places
    item.price = parseFloat(newPrice.toFixed(2));
  });
}


  public getCityItems(): Item[] {
    return this.cityItems;
  }

  public getBlackMarketItems(): Item[] {
    return this.blackMarketItems;
  }
}
