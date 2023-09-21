export default class EthicalEngine {
  static increaseEthicalLevel(ethicalLevel: number, amount = 1) {
    // Ensure the ethical level is within a certain range (e.g., 0 to 100)
    console.log("EthicalLevel", ethicalLevel)
    const newLevel = ethicalLevel + amount;
    const result = Math.min(Math.max(newLevel, 0), 100);
    return result;
  }

  static decreaseEthicalLevel(ethicalLevel: number, amount = 1) {
    // Ensure the ethical level is within a certain range (e.g., 0 to 100)
    console.log("EthicalLevel", ethicalLevel)
    console.log("amount", amount)
    const newLevel = ethicalLevel + amount;
    console.log("calculation", ethicalLevel)
    const result = Math.min(Math.max(newLevel, 0), 100);
    console.log("result", result)
    return result;
  }
}