import { Item } from '../classes/item';

// Define different items in your game for the City
export const cityItems: Item[] = [
  new Item('cityItem1', 'Antivirus Software', 'Protects against malware and viruses', 50),
  new Item('cityItem2', 'Firewall Software', 'Prevents unauthorized access to your system', 75),
  new Item('cityItem3', 'Penetration Testing Service', 'Test your system for vulnerabilities', 200),
  new Item('cityItem4', 'Security Token', 'Two-factor authentication for added security', 30),
  new Item('cityItem5', 'Online Cybersecurity Course', 'Learn cybersecurity skills online', 100),
  // Add more items as needed for the City
];

// Define different items in your game for the Black Market
export const blackMarketItems: Item[] = [
  new Item('blackMarketItem1', 'Hacking Toolset', 'Tools for advanced hacking techniques', 150),
  new Item('blackMarketItem2', 'Stolen Data', 'Confidential data from unknown sources', 120),
  new Item('blackMarketItem3', 'Zero-Day Exploit', 'Exploit for unpatched vulnerabilities', 250),
  new Item('blackMarketItem4', 'Dark Web Access', 'Access to hidden online communities', 50),
  new Item('blackMarketItem5', 'Ransomware Kit', 'Create and deploy ransomware', 180),
  // Add more items as needed for the Black Market
];
