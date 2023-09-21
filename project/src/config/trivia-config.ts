export const hackTriviaQuestions = [
  {
    question: "What is a phishing attack?",
    options: [
      "A method to catch fish",
      "An attempt to steal sensitive information by disguising as a trustworthy entity",
      "A type of computer virus",
    ],
    correctAnswer: "An attempt to steal sensitive information by disguising as a trustworthy entity",
    moneyGainIfCorrect: -50, // Adjust the money loss for falling for a phishing attack
    ethicalLossIfIncorrect: -10, // Adjust the ethical level loss for failing to recognize a phishing attack
  },
  {
    question: "What is ransomware?",
    options: [
      "A type of malware that encrypts your files and demands a ransom for decryption",
      "A type of antivirus software",
      "A secure way to store passwords",
    ],
    correctAnswer: "A type of malware that encrypts your files and demands a ransom for decryption",
    moneyGainIfCorrect: -100, // Adjust the money loss for falling victim to ransomware
    ethicalLossIfIncorrect: -20, // Adjust the ethical level loss for not understanding ransomware
  },
    {
    question: "What is a keylogger?",
    options: [
      "A tool used by locksmiths",
      "A type of malware that records keystrokes",
      "A method to unlock encrypted files",
    ],
    correctAnswer: "A type of malware that records keystrokes",
    moneyGainIfCorrect: -75,
    ethicalLossIfIncorrect: -15,
  },
  {
    question: "What is social engineering in the context of hacking?",
    options: [
      "A strategy for making friends online",
      "A type of encryption algorithm",
      "Manipulating individuals to reveal sensitive information or perform actions",
    ],
    correctAnswer: "Manipulating individuals to reveal sensitive information or perform actions",
    moneyGainIfCorrect: -60,
    ethicalLossIfIncorrect: -12,
  },
  {
    question: "What does the term 'zero-day vulnerability' refer to in cybersecurity?",
    options: [
      "A software bug that has been known for zero days",
      "A security flaw in a software or hardware system that is unknown to the vendor",
      "A vulnerability that affects computers running Windows 0",
    ],
    correctAnswer: "A security flaw in a software or hardware system that is unknown to the vendor",
    moneyGainIfCorrect: -90,
    ethicalLossIfIncorrect: -18,
  },
  // Add more hack-related questions
];

export const defendTriviaQuestions = [
  {
    question: "How can you protect yourself from phishing attacks?",
    options: [
      "Click on any link in an email to verify its source",
      "Never click on suspicious links or provide personal information in emails",
      "Share your passwords with trusted colleagues",
    ],
    correctAnswer: "Never click on suspicious links or provide personal information in emails",
    moneyGainIfCorrect: 20, // Adjust the money gain for successfully defending against phishing
    ethicalLossIfIncorrect: -10, // Adjust the ethical level loss for failing to defend against phishing
  },
  {
    question: "What is two-factor authentication (2FA)?",
    options: [
      "A method to unlock your smartphone",
      "A security process in which a user provides two different authentication factors to verify themselves",
      "A type of firewall",
    ],
    correctAnswer: "A security process in which a user provides two different authentication factors to verify themselves",
    moneyGainIfCorrect: 10, // Adjust the money gain for enabling 2FA
    ethicalLossIfIncorrect: -5, // Adjust the ethical level loss for not understanding 2FA
  },
    {
    question: "How can you enhance the security of your online accounts?",
    options: [
      "Use the same password for all accounts",
      "Enable multi-factor authentication (MFA)",
      "Share your passwords with family members",
    ],
    correctAnswer: "Enable multi-factor authentication (MFA)",
    moneyGainIfCorrect: 25,
    ethicalLossIfIncorrect: -5,
  },
  {
    question: "What is the purpose of a firewall in network security?",
    options: [
      "To block all incoming and outgoing network traffic",
      "To monitor internet usage",
      "To filter and control network traffic based on security rules",
    ],
    correctAnswer: "To filter and control network traffic based on security rules",
    moneyGainIfCorrect: 15,
    ethicalLossIfIncorrect: -3,
  },
  {
    question: "What does the term 'phishing awareness training' involve?",
    options: [
      "Training fish to avoid bait",
      "Educating individuals to recognize and avoid phishing attempts",
      "A type of fishing class",
    ],
    correctAnswer: "Educating individuals to recognize and avoid phishing attempts",
    moneyGainIfCorrect: 20,
    ethicalLossIfIncorrect: -10,
  },
  // Add more defend-related questions
];
