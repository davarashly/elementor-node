db = db.getSiblingDB("flex")

db.createUser({
  user: "flex",
  pwd: "fooba",
  roles: [
    {
      role: "readWrite",
      db: "flex",
    },
  ],
})

db.users.insertMany([
  {
    fullName: "Boyd Volkman",
    email: "b.volkman@hotmail.com",
    address: "6687 Hudson Trafficway",
    acl: "vcc",
    homeLocation: {
      lat: 34.561185,
      lng: -108.436181,
    },
  },
  {
    fullName: "Faith Labadie",
    email: "f.labadie@hotmail.com",
    address: "036 Yost Estate",
    acl: "acc",
    homeLocation: {
      lat: 22.394499,
      lng: -166.281576,
    },
  },
  {
    fullName: "Margaret Howell",
    email: "m.howell@hotmail.com",
    address: "741 Maxime Pike",
    acl: "vcc",
    homeLocation: {
      lat: 12.202371,
      lng: -157.54988,
    },
  },
  {
    fullName: "Laura Fadel",
    email: "l.fadel@hotmail.com",
    address: "1904 Mozell Hollow",
    acl: "ecc",
    homeLocation: {
      lat: -70.958711,
      lng: -171.028727,
    },
    avatar: "vxvxcvaasd.jpg",
  },
  {
    fullName: "Johanna Lang",
    email: "j.lang@hotmail.com",
    address: "58239 Christ Mountains",
    acl: "vcc",
    homeLocation: {
      lat: 56.923148,
      lng: 113.709511,
    },
    avatar: "asdadadadada.jpg",
  },
  {
    fullName: "Dexter Quitzon",
    email: "d.quitzon@hotmail.com",
    address: "4866 Erik Light",
    acl: "vcc",
    homeLocation: {
      lat: -75.287501,
      lng: 5.199461,
    },
  },
  {
    fullName: "Dr. Darlene Mertz",
    email: "d.mertz@hotmail.com",
    address: "37248 Phoebe Fork",
    acl: "vcc",
    homeLocation: {
      lat: -17.611384,
      lng: 162.265692,
    },
  },
  {
    fullName: "Dr. Kim McKenzie",
    email: "k.mckenzie@hotmail.com",
    address: "29514 Mante Road",
    acl: "vcc",
    homeLocation: {
      lat: -4.91546,
      lng: -11.942556,
    },
  },
  {
    fullName: "Tiffany Hirthe",
    email: "t.hirthe@hotmail.com",
    address: "923 Doyle Port",
    acl: "acc",
    homeLocation: {
      lat: -31.334793,
      lng: 72.333129,
    },
    avatar: "asdadsaadda.jpg",
  },
  {
    fullName: "Nicholas Legros",
    email: "n.legros@hotmail.com",
    address: "70517 Turner Park",
    acl: "ecc",
    homeLocation: {
      lat: -36.865742,
      lng: 130.353397,
    },
    avatar: "aaxzcs.jpg",
  },
  {
    fullName: "Leticia Schumm",
    email: "l.schumm@hotmail.com",
    address: "2896 Joannie Ways",
    acl: "acc",
    homeLocation: {
      lat: 36.903218,
      lng: 178.640901,
    },
    avatar: "asdadsaadda.jpg",
  },
  {
    fullName: "Vicki Shields",
    email: "v.shields@hotmail.com",
    address: "67519 Reilly Neck",
    acl: "vcc",
    homeLocation: {
      lat: 65.452513,
      lng: 33.65013,
    },
    avatar: "vgdfggdfg.jpg",
  },
  {
    fullName: "Dora Beatty",
    email: "d.beatty@hotmail.com",
    address: "1316 Ozella Row",
    acl: "ecc",
    homeLocation: {
      lat: 82.91796,
      lng: 55.140592,
    },
  },
  {
    fullName: "Ashley Roberts",
    email: "a.roberts@hotmail.com",
    address: "945 Lueilwitz Roads",
    acl: "vcc",
    homeLocation: {
      lat: -19.633101,
      lng: 101.820117,
    },
    avatar: "asdadadadada.jpg",
  },
  {
    fullName: "Nora Gottlieb",
    email: "n.gottlieb@hotmail.com",
    address: "6233 Effertz Center",
    acl: "vcc",
    homeLocation: {
      lat: 14.38485,
      lng: -10.517437,
    },
    avatar: "jgjhghgj.jpg",
  },
  {
    fullName: "Rochelle Gleichner",
    email: "r.gleichner@hotmail.com",
    address: "9070 Lemke Union",
    acl: "vcc",
    homeLocation: {
      lat: 88.365938,
      lng: -114.208432,
    },
  },
  {
    fullName: "Kara Ratke",
    email: "k.ratke@hotmail.com",
    address: "5108 Fritsch Shoals",
    acl: "vcc",
    homeLocation: {
      lat: 43.457309,
      lng: -84.798871,
    },
    avatar: "jghhjhg.jpg",
  },
  {
    fullName: "Vicki Corwin DDS",
    email: "v.corwin@hotmail.com",
    address: "308 Wehner Station",
    acl: "vcc",
    homeLocation: {
      lat: -1.996506,
      lng: 66.45362,
    },
  },
  {
    fullName: "Alexander Toy",
    email: "a.toy@hotmail.com",
    address: "25403 Ephraim Fort",
    acl: "acc",
    homeLocation: {
      lat: -18.626499,
      lng: 37.973128,
    },
  },
  {
    fullName: "Tommie Beahan",
    email: "t.beahan@hotmail.com",
    address: "1198 Rogahn Extension",
    acl: "ecc",
    homeLocation: {
      lat: 22.097433,
      lng: -103.545569,
    },
    avatar: "vgdfggdfg.jpg",
  },
  {
    fullName: "Melvin Schuster",
    email: "m.schuster@hotmail.com",
    address: "91664 Lehner Cliff",
    acl: "vcc",
    homeLocation: {
      lat: -76.791191,
      lng: 112.856409,
    },
  },
  {
    fullName: "Willie Turner",
    email: "w.turner@hotmail.com",
    address: "199 Celine Mountains",
    acl: "ecc",
    homeLocation: {
      lat: -72.185504,
      lng: 51.230851,
    },
  },
  {
    fullName: "Shane Skiles",
    email: "s.skiles@hotmail.com",
    address: "7486 Spencer Path",
    acl: "vcc",
    homeLocation: {
      lat: -77.68931,
      lng: 50.592883,
    },
    avatar: "dgfdgfdgfdgdfg.jpg",
  },
  {
    fullName: "Pauline Daniel Jr.",
    email: "p.daniel@hotmail.com",
    address: "789 Trantow Tunnel",
    acl: "vcc",
    homeLocation: {
      lat: 44.055588,
      lng: -142.305397,
    },
  },
  {
    fullName: "Ed Roob",
    email: "e.roob@hotmail.com",
    address: "0658 Lindsey Light",
    acl: "vcc",
    homeLocation: {
      lat: -68.272256,
      lng: 29.028408,
    },
  },
  {
    fullName: "Claire Wiegand",
    email: "c.wiegand@hotmail.com",
    address: "6368 Bechtelar Forges",
    acl: "vcc",
    homeLocation: {
      lat: 12.786611,
      lng: -62.672198,
    },
  },
  {
    fullName: "Nick Mann",
    email: "n.mann@hotmail.com",
    address: "5095 Oceane Ford",
    acl: "vcc",
    homeLocation: {
      lat: -74.754499,
      lng: 84.058711,
    },
    avatar: "asdadadadada.jpg",
  },
  {
    fullName: "Lynette Kreiger",
    email: "l.kreiger@hotmail.com",
    address: "4329 Sherman Track",
    acl: "ecc",
    homeLocation: {
      lat: -41.021139,
      lng: 122.027141,
    },
  },
  {
    fullName: "Jo Dare",
    email: "j.dare@hotmail.com",
    address: "4391 Lebsack Tunnel",
    acl: "vcc",
    homeLocation: {
      lat: -20.089441,
      lng: 100.55962,
    },
  },
  {
    fullName: "Spencer McDermott",
    email: "s.mcdermott@hotmail.com",
    address: "4124 Kassulke Alley",
    acl: "vcc",
    homeLocation: {
      lat: -73.766092,
      lng: 138.486694,
    },
  },
  {
    fullName: "Lois Turner V",
    email: "l.turner@hotmail.com",
    address: "37028 Hermann Cliffs",
    acl: "ecc",
    homeLocation: {
      lat: 21.042451,
      lng: 68.43688,
    },
  },
  {
    fullName: "Mrs. Hope Gerlach",
    email: "h.gerlach@hotmail.com",
    address: "73310 Weissnat Estate",
    acl: "vcc",
    homeLocation: {
      lat: -82.697505,
      lng: 161.962111,
    },
  },
  {
    fullName: "Dr. Iris Von",
    email: "i.von@hotmail.com",
    address: "069 Hosea Road",
    acl: "vcc",
    homeLocation: {
      lat: -83.217398,
      lng: 176.113756,
    },
    avatar: "asdadsaadda.jpg",
  },
  {
    fullName: "Josh Johns Jr.",
    email: "j.johns@hotmail.com",
    address: "93380 Tracy Ports",
    acl: "vcc",
    homeLocation: {
      lat: -73.381046,
      lng: -46.72553,
    },
    avatar: "asdadsaadda.jpg",
  },
  {
    fullName: "Mrs. Nelson Runte",
    email: "n.runte@hotmail.com",
    address: "7985 Alfredo Port",
    acl: "vcc",
    homeLocation: {
      lat: -4.394544,
      lng: 178.36857,
    },
    avatar: "jghhjhg.jpg",
  },
  {
    fullName: "Evan Gislason",
    email: "e.gislason@hotmail.com",
    address: "7674 Ryann Trail",
    acl: "ecc",
    homeLocation: {
      lat: 67.226127,
      lng: 160.023498,
    },
  },
  {
    fullName: "Dr. Randal Metz",
    email: "r.metz@hotmail.com",
    address: "284 Jaylon Ferry",
    acl: "vcc",
    homeLocation: {
      lat: -88.782571,
      lng: -30.082868,
    },
  },
  {
    fullName: "Shari Harvey",
    email: "s.harvey@hotmail.com",
    address: "93645 Alexa Forge",
    acl: "vcc",
    homeLocation: {
      lat: 23.178438,
      lng: 58.417032,
    },
  },
  {
    fullName: "Dwayne Corwin",
    email: "d.corwin@hotmail.com",
    address: "01309 Flatley Ville",
    acl: "ecc",
    homeLocation: {
      lat: 71.256034,
      lng: -47.911873,
    },
    avatar: "vgdfggdfg.jpg",
  },
  {
    fullName: "Russell Thiel",
    email: "r.thiel@hotmail.com",
    address: "790 Krystel Glen",
    acl: "ecc",
    homeLocation: {
      lat: -3.034739,
      lng: 30.585344,
    },
  },
  {
    fullName: "Megan Ratke",
    email: "m.ratke@hotmail.com",
    address: "6598 Hirthe Drive",
    acl: "ecc",
    homeLocation: {
      lat: 68.62312,
      lng: 41.091817,
    },
    avatar: "asdadsaadda.jpg",
  },
  {
    fullName: "Leon Yundt",
    email: "l.yundt@hotmail.com",
    address: "848 Therese Station",
    acl: "vcc",
    homeLocation: {
      lat: 60.352755,
      lng: 121.391811,
    },
    avatar: "vxvxcvaasd.jpg",
  },
  {
    fullName: "Dr. Johnny Gleichner",
    email: "j.gleichner@hotmail.com",
    address: "058 Little Well",
    acl: "vcc",
    homeLocation: {
      lat: 76.622918,
      lng: 111.029682,
    },
  },
  {
    fullName: "Debbie Klein",
    email: "d.klein@hotmail.com",
    address: "86238 Wuckert Lane",
    acl: "vcc",
    homeLocation: {
      lat: 75.848628,
      lng: -41.407897,
    },
    avatar: "aaxzcs.jpg",
  },
  {
    fullName: "Genevieve Jacobson",
    email: "g.jacobson@hotmail.com",
    address: "4867 Darrin Junctions",
    acl: "vcc",
    homeLocation: {
      lat: 75.788204,
      lng: 9.927691,
    },
    avatar: "jgjhghgj.jpg",
  },
  {
    fullName: "Sally Labadie",
    email: "s.labadie@hotmail.com",
    address: "50103 Eda Glens",
    acl: "vcc",
    homeLocation: {
      lat: 1.380159,
      lng: 101.985544,
    },
  },
  {
    fullName: "Norma Rippin",
    email: "n.rippin@hotmail.com",
    address: "19174 Marjolaine Mount",
    acl: "vcc",
    homeLocation: {
      lat: 89.33462,
      lng: -6.153679,
    },
  },
  {
    fullName: "David Williamson",
    email: "d.williamson@hotmail.com",
    address: "47309 Felicity Dale",
    acl: "vcc",
    homeLocation: {
      lat: -5.083283,
      lng: -33.170124,
    },
    avatar: "asdadadadada.jpg",
  },
  {
    fullName: "Brad Kerluke",
    email: "b.kerluke@hotmail.com",
    address: "580 Dooley Heights",
    acl: "vcc",
    homeLocation: {
      lat: 57.467331,
      lng: 7.461664,
    },
  },
  {
    fullName: "Franklin Bartell",
    email: "f.bartell@hotmail.com",
    address: "6538 Freddie Neck",
    acl: "vcc",
    homeLocation: {
      lat: 42.21138,
      lng: 38.191124,
    },
  },
  {
    fullName: "Nancy Cormier",
    email: "n.cormier@hotmail.com",
    address: "515 Casimir Meadow",
    acl: "ecc",
    homeLocation: {
      lat: 44.892213,
      lng: 58.706554,
    },
    avatar: "asdadadadada.jpg",
  },
  {
    fullName: "Edmond Koss",
    email: "e.koss@hotmail.com",
    address: "037 Hane Route",
    acl: "vcc",
    homeLocation: {
      lat: 89.679482,
      lng: -138.190004,
    },
  },
  {
    fullName: "Mamie Simonis DDS",
    email: "m.simonis@hotmail.com",
    address: "9308 Flo Brooks",
    acl: "vcc",
    homeLocation: {
      lat: -59.717552,
      lng: -85.261204,
    },
    avatar: "aaxzcs.jpg",
  },
  {
    fullName: "John Moore",
    email: "j.moore@hotmail.com",
    address: "41772 Maggio Points",
    acl: "vcc",
    homeLocation: {
      lat: 22.815348,
      lng: 0.020071,
    },
  },
  {
    fullName: "Luis Pacocha",
    email: "l.pacocha@hotmail.com",
    address: "426 Johns Mill",
    acl: "ecc",
    homeLocation: {
      lat: 47.894221,
      lng: -97.299546,
    },
    avatar: "jghhjhg.jpg",
  },
  {
    fullName: "Dianna Toy",
    email: "d.toy@hotmail.com",
    address: "17915 Nigel Shoals",
    acl: "ecc",
    homeLocation: {
      lat: 55.995507,
      lng: -159.721166,
    },
  },
  {
    fullName: "Bernice Bernhard V",
    email: "b.bernhard@hotmail.com",
    address: "1646 Breana Well",
    acl: "vcc",
    homeLocation: {
      lat: 11.022018,
      lng: -43.269585,
    },
    avatar: "dgfdgfdgfdgdfg.jpg",
  },
  {
    fullName: "Marianne Deckow",
    email: "m.deckow@hotmail.com",
    address: "867 Fritsch Ports",
    acl: "vcc",
    homeLocation: {
      lat: 36.431397,
      lng: -26.20961,
    },
  },
  {
    fullName: "Roy Auer",
    email: "r.auer@hotmail.com",
    address: "134 Jast Mews",
    acl: "ecc",
    homeLocation: {
      lat: -65.49997,
      lng: 44.083002,
    },
    avatar: "hdfhfhfgdh.jpg",
  },
  {
    fullName: "Shane Conn",
    email: "s.conn@hotmail.com",
    address: "696 Kutch River",
    acl: "vcc",
    homeLocation: {
      lat: -66.143759,
      lng: -42.613244,
    },
    avatar: "aaxzcs.jpg",
  },
  {
    fullName: "Arturo Will Sr.",
    email: "a.will@hotmail.com",
    address: "9628 Langosh Course",
    acl: "acc",
    homeLocation: {
      lat: -8.502454,
      lng: 162.902633,
    },
    avatar: "asdadadadada.jpg",
  },
  {
    fullName: "Dr. April Huels",
    email: "a.huels@hotmail.com",
    address: "878 Hansen Course",
    acl: "vcc",
    homeLocation: {
      lat: -13.649509,
      lng: 145.532074,
    },
    avatar: "jghhjhg.jpg",
  },
  {
    fullName: "Bertha Runte",
    email: "b.runte@hotmail.com",
    address: "14679 Garett Trafficway",
    acl: "vcc",
    homeLocation: {
      lat: -50.658813,
      lng: -145.328535,
    },
    avatar: "asdadsaadda.jpg",
  },
  {
    fullName: "Mr. Melvin Schuppe",
    email: "m.schuppe@hotmail.com",
    address: "7624 Julia Roads",
    acl: "vcc",
    homeLocation: {
      lat: -36.812282,
      lng: -161.229162,
    },
    avatar: "hdfhfhfgdh.jpg",
  },
  {
    fullName: "Nicolas Olson",
    email: "n.olson@hotmail.com",
    address: "261 Fisher Valley",
    acl: "acc",
    homeLocation: {
      lat: 10.524655,
      lng: -177.196964,
    },
  },
  {
    fullName: "Amos Hoeger",
    email: "a.hoeger@hotmail.com",
    address: "4592 Alana Lodge",
    acl: "ecc",
    homeLocation: {
      lat: 7.302013,
      lng: -129.626038,
    },
  },
  {
    fullName: "Mrs. Robin Johnson",
    email: "r.johnson@hotmail.com",
    address: "282 Jordan Mount",
    acl: "vcc",
    homeLocation: {
      lat: 54.209707,
      lng: -70.892127,
    },
  },
  {
    fullName: "April Yundt",
    email: "a.yundt@hotmail.com",
    address: "90332 Jaycee Hollow",
    acl: "vcc",
    homeLocation: {
      lat: -21.248139,
      lng: -34.623653,
    },
  },
  {
    fullName: "Troy McCullough",
    email: "t.mccullough@hotmail.com",
    address: "11342 Bruen Fields",
    acl: "ecc",
    homeLocation: {
      lat: 28.029508,
      lng: -9.93588,
    },
    avatar: "asdadadadada.jpg",
  },
  {
    fullName: "Dustin Abshire",
    email: "d.abshire@hotmail.com",
    address: "581 Emelie Corners",
    acl: "vcc",
    homeLocation: {
      lat: 11.562604,
      lng: 14.199238,
    },
    avatar: "aaxzcs.jpg",
  },
])
