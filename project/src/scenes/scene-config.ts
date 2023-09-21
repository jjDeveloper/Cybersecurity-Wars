export const scenesConfig = {
  main: {
    description: 'Choose an action:',
    options: [
      { key: 'hack', description: 'Hack' },
      { key: 'defend', description: 'Defend' },
      // { key: 'city', description: 'Go to City' },
      // { key: 'blackmarket', description: 'Go to Black Market' },
      { key: 'travel', description: 'Travel' },
      // { key: 'buy', description: 'Buy' },
      // { key: 'sell', description: 'Sell' },
    ],
  },
  city: {
    description: 'Welcome to the City. What would you like to do?',
    options: [
      // Implement city scene options here
      { key: 'buy', description: 'Buy a product' },
      { key: 'sell', description: 'Sell a product' },
      { key: 'back', description: 'Go back to main menu' },
    ],
  },
  blackmarket: {
    description: 'Welcome to the Black Market. What would you like to do?',
    options: [
      // Implement black market scene options here
      { key: 'bmbuy', description: 'Buy a rare item' },
      { key: 'bmsell', description: 'Sell stolen data' },
      { key: 'back', description: 'Go back to main menu' },
    ],
  },
  travel: {
    description: 'Choose a destination to travel to:',
    options: [
      // Implement travel scene options here
      { key: 'city', description: 'City' },
      { key: 'blackmarket', description: 'Black Market' },
      { key: 'back', description: 'Go back to main menu' },
    ],
  },
  buy: {
    description: 'Choose a product to buy:',
    options: [
      // Implement buy scene options here
      { key: 'product1', description: 'Product 1' },
      { key: 'product2', description: 'Product 2' },
      { key: 'back', description: 'Go back to main menu' },
    ],
  },
  sell: {
    description: 'Choose a product to sell:',
    options: [
      // Implement sell scene options here
      { key: 'product1', description: 'Product 1' },
      { key: 'product2', description: 'Product 2' },
      { key: 'back', description: 'Go back to main menu' },
    ],
  },
  bmsell: {
    description: 'Choose a product to sell:',
    options: [
      // Implement sell scene options here
      { key: 'product1', description: 'Product 1' },
      { key: 'product2', description: 'Product 2' },
      { key: 'back', description: 'Go back to main menu' },
    ],
  },
  bmbuy: {
    description: 'Choose a product to buy:',
    options: [
      // Implement buy scene options here
      { key: 'product1', description: 'Product 1' },
      { key: 'product2', description: 'Product 2' },
      { key: 'back', description: 'Go back to main menu' },
    ],
  },
};