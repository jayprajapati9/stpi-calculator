const streams = [
  [
    "stpi-it",
    "Information Technology",
    "it2.png"
  ],
  [
    "stpi-electrical",
    "Electrical",
    "electrical.png"
  ],
  [
    "stpi-mechanical",
    "Mechanical",
    "mech1.png"
  ],
  [
    "stpi-computer",
    "Computer",
    "computer.png"
  ],
  [
    "stpi-civil",
    "Civil",
    "civil.png"
  ],
  [
    "stpi-automobile",
    "AutoMobile",
    "automobile.png"
  ],
  [
    "stpi-chemical",
    "Chemical",
    "chemical.png"
  ],
  [
    "stpi-electronics",
    "Electronics",
    "electronics.png"
  ]
]


const subjectsList = {
  "it16": {
    "sname": "Information Technology",
    "sem5TotalCr": 28,
    "sem6TotalCr": 27,
    "subjects": [
      {
        "name": "Elective-1",
        "shortform": "ELECTIVE-1",
        "code": "NULL",
        "sem": 5,
        "credit": 7
      },
      {
        "name": "Java Programming",
        "shortform": "JAVA",
        "code": 3350703,
        "sem": 5,
        "credit": 7
      },
      {
        "name": "Information Communication Networks",
        "shortform": "ICN",
        "code": 3351601,
        "sem": 5,
        "credit": 7
      },
      {
        "name": "Essentials Of Network Security",
        "shortform": "ENS",
        "code": 3351602,
        "sem": 5,
        "credit": 7
      },
      {
        "name": "Elective-2",
        "shortform": "ELECTIVE-2",
        "code": "NULL",
        "sem": 6,
        "credit": 7
      },
      {
        "name": "Elective-3",
        "shortform": "ELECTIVE-3",
        "code": "NULL",
        "sem": 6,
        "credit": 7
      },
      {
        "name": "Advance Java Programming",
        "shortform": "AJP",
        "code": 3360701,
        "sem": 6,
        "credit": 7
      },
      {
        "name": "Web And Network Security",
        "shortform": "AJP",
        "code": 3361601,
        "sem": 6,
        "credit": 6
      }
    ]
  },
  "electrical09": {
    "sname": "Electrical Engineering",
    "sem5TotalCr": 28,
    "sem6TotalCr": 22,
    "subjects": [
      {
        "name": "Elective-1",
        "shortform": "ELECTIVE-1",
        "code": "NULL",
        "sem": 5,
        "credit": 5
      },
      {
        "name": "Wiring Estimating, Costing & Contracting",
        "shortform": "WECC",
        "code": 3350901,
        "sem": 5,
        "credit": 5
      },
      {
        "name": "Energy Conservation & Audit",
        "shortform": "EC&A",
        "code": 3350902,
        "sem": 5,
        "credit": 6
      },
      {
        "name": "Power Electronics",
        "shortform": "PE",
        "code": 3350903,
        "sem": 5,
        "credit": 6
      },
      {
        "name": "Microprocessor And Controller Applications",
        "shortform": "MPCA",
        "code": 3350904,
        "sem": 5,
        "credit": 6
      },
      {
        "name": "Elective-2",
        "shortform": "ELECTIVE-2",
        "code": "NULL",
        "sem": 6,
        "credit": 5
      },
      {
        "name": "Elective-3",
        "shortform": "ELECTIVE-3",
        "code": "NULL",
        "sem": 6,
        "credit": 5
      },
      {
        "name": "Switchgear & Protection",
        "shortform": "SGP",
        "code": 3360901,
        "sem": 6,
        "credit": 6
      },
      {
        "name": "Installation, Commissioning And Maintenance",
        "shortform": "ICM",
        "code": 3360902,
        "sem": 6,
        "credit": 6
      }
    ]
  },
  "mechanical19": {
    "sname": "Mechanical Engineering",
    "sem5TotalCr": 30,
    "sem6TotalCr": 22,
    "subjects": [
      {
        "name": "Elective-1",
        "shortform": "ELECTIVE-1",
        "code": "NULL",
        "sem": 5,
        "credit": 5
      },
      {
        "name": "THERMAL ENGINEERING-II",
        "shortform": "THE-II",
        "code": 3351901,
        "sem": 5,
        "credit": 4
      },
      {
        "name": "Design Of Machine Elements",
        "shortform": "DOM",
        "code": 3351902,
        "sem": 5,
        "credit": 5
      },
      {
        "name": "MANUFACTURING ENGINEERING-III",
        "shortform": "ME-III",
        "code": 3351903,
        "sem": 5,
        "credit": 7
      },
      {
        "name": "Industrial Engineering",
        "shortform": "IE",
        "code": 3351904,
        "sem": 5,
        "credit": 5
      },
      {
        "name": "Estimating, Costing And Engineering Contracting	",
        "shortform": "ECC",
        "code": 3351905,
        "sem": 5,
        "credit": 4
      },
      {
        "name": "Elective-2",
        "shortform": "ELECTIVE-2",
        "code": "NULL",
        "sem": 6,
        "credit": 5
      },
      {
        "name": "Elective-3",
        "shortform": "ELECTIVE-3",
        "code": "NULL",
        "sem": 6,
        "credit": 5
      },

      {
        "name": "Computer Aided Manufacturing",
        "shortform": "CAM",
        "code": 3361901,
        "sem": 6,
        "credit": 4
      },
      {
        "name": "Tool Engineering",
        "shortform": "TE",
        "code": 3361902,
        "sem": 6,
        "credit": 5
      },
      {
        "name": "Industrial Management",
        "shortform": "IM",
        "code": 3361903,
        "sem": 6,
        "credit": 3
      }
    ]
  },
  "computer07": {
    "sname": "Computer Engineering",
    "sem5TotalCr": 26,
    "sem6TotalCr": 21,
    "subjects": [
      {
        "name": "Elective-1",
        "shortform": "ELECTIVE-1",
        "code": "NULL",
        "sem": 5,
        "credit": 7
      },
      {
        "name": "Computer Maintenance And Trouble Shooting",
        "shortform": "CMT",
        "code": 3350701,
        "sem": 5,
        "credit": 5
      },
      {
        "name": "Dynamic Web Page Development",
        "shortform": "DWPD",
        "code": 3350702,
        "sem": 5,
        "credit": 7
      },
      {
        "name": "Java Programming",
        "shortform": "JAVA",
        "code": 3350703,
        "sem": 5,
        "credit": 7
      },
      {
        "name": "Elective-2",
        "shortform": "ELECTIVE-2",
        "code": "NULL",
        "sem": 6,
        "credit": 7
      },
      {
        "name": "Elective-3",
        "shortform": "ELECTIVE-3",
        "code": "NULL",
        "sem": 6,
        "credit": 7
      },
      {
        "name": "Advance Java Programming",
        "shortform": "AJP",
        "code": 3360701,
        "sem": 6,
        "credit": 7
      }
    ]
  },
  "civil06": {
    "sname": "Civil Engineering",
    "sem5TotalCr": 29,
    "sem6TotalCr": 27,
    "subjects": [
      {
        "name": "Elective-1",
        "shortform": "ELECTIVE-1",
        "code": "NULL",
        "sem": 5,
        "credit": 5
      },
      {
        "name": "Design Of Steel Structure",
        "shortform": "DSS",
        "code": 3350601,
        "sem": 5,
        "credit": 7
      },
      {
        "name": "Concrete Technology",
        "shortform": "CT",
        "code": 3350602,
        "sem": 5,
        "credit": 5
      },
      {
        "name": "Water Supply & Sanitary Engineering",
        "shortform": "WSSE",
        "code": 3350603,
        "sem": 5,
        "credit": 5
      },
      {
        "name": "Estimating, Costing & Valuation	",
        "shortform": "ECV",
        "code": 3350604,
        "sem": 5,
        "credit": 7
      },
      {
        "name": "Elective-2",
        "shortform": "ELECTIVE-2",
        "code": "NULL",
        "sem": 6,
        "credit": 5
      },
      {
        "name": "Elective-3",
        "shortform": "ELECTIVE-3",
        "code": "NULL",
        "sem": 6,
        "credit": 5
      },
      {
        "name": "Design Of Reinforced Concrete Structures",
        "shortform": "DRCS",
        "code": 3360601,
        "sem": 6,
        "credit": 7
      },
      {
        "name": "Construction Quality Control & Monitoring",
        "shortform": "CQCM",
        "code": 3360602,
        "sem": 6,
        "credit": 5
      },
      {
        "name": "Construction Project Management",
        "shortform": "CPM",
        "code": 3360603,
        "sem": 6,
        "credit": 5
      }
    ]
  },
  "automobile02": {
    "sname": "AutoMobile Engineering",
    "sem5TotalCr": 28,
    "sem6TotalCr": 29,
    "subjects": [
      {
        "name": "Vehicle Body Engineering",
        "shortform": "VBE",
        "code": 3340201,
        "sem": 4,
        "credit": 5
      },
      {
        "name": "Vehicle Kinematics & Dynamics",
        "shortform": "VKD",
        "code": 3340202,
        "sem": 4,
        "credit": 6
      },
      {
        "name": "Modern Vehicle Technology",
        "shortform": "MVT",
        "code": 3340203,
        "sem": 4,
        "credit": 6
      },
      {
        "name": "Automobile Industrial Management",
        "shortform": "AIM",
        "code": 3340204,
        "sem": 4,
        "credit": 3
      },
      {
        "name": "Automobile Manufacturing Technology",
        "shortform": "AMT",
        "code": 3340206,
        "sem": 4,
        "credit": 6
      },
      {
        "name": "Human Resource Management For Auto Industry",
        "shortform": "HRMAI",
        "code": 3340207,
        "sem": 4,
        "credit": 2
      },
      {
        "name": "Auto Engines Diagnosis And Testing",
        "shortform": "AEDT",
        "code": 3360201,
        "sem": 6,
        "credit": 6
      },
      {
        "name": "Auto Transmission-Mechanism Diagnosis & Testing",
        "shortform": "ATMDT",
        "code": 3360202,
        "sem": 6,
        "credit": 6
      },
      {
        "name": "Auto Electrical System Diagnosis & Testing",
        "shortform": "AESDT",
        "code": 3360203,
        "sem": 6,
        "credit": 6
      },
      {
        "name": "Vehicle Air Conditioning",
        "shortform": "VAC",
        "code": 3360604,
        "sem": 6,
        "credit": 5
      },
      {
        "name": "Motor Vehicle Acts & Loss Assesment",
        "shortform": "MVALA",
        "code": 3360205,
        "sem": 6,
        "credit": 3
      }
    ]
  },
  "chemical05": {
    "sname": "Chemical Engineering",
    "sem5TotalCr": 30,
    "sem6TotalCr": 24,
    "subjects": [
      {
        "name": "Industrial Management",
        "shortform": "IM",
        "code": 3350501,
        "sem": 5,
        "credit": 3
      },
      {
        "name": "Mass Transfer - II",
        "shortform": "MT-II",
        "code": 3350502,
        "sem": 5,
        "credit": 8
      },
      {
        "name": "Petroleum Refining & Petrochemical Technology",
        "shortform": "PRPT",
        "code": 3350503,
        "sem": 5,
        "credit": 6
      },
      {
        "name": "Utilities And Instrumentation In Chemical Plant",
        "shortform": "UICP",
        "code": 3350504,
        "sem": 5,
        "credit": 8
      },
      {
        "name": "Chemical Engineering Thermodynamics",
        "shortform": "CET",
        "code": 3350505,
        "sem": 5,
        "credit": 5
      },
      {
        "name": "Elective-1",
        "shortform": "ELECTIVE-1",
        "code": "NULL",
        "sem": 6,
        "credit": 5
      },
      {
        "name": "Fertilizer Technology",
        "shortform": "FT",
        "code": 3360501,
        "sem": 6,
        "credit": 6
      },
      {
        "name": "Chemical Engineering Plant Economics",
        "shortform": "CEPE",
        "code": 3360502,
        "sem": 6,
        "credit": 8
      },
      {
        "name": "Chemical Reaction Engineering",
        "shortform": "CRE",
        "code": 3360503,
        "sem": 6,
        "credit": 5
      }
    ]
  },
  "electronics11": {
    "sname": "Electronics Communication",
    "sem5TotalCr": 24,
    "sem6TotalCr": 22,
    "subjects": [
      {
        "name": "Elective-1",
        "shortform": "ELECTIVE-1",
        "code": "NULL",
        "sem": 5,
        "credit": 6
      },
      {
        "name": "Microcontroller",
        "shortform": "MC",
        "code": 3351101,
        "sem": 5,
        "credit": 6
      },
      {
        "name": "Mobile Communication",
        "shortform": "MC",
        "code": 3351102,
        "sem": 5,
        "credit": 6
      },
      {
        "name": "Microwave & Radar Engineering",
        "shortform": "MRE",
        "code": 3351103,
        "sem": 5,
        "credit": 6
      },
      {
        "name": "Elective-2",
        "shortform": "ELECTIVE-2",
        "code": "NULL",
        "sem": 6,
        "credit": 6
      },
      {
        "name": "Elective-3",
        "shortform": "ELECTIVE-3",
        "code": "NULL",
        "sem": 6,
        "credit": 6
      },
      {
        "name": "Entrepreneurship & Industrial Management",
        "shortform": "EIM",
        "code": 3361101,
        "sem": 6,
        "credit": 4
      },
      {
        "name": "Consumer Electronics",
        "shortform": "CE",
        "code": 3361102,
        "sem": 6,
        "credit": 6
      }
    ]
  }
}

module.exports = {
  streams,
  subjectsList
}
// module.exports = streams;