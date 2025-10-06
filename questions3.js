const questions = [
  {
    "question": "57. At what fuel flow level does the warning threshold begin (red arc)?",
    "options": ["a) Greater than 30 USG/h", "b) Greater than 25 USG/h", "c) Greater than 35 USG/h", "d) Greater than 20 USG/h"],
    "correct": 0
  }
  {
    "question": "58. What is the warning range for the fuel totalizer in US gallons (red arc)?",
    "options": ["a) 9-14 USG", "b) Greater than 14 USG", "c) 0-9 USG", "d) 0-14 USG"],
    "correct": 1
  },
  {
    "question": "59. What is the caution range for the fuel totalizer in US gallons (yellow arc)?",
    "options": ["a) 9-14 USG", "b) Greater than 14 USG", "c) 0-9 USG", "d) 0-14 USG"],
    "correct": 2
  },
  {
    "question": "60. What is the normal range for the fuel totalizer in US gallons (green arc)?",
    "options": ["a) 9-14 USG", "b) 0-9 USG", "c) 0-14 USG", "d) Greater than 14 USG"],
    "correct": 2
  },
  {
    "question": "61. At what fuel quantity level does the warning range begin, indicated by the red arc?",
    "options": ["a) 0 USG", "b) 9-14 USG", "c) 14-46 USG", "d) 0-14 USG"],
    "correct": 0
  },
  {
    "question": "62. What is the caution range for fuel quantity in US gallons (yellow arc)?",
    "options": ["a) Greater than 46 USG", "b) 0-14 USG", "c) 14-46 USG", "d) 0-9 USG"],
    "correct": 2
  },
  {
    "question": "63. What is the normal range for fuel quantity in US gallons (green arc)?",
    "options": ["a) 0-9 USG", "b) 14-46 USG", "c) 0-14 USG", "d) Greater than 46 USG"],
    "correct": 1
  },
  {
    "question": "64. When must the fuel pump be set to BOOST?",
    "options": ["a) Only when switching fuel tanks", "b) Only during takeoff and landing", "c) During cruise and descent", "d) During takeoff, climb, landing, and switching fuel tanks"],
    "correct": 3
  },
  {
    "question": "65. What is the oil capacity specified for the system?",
    "options": ["a) 8 USQ (7.6 L)", "b) 6 USQ (5.6 L)", "c) 9 USQ (8.6 L)", "d) 7 USQ (6.6 L)"],
    "correct": 0
  },
  {
    "question": "66. What is the maximum oil temperature allowed for the system?",
    "options": ["a) 116 C (240 F)", "b) 110 C (230 F)", "c) 120 C (248 F)", "d) 100 C (212 F)"],
    "correct": 0
  },
  {
    "question": "67. What is the minimum oil temperature required for takeoff?",
    "options": ["a) 24 C (75 F)", "b) 20 C (68 F)", "c) 15 C (59 F)", "d) 30 C (86 F)"],
    "correct": 1
  },
  {
    "question": "68. What is the acceptable oil pressure range for the system?",
    "options": ["a) 10 psi to 100 psi", "b) 20 psi to 120 psi", "c) 15 psi to 110 psi", "d) 5 psi to 90 psi"],
    "correct": 0
  },
  {
    "question": "69. Which standard must the oils conform to for use in the system?",
    "options": ["a) SAE J2099 (High-Performance Lubrication Oil)", "b) SAE J1999 (Synthetic Lubrication Oil)", "c) SAE J1899 (Ashless Dispersant Lubrication Oil)", "d) SAE J1799 (Mineral Lubrication Oil)"],
    "correct": 2
  },
  {
    "question": "70. Which oil types are recommended for use above 4 C?",
    "options": ["a) SAE 60, 30W60, or 30W70", "b) SAE 40, 15W40, or 15W50", "c) SAE 50, 20W50, or 20W60", "d) SAE 30, 10W30, or 10W40"],
    "correct": 2
  },
  {
    "question": "71. What is the voltage range indicated by the green arc for the Essential bus (0-36V)?",
    "options": ["a) >32V", "b) <24.5V", "c) 24.5-32V", "d) 0-24.4V"],
    "correct": 2
  },
  {
    "question": "72. What is the voltage threshold indicated by the red arc (max warning) for the Essential bus (0-36V)?",
    "options": ["a) <24.5V", "b) 24.5-32V", "c) 0-24.4V", "d) >32V"],
    "correct": 3
  },
  {
    "question": "73. What is the voltage threshold indicated by the red arc (minimum warning) for the Essential bus (0-36V)?",
    "options": ["a) 0-24.4V", "b) 24.5-32V", "c) >32V", "d) <24.5V"],
    "correct": 0
  },
  {
    "question": "74. What is the voltage range indicated by the green arc for Main bus 1 (0-36V)?",
    "options": ["a) <24.5V", "b) 24.5-32V", "c) >32V", "d) 0-24.4V"],
    "correct": 1
  },
  {
    "question": "75. What is the voltage range indicated by the yellow arc for Main bus 1 (0-36V)?",
    "options": ["a) >32V", "b) <24.5V", "c) 24.5-32V", "d) 0-24.4V"],
    "correct": 2
  },
  {
    "question": "76. What is the voltage threshold indicated by the red arc for Main bus 1 (0-36V)?",
    "options": ["a) >32V", "b) 0-24.4V", "c) 24.5-32V", "d) <24.5V"],
    "correct": 1
  },
  {
    "question": "77. What is the voltage range indicated by the green arc for Main bus 2 (0-36V)?",
    "options": ["a) <24.5V", "b) 0-24.4V", "c) >32V", "d) 24.5-32V"],
    "correct": 1
  },
  {
    "question": "78. What is the voltage range indicated by the yellow arc for Main bus 2 (0-36V)?",
    "options": ["a) 0-24.4V", "b) <24.5V", "c) 24.5-32V", "d) >32V"],
    "correct": 2
  },
  {
    "question": "79. What is the voltage threshold indicated by the red arc for Main bus 2 (0-36V)?",
    "options": ["a) 24.5-32V", "b) 0-24.4V", "c) <24.5V", "d) >32V"],
    "correct": 3
  },
  {
    "question": "80. What is the current range indicated by the green arc for Alternator 1 (0-100A)?",
    "options": ["a) 0-70A", "b) 2-59A", "c) 2-100A", "d) 0-1A"],
    "correct": 2
  },
  {
    "question": "81. What is the current range indicated by the yellow arc for Alternator 1 (0-100A)?",
    "options": ["a) 2-100A", "b) 2-59A", "c) 0-1A", "d) 0-70A"],
    "correct": 1
  },
  {
    "question": "82. What is the current range indicated by the green arc for Alternator 2 (0-70A)?",
    "options": ["a) 0-1A", "b) 0-59A", "c) 2-70A", "d) 2-100A"],
    "correct": 2
  },
  {
    "question": "83. What is the current range indicated by the yellow arc for Alternator 2 (0-70A)?",
    "options": ["a) 0-59A", "b) 0-1A", "c) 2-100A", "d) 2-70A"],
    "correct": 0
  },
  {
    "question": "84. What is the current range indicated by the green arc for Battery 1 (-59-59A)?",
    "options": ["a) -4-59A", "b) 0-1A", "c) -59--5A", "d) 2-100A"],
    "correct": 0
  }
];