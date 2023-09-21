export class CybersecurityEvent {
  id: string;
  description: string;
  moneyImpact: number;
  ethicalImpact: number;

  constructor(id: string, description: string, moneyImpact: number, ethicalImpact: number) {
    this.id = id;
    this.description = description;
    this.moneyImpact = moneyImpact;
    this.ethicalImpact = ethicalImpact;
  }
}
