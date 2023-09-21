import { CybersecurityEvent } from '../classes/cybersecurity-event';

// Define different cybersecurity events
export const cybersecurityEvents: CybersecurityEvent[] = [
  new CybersecurityEvent('event1', 'Social Media Account Hacked', -200, -10),
  new CybersecurityEvent('event2', 'Phishing Attack Detected', -100, -5),
  new CybersecurityEvent('event3', 'Ransomware Attack', -500, -20),
  // Add more events as needed
];
