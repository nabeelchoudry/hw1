//Nabeel Choudry
//G00644026
//https://developer.wmata.com/docs/services/5476364f031f590f38092507/operations/5476364f031f5909e4fe330d



var lines = JSON.parse('{\n' +
    '    "Lines": [\n' +
    '        {\n' +
    '            "DisplayName": "Green",\n' +
    '            "EndStationCode": "E10",\n' +
    '            "InternalDestination1": "",\n' +
    '            "InternalDestination2": "",\n' +
    '            "LineCode": "GR",\n' +
    '            "StartStationCode": "F11"\n' +
    '        },\n' +
    '        {\n' +
    '            "DisplayName": "Blue",\n' +
    '            "EndStationCode": "G05",\n' +
    '            "InternalDestination1": "",\n' +
    '            "InternalDestination2": "",\n' +
    '            "LineCode": "BL",\n' +
    '            "StartStationCode": "J03"\n' +
    '        },\n' +
    '        {\n' +
    '            "DisplayName": "Silver",\n' +
    '            "EndStationCode": "G05",\n' +
    '            "InternalDestination1": "",\n' +
    '            "InternalDestination2": "",\n' +
    '            "LineCode": "SV",\n' +
    '            "StartStationCode": "N06"\n' +
    '        },\n' +
    '        {\n' +
    '            "DisplayName": "Red",\n' +
    '            "EndStationCode": "B11",\n' +
    '            "InternalDestination1": "A11",\n' +
    '            "InternalDestination2": "B08",\n' +
    '            "LineCode": "RD",\n' +
    '            "StartStationCode": "A15"\n' +
    '        },\n' +
    '        {\n' +
    '            "DisplayName": "Orange",\n' +
    '            "EndStationCode": "D13",\n' +
    '            "InternalDestination1": "",\n' +
    '            "InternalDestination2": "",\n' +
    '            "LineCode": "OR",\n' +
    '            "StartStationCode": "K08"\n' +
    '        },\n' +
    '        {\n' +
    '            "DisplayName": "Yellow",\n' +
    '            "EndStationCode": "E06",\n' +
    '            "InternalDestination1": "E01",\n' +
    '            "InternalDestination2": "",\n' +
    '            "LineCode": "YL",\n' +
    '            "StartStationCode": "C15"\n' +
    '        }\n' +
    '    ]\n' +
    '}');

var path =JSON.parse('{\n' +
    '    "Path": [\n' +
    '        {\n' +
    '            "DistanceToPrev": 0,\n' +
    '            "LineCode": "SV",\n' +
    '            "SeqNum": 1,\n' +
    '            "StationCode": "N06",\n' +
    '            "StationName": "Wiehle-Reston East"\n' +
    '        },\n' +
    '        {\n' +
    '            "DistanceToPrev": 30867,\n' +
    '            "LineCode": "SV",\n' +
    '            "SeqNum": 2,\n' +
    '            "StationCode": "N04",\n' +
    '            "StationName": "Spring Hill"\n' +
    '        },\n' +
    '        {\n' +
    '            "DistanceToPrev": 3634,\n' +
    '            "LineCode": "SV",\n' +
    '            "SeqNum": 3,\n' +
    '            "StationCode": "N03",\n' +
    '            "StationName": "Greensboro"\n' +
    '        },\n' +
    '        {\n' +
    '            "DistanceToPrev": 3902,\n' +
    '            "LineCode": "SV",\n' +
    '            "SeqNum": 4,\n' +
    '            "StationCode": "N02",\n' +
    '            "StationName": "Tysons Corner"\n' +
    '        },\n' +
    '        {\n' +
    '            "DistanceToPrev": 3440,\n' +
    '            "LineCode": "SV",\n' +
    '            "SeqNum": 5,\n' +
    '            "StationCode": "N01",\n' +
    '            "StationName": "McLean"\n' +
    '        },\n' +
    '        {\n' +
    '            "DistanceToPrev": 24745,\n' +
    '            "LineCode": "SV",\n' +
    '            "SeqNum": 6,\n' +
    '            "StationCode": "K05",\n' +
    '            "StationName": "E Falls Church"\n' +
    '        },\n' +
    '        {\n' +
    '            "DistanceToPrev": 13156,\n' +
    '            "LineCode": "SV",\n' +
    '            "SeqNum": 7,\n' +
    '            "StationCode": "K04",\n' +
    '            "StationName": "Ballston"\n' +
    '        },\n' +
    '        {\n' +
    '            "DistanceToPrev": 2980,\n' +
    '            "LineCode": "SV",\n' +
    '            "SeqNum": 8,\n' +
    '            "StationCode": "K03",\n' +
    '            "StationName": "Virginia Square"\n' +
    '        },\n' +
    '        {\n' +
    '            "DistanceToPrev": 2473,\n' +
    '            "LineCode": "SV",\n' +
    '            "SeqNum": 9,\n' +
    '            "StationCode": "K02",\n' +
    '            "StationName": "Clarendon"\n' +
    '        },\n' +
    '        {\n' +
    '            "DistanceToPrev": 2687,\n' +
    '            "LineCode": "SV",\n' +
    '            "SeqNum": 10,\n' +
    '            "StationCode": "K01",\n' +
    '            "StationName": "Court House"\n' +
    '        },\n' +
    '        {\n' +
    '            "DistanceToPrev": 4936,\n' +
    '            "LineCode": "SV",\n' +
    '            "SeqNum": 11,\n' +
    '            "StationCode": "C05",\n' +
    '            "StationName": "Rosslyn"\n' +
    '        },\n' +
    '        {\n' +
    '            "DistanceToPrev": 6993,\n' +
    '            "LineCode": "SV",\n' +
    '            "SeqNum": 12,\n' +
    '            "StationCode": "C04",\n' +
    '            "StationName": "Foggy Bottom"\n' +
    '        },\n' +
    '        {\n' +
    '            "DistanceToPrev": 2783,\n' +
    '            "LineCode": "SV",\n' +
    '            "SeqNum": 13,\n' +
    '            "StationCode": "C03",\n' +
    '            "StationName": "Farragut West"\n' +
    '        },\n' +
    '        {\n' +
    '            "DistanceToPrev": 2001,\n' +
    '            "LineCode": "SV",\n' +
    '            "SeqNum": 14,\n' +
    '            "StationCode": "C02",\n' +
    '            "StationName": "McPherson Square"\n' +
    '        },\n' +
    '        {\n' +
    '            "DistanceToPrev": 2359,\n' +
    '            "LineCode": "SV",\n' +
    '            "SeqNum": 15,\n' +
    '            "StationCode": "C01",\n' +
    '            "StationName": "Metro Center"\n' +
    '        },\n' +
    '        {\n' +
    '            "DistanceToPrev": 1561,\n' +
    '            "LineCode": "SV",\n' +
    '            "SeqNum": 16,\n' +
    '            "StationCode": "D01",\n' +
    '            "StationName": "Federal Triangle"\n' +
    '        },\n' +
    '        {\n' +
    '            "DistanceToPrev": 2016,\n' +
    '            "LineCode": "SV",\n' +
    '            "SeqNum": 17,\n' +
    '            "StationCode": "D02",\n' +
    '            "StationName": "Smithsonian"\n' +
    '        },\n' +
    '        {\n' +
    '            "DistanceToPrev": 2643,\n' +
    '            "LineCode": "SV",\n' +
    '            "SeqNum": 18,\n' +
    '            "StationCode": "D03",\n' +
    '            "StationName": "L\'Enfant Plaza"\n' +
    '        },\n' +
    '        {\n' +
    '            "DistanceToPrev": 1757,\n' +
    '            "LineCode": "SV",\n' +
    '            "SeqNum": 19,\n' +
    '            "StationCode": "D04",\n' +
    '            "StationName": "Federal Center SW"\n' +
    '        },\n' +
    '        {\n' +
    '            "DistanceToPrev": 3052,\n' +
    '            "LineCode": "SV",\n' +
    '            "SeqNum": 20,\n' +
    '            "StationCode": "D05",\n' +
    '            "StationName": "Capitol South"\n' +
    '        },\n' +
    '        {\n' +
    '            "DistanceToPrev": 2703,\n' +
    '            "LineCode": "SV",\n' +
    '            "SeqNum": 21,\n' +
    '            "StationCode": "D06",\n' +
    '            "StationName": "Eastern Market"\n' +
    '        },\n' +
    '        {\n' +
    '            "DistanceToPrev": 3289,\n' +
    '            "LineCode": "SV",\n' +
    '            "SeqNum": 22,\n' +
    '            "StationCode": "D07",\n' +
    '            "StationName": "Potomac Avenue"\n' +
    '        },\n' +
    '        {\n' +
    '            "DistanceToPrev": 3750,\n' +
    '            "LineCode": "SV",\n' +
    '            "SeqNum": 23,\n' +
    '            "StationCode": "D08",\n' +
    '            "StationName": "Stadium Armory"\n' +
    '        },\n' +
    '        {\n' +
    '            "DistanceToPrev": 12162,\n' +
    '            "LineCode": "SV",\n' +
    '            "SeqNum": 24,\n' +
    '            "StationCode": "G01",\n' +
    '            "StationName": "Benning Road"\n' +
    '        },\n' +
    '        {\n' +
    '            "DistanceToPrev": 7779,\n' +
    '            "LineCode": "SV",\n' +
    '            "SeqNum": 25,\n' +
    '            "StationCode": "G02",\n' +
    '            "StationName": "Capitol Heights"\n' +
    '        },\n' +
    '        {\n' +
    '            "DistanceToPrev": 5215,\n' +
    '            "LineCode": "SV",\n' +
    '            "SeqNum": 26,\n' +
    '            "StationCode": "G03",\n' +
    '            "StationName": "Addison Road"\n' +
    '        },\n' +
    '        {\n' +
    '            "DistanceToPrev": 7960,\n' +
    '            "LineCode": "SV",\n' +
    '            "SeqNum": 27,\n' +
    '            "StationCode": "G04",\n' +
    '            "StationName": "Morgan Blvd"\n' +
    '        },\n' +
    '        {\n' +
    '            "DistanceToPrev": 7256,\n' +
    '            "LineCode": "SV",\n' +
    '            "SeqNum": 28,\n' +
    '            "StationCode": "G05",\n' +
    '            "StationName": "Largo Town Center"\n' +
    '        }\n' +
    '    ]\n' +
    '}');

var info =JSON.parse('{\n' +
    '  "Stations": [\n' +
    '    {\n' +
    '      "Code": "C01",\n' +
    '      "Name": "Metro Center",\n' +
    '      "StationTogether1": "A01",\n' +
    '      "StationTogether2": "",\n' +
    '      "LineCode1": "BL",\n' +
    '      "LineCode2": "OR",\n' +
    '      "LineCode3": "SV",\n' +
    '      "LineCode4": null,\n' +
    '      "Lat": 38.898303,\n' +
    '      "Lon": -77.028099,\n' +
    '      "Address": {\n' +
    '        "Street": "607 13th St. NW",\n' +
    '        "City": "Washington",\n' +
    '        "State": "DC",\n' +
    '        "Zip": "20005"\n' +
    '      }\n' +
    '    },\n' +
    '    {\n' +
    '      "Code": "C02",\n' +
    '      "Name": "McPherson Square",\n' +
    '      "StationTogether1": "",\n' +
    '      "StationTogether2": "",\n' +
    '      "LineCode1": "BL",\n' +
    '      "LineCode2": "OR",\n' +
    '      "LineCode3": "SV",\n' +
    '      "LineCode4": null,\n' +
    '      "Lat": 38.901316,\n' +
    '      "Lon": -77.033652,\n' +
    '      "Address": {\n' +
    '        "Street": "1400 I St. NW",\n' +
    '        "City": "Washington",\n' +
    '        "State": "DC",\n' +
    '        "Zip": "20005"\n' +
    '      }\n' +
    '    },\n' +
    '    {\n' +
    '      "Code": "C03",\n' +
    '      "Name": "Farragut West",\n' +
    '      "StationTogether1": "",\n' +
    '      "StationTogether2": "",\n' +
    '      "LineCode1": "BL",\n' +
    '      "LineCode2": "OR",\n' +
    '      "LineCode3": "SV",\n' +
    '      "LineCode4": null,\n' +
    '      "Lat": 38.901311,\n' +
    '      "Lon": -77.03981,\n' +
    '      "Address": {\n' +
    '        "Street": "900 18th St. NW",\n' +
    '        "City": "Washington",\n' +
    '        "State": "DC",\n' +
    '        "Zip": "20006"\n' +
    '      }\n' +
    '    },\n' +
    '    {\n' +
    '      "Code": "C04",\n' +
    '      "Name": "Foggy Bottom-GWU",\n' +
    '      "StationTogether1": "",\n' +
    '      "StationTogether2": "",\n' +
    '      "LineCode1": "BL",\n' +
    '      "LineCode2": "OR",\n' +
    '      "LineCode3": "SV",\n' +
    '      "LineCode4": null,\n' +
    '      "Lat": 38.900599,\n' +
    '      "Lon": -77.050273,\n' +
    '      "Address": {\n' +
    '        "Street": "2301 I St. NW",\n' +
    '        "City": "Washington",\n' +
    '        "State": "DC",\n' +
    '        "Zip": "20037"\n' +
    '      }\n' +
    '    },\n' +
    '    {\n' +
    '      "Code": "C05",\n' +
    '      "Name": "Rosslyn",\n' +
    '      "StationTogether1": "",\n' +
    '      "StationTogether2": "",\n' +
    '      "LineCode1": "BL",\n' +
    '      "LineCode2": "OR",\n' +
    '      "LineCode3": "SV",\n' +
    '      "LineCode4": null,\n' +
    '      "Lat": 38.896595,\n' +
    '      "Lon": -77.07146,\n' +
    '      "Address": {\n' +
    '        "Street": "1850 N. Moore Street",\n' +
    '        "City": "Arlington",\n' +
    '        "State": "VA",\n' +
    '        "Zip": "22209"\n' +
    '      }\n' +
    '    },\n' +
    '    {\n' +
    '      "Code": "D01",\n' +
    '      "Name": "Federal Triangle",\n' +
    '      "StationTogether1": "",\n' +
    '      "StationTogether2": "",\n' +
    '      "LineCode1": "BL",\n' +
    '      "LineCode2": "OR",\n' +
    '      "LineCode3": "SV",\n' +
    '      "LineCode4": null,\n' +
    '      "Lat": 38.893757,\n' +
    '      "Lon": -77.028218,\n' +
    '      "Address": {\n' +
    '        "Street": "302 12th St. NW",\n' +
    '        "City": "Washington",\n' +
    '        "State": "DC",\n' +
    '        "Zip": "20004"\n' +
    '      }\n' +
    '    },\n' +
    '    {\n' +
    '      "Code": "D02",\n' +
    '      "Name": "Smithsonian",\n' +
    '      "StationTogether1": "",\n' +
    '      "StationTogether2": "",\n' +
    '      "LineCode1": "BL",\n' +
    '      "LineCode2": "OR",\n' +
    '      "LineCode3": "SV",\n' +
    '      "LineCode4": null,\n' +
    '      "Lat": 38.888022,\n' +
    '      "Lon": -77.028232,\n' +
    '      "Address": {\n' +
    '        "Street": "1200 Independence Avenue SW",\n' +
    '        "City": "Washington",\n' +
    '        "State": "DC",\n' +
    '        "Zip": "20004"\n' +
    '      }\n' +
    '    },\n' +
    '    {\n' +
    '      "Code": "D03",\n' +
    '      "Name": "L\'Enfant Plaza",\n' +
    '      "StationTogether1": "F03",\n' +
    '      "StationTogether2": "",\n' +
    '      "LineCode1": "BL",\n' +
    '      "LineCode2": "OR",\n' +
    '      "LineCode3": "SV",\n' +
    '      "LineCode4": null,\n' +
    '      "Lat": 38.884775,\n' +
    '      "Lon": -77.021964,\n' +
    '      "Address": {\n' +
    '        "Street": "600 Maryland Avenue SW",\n' +
    '        "City": "Washington",\n' +
    '        "State": "DC",\n' +
    '        "Zip": "20024"\n' +
    '      }\n' +
    '    },\n' +
    '    {\n' +
    '      "Code": "D04",\n' +
    '      "Name": "Federal Center SW",\n' +
    '      "StationTogether1": "",\n' +
    '      "StationTogether2": "",\n' +
    '      "LineCode1": "BL",\n' +
    '      "LineCode2": "OR",\n' +
    '      "LineCode3": "SV",\n' +
    '      "LineCode4": null,\n' +
    '      "Lat": 38.884958,\n' +
    '      "Lon": -77.01586,\n' +
    '      "Address": {\n' +
    '        "Street": "401 3rd Street SW",\n' +
    '        "City": "Washington",\n' +
    '        "State": "DC",\n' +
    '        "Zip": "20024"\n' +
    '      }\n' +
    '    },\n' +
    '    {\n' +
    '      "Code": "D05",\n' +
    '      "Name": "Capitol South",\n' +
    '      "StationTogether1": "",\n' +
    '      "StationTogether2": "",\n' +
    '      "LineCode1": "BL",\n' +
    '      "LineCode2": "OR",\n' +
    '      "LineCode3": "SV",\n' +
    '      "LineCode4": null,\n' +
    '      "Lat": 38.884968,\n' +
    '      "Lon": -77.005137,\n' +
    '      "Address": {\n' +
    '        "Street": "355 First Street SE",\n' +
    '        "City": "Washington",\n' +
    '        "State": "DC",\n' +
    '        "Zip": "20003"\n' +
    '      }\n' +
    '    },\n' +
    '    {\n' +
    '      "Code": "D06",\n' +
    '      "Name": "Eastern Market",\n' +
    '      "StationTogether1": "",\n' +
    '      "StationTogether2": "",\n' +
    '      "LineCode1": "BL",\n' +
    '      "LineCode2": "OR",\n' +
    '      "LineCode3": "SV",\n' +
    '      "LineCode4": null,\n' +
    '      "Lat": 38.884124,\n' +
    '      "Lon": -76.995334,\n' +
    '      "Address": {\n' +
    '        "Street": "701 Pennsylvania Avenue SE",\n' +
    '        "City": "Washington",\n' +
    '        "State": "DC",\n' +
    '        "Zip": "20003"\n' +
    '      }\n' +
    '    },\n' +
    '    {\n' +
    '      "Code": "D07",\n' +
    '      "Name": "Potomac Ave",\n' +
    '      "StationTogether1": "",\n' +
    '      "StationTogether2": "",\n' +
    '      "LineCode1": "BL",\n' +
    '      "LineCode2": "OR",\n' +
    '      "LineCode3": "SV",\n' +
    '      "LineCode4": null,\n' +
    '      "Lat": 38.880841,\n' +
    '      "Lon": -76.985721,\n' +
    '      "Address": {\n' +
    '        "Street": "700 14th Street SE",\n' +
    '        "City": "Washington",\n' +
    '        "State": "DC",\n' +
    '        "Zip": "20003"\n' +
    '      }\n' +
    '    },\n' +
    '    {\n' +
    '      "Code": "D08",\n' +
    '      "Name": "Stadium-Armory",\n' +
    '      "StationTogether1": "",\n' +
    '      "StationTogether2": "",\n' +
    '      "LineCode1": "BL",\n' +
    '      "LineCode2": "OR",\n' +
    '      "LineCode3": "SV",\n' +
    '      "LineCode4": null,\n' +
    '      "Lat": 38.88594,\n' +
    '      "Lon": -76.977485,\n' +
    '      "Address": {\n' +
    '        "Street": "192 19th St. SE",\n' +
    '        "City": "Washington",\n' +
    '        "State": "DC",\n' +
    '        "Zip": "20003"\n' +
    '      }\n' +
    '    },\n' +
    '    {\n' +
    '      "Code": "G01",\n' +
    '      "Name": "Benning Road",\n' +
    '      "StationTogether1": "",\n' +
    '      "StationTogether2": "",\n' +
    '      "LineCode1": "BL",\n' +
    '      "LineCode2": "SV",\n' +
    '      "LineCode3": null,\n' +
    '      "LineCode4": null,\n' +
    '      "Lat": 38.890488,\n' +
    '      "Lon": -76.938291,\n' +
    '      "Address": {\n' +
    '        "Street": "4500 Benning Road",\n' +
    '        "City": "Washington",\n' +
    '        "State": "DC",\n' +
    '        "Zip": "20019"\n' +
    '      }\n' +
    '    },\n' +
    '    {\n' +
    '      "Code": "G02",\n' +
    '      "Name": "Capitol Heights",\n' +
    '      "StationTogether1": "",\n' +
    '      "StationTogether2": "",\n' +
    '      "LineCode1": "BL",\n' +
    '      "LineCode2": "SV",\n' +
    '      "LineCode3": null,\n' +
    '      "LineCode4": null,\n' +
    '      "Lat": 38.889757,\n' +
    '      "Lon": -76.913382,\n' +
    '      "Address": {\n' +
    '        "Street": "133 Central Avenue",\n' +
    '        "City": "Capitol Heights",\n' +
    '        "State": "MD",\n' +
    '        "Zip": "20743"\n' +
    '      }\n' +
    '    },\n' +
    '    {\n' +
    '      "Code": "G03",\n' +
    '      "Name": "Addison Road-Seat Pleasant",\n' +
    '      "StationTogether1": "",\n' +
    '      "StationTogether2": "",\n' +
    '      "LineCode1": "BL",\n' +
    '      "LineCode2": "SV",\n' +
    '      "LineCode3": null,\n' +
    '      "LineCode4": null,\n' +
    '      "Lat": 38.886713,\n' +
    '      "Lon": -76.893592,\n' +
    '      "Address": {\n' +
    '        "Street": "100 Addison Road S.",\n' +
    '        "City": "Capitol Heights",\n' +
    '        "State": "MD",\n' +
    '        "Zip": "20743"\n' +
    '      }\n' +
    '    },\n' +
    '    {\n' +
    '      "Code": "G04",\n' +
    '      "Name": "Morgan Boulevard",\n' +
    '      "StationTogether1": "",\n' +
    '      "StationTogether2": "",\n' +
    '      "LineCode1": "BL",\n' +
    '      "LineCode2": "SV",\n' +
    '      "LineCode3": null,\n' +
    '      "LineCode4": null,\n' +
    '      "Lat": 38.8913,\n' +
    '      "Lon": -76.8682,\n' +
    '      "Address": {\n' +
    '        "Street": "300 Garrett Morgan Blvd.",\n' +
    '        "City": "Landover",\n' +
    '        "State": "MD",\n' +
    '        "Zip": "20785"\n' +
    '      }\n' +
    '    },\n' +
    '    {\n' +
    '      "Code": "G05",\n' +
    '      "Name": "Largo Town Center",\n' +
    '      "StationTogether1": "",\n' +
    '      "StationTogether2": "",\n' +
    '      "LineCode1": "BL",\n' +
    '      "LineCode2": "SV",\n' +
    '      "LineCode3": null,\n' +
    '      "LineCode4": null,\n' +
    '      "Lat": 38.9008,\n' +
    '      "Lon": -76.8449,\n' +
    '      "Address": {\n' +
    '        "Street": "Largo Town Center 9000 Lottsford Road",\n' +
    '        "City": "Largo",\n' +
    '        "State": "MD",\n' +
    '        "Zip": "20774"\n' +
    '      }\n' +
    '    },\n' +
    '    {\n' +
    '      "Code": "K01",\n' +
    '      "Name": "Court House",\n' +
    '      "StationTogether1": "",\n' +
    '      "StationTogether2": "",\n' +
    '      "LineCode1": "OR",\n' +
    '      "LineCode2": "SV",\n' +
    '      "LineCode3": null,\n' +
    '      "LineCode4": null,\n' +
    '      "Lat": 38.891499,\n' +
    '      "Lon": -77.08391,\n' +
    '      "Address": {\n' +
    '        "Street": "2100 Wilson Blvd",\n' +
    '        "City": "Arlington",\n' +
    '        "State": "VA",\n' +
    '        "Zip": "22201"\n' +
    '      }\n' +
    '    },\n' +
    '    {\n' +
    '      "Code": "K02",\n' +
    '      "Name": "Clarendon",\n' +
    '      "StationTogether1": "",\n' +
    '      "StationTogether2": "",\n' +
    '      "LineCode1": "OR",\n' +
    '      "LineCode2": "SV",\n' +
    '      "LineCode3": null,\n' +
    '      "LineCode4": null,\n' +
    '      "Lat": 38.886373,\n' +
    '      "Lon": -77.096963,\n' +
    '      "Address": {\n' +
    '        "Street": "3100 Wilson Blvd",\n' +
    '        "City": "Arlington",\n' +
    '        "State": "VA",\n' +
    '        "Zip": "22201"\n' +
    '      }\n' +
    '    },\n' +
    '    {\n' +
    '      "Code": "K03",\n' +
    '      "Name": "Virginia Square-GMU",\n' +
    '      "StationTogether1": "",\n' +
    '      "StationTogether2": "",\n' +
    '      "LineCode1": "OR",\n' +
    '      "LineCode2": "SV",\n' +
    '      "LineCode3": null,\n' +
    '      "LineCode4": null,\n' +
    '      "Lat": 38.88331,\n' +
    '      "Lon": -77.104267,\n' +
    '      "Address": {\n' +
    '        "Street": "3600 Fairfax Drive",\n' +
    '        "City": "Arlington",\n' +
    '        "State": "VA",\n' +
    '        "Zip": "22201"\n' +
    '      }\n' +
    '    },\n' +
    '    {\n' +
    '      "Code": "K04",\n' +
    '      "Name": "Ballston-MU",\n' +
    '      "StationTogether1": "",\n' +
    '      "StationTogether2": "",\n' +
    '      "LineCode1": "OR",\n' +
    '      "LineCode2": "SV",\n' +
    '      "LineCode3": null,\n' +
    '      "LineCode4": null,\n' +
    '      "Lat": 38.882071,\n' +
    '      "Lon": -77.111845,\n' +
    '      "Address": {\n' +
    '        "Street": "4230 Fairfax Drive",\n' +
    '        "City": "Arlington",\n' +
    '        "State": "VA",\n' +
    '        "Zip": "22201"\n' +
    '      }\n' +
    '    },\n' +
    '    {\n' +
    '      "Code": "K05",\n' +
    '      "Name": "East Falls Church",\n' +
    '      "StationTogether1": "",\n' +
    '      "StationTogether2": "",\n' +
    '      "LineCode1": "OR",\n' +
    '      "LineCode2": "SV",\n' +
    '      "LineCode3": null,\n' +
    '      "LineCode4": null,\n' +
    '      "Lat": 38.885841,\n' +
    '      "Lon": -77.157177,\n' +
    '      "Address": {\n' +
    '        "Street": "2001 N. Sycamore St.",\n' +
    '        "City": "Arlington",\n' +
    '        "State": "VA",\n' +
    '        "Zip": "22205"\n' +
    '      }\n' +
    '    },\n' +
    '    {\n' +
    '      "Code": "N01",\n' +
    '      "Name": "McLean",\n' +
    '      "StationTogether1": "",\n' +
    '      "StationTogether2": "",\n' +
    '      "LineCode1": "SV",\n' +
    '      "LineCode2": null,\n' +
    '      "LineCode3": null,\n' +
    '      "LineCode4": null,\n' +
    '      "Lat": 38.924478,\n' +
    '      "Lon": -77.210167,\n' +
    '      "Address": {\n' +
    '        "Street": "1824 Dolley Madison Boulevard",\n' +
    '        "City": "McLean",\n' +
    '        "State": "VA",\n' +
    '        "Zip": "22102"\n' +
    '      }\n' +
    '    },\n' +
    '    {\n' +
    '      "Code": "N02",\n' +
    '      "Name": "Tysons Corner",\n' +
    '      "StationTogether1": "",\n' +
    '      "StationTogether2": "",\n' +
    '      "LineCode1": "SV",\n' +
    '      "LineCode2": null,\n' +
    '      "LineCode3": null,\n' +
    '      "LineCode4": null,\n' +
    '      "Lat": 38.920056,\n' +
    '      "Lon": -77.223314,\n' +
    '      "Address": {\n' +
    '        "Street": "1943 Chain Bridge Road",\n' +
    '        "City": "McLean",\n' +
    '        "State": "VA",\n' +
    '        "Zip": "22102"\n' +
    '      }\n' +
    '    },\n' +
    '    {\n' +
    '      "Code": "N03",\n' +
    '      "Name": "Greensboro",\n' +
    '      "StationTogether1": "",\n' +
    '      "StationTogether2": "",\n' +
    '      "LineCode1": "SV",\n' +
    '      "LineCode2": null,\n' +
    '      "LineCode3": null,\n' +
    '      "LineCode4": null,\n' +
    '      "Lat": 38.919749,\n' +
    '      "Lon": -77.235192,\n' +
    '      "Address": {\n' +
    '        "Street": "8305 Leesburg Pike",\n' +
    '        "City": "Vienna",\n' +
    '        "State": "VA",\n' +
    '        "Zip": "22182"\n' +
    '      }\n' +
    '    },\n' +
    '    {\n' +
    '      "Code": "N04",\n' +
    '      "Name": "Spring Hill",\n' +
    '      "StationTogether1": "",\n' +
    '      "StationTogether2": "",\n' +
    '      "LineCode1": "SV",\n' +
    '      "LineCode2": null,\n' +
    '      "LineCode3": null,\n' +
    '      "LineCode4": null,\n' +
    '      "Lat": 38.929273,\n' +
    '      "Lon": -77.241988,\n' +
    '      "Address": {\n' +
    '        "Street": "1576 Spring Hill Road",\n' +
    '        "City": "Vienna",\n' +
    '        "State": "VA",\n' +
    '        "Zip": "22182"\n' +
    '      }\n' +
    '    },\n' +
    '    {\n' +
    '      "Code": "N06",\n' +
    '      "Name": "Wiehle-Reston East",\n' +
    '      "StationTogether1": "",\n' +
    '      "StationTogether2": "",\n' +
    '      "LineCode1": "SV",\n' +
    '      "LineCode2": null,\n' +
    '      "LineCode3": null,\n' +
    '      "LineCode4": null,\n' +
    '      "Lat": 38.947753,\n' +
    '      "Lon": -77.340179,\n' +
    '      "Address": {\n' +
    '        "Street": "1862 Wiehle Avenue",\n' +
    '        "City": "Reston",\n' +
    '        "State": "VA",\n' +
    '        "Zip": "20190"\n' +
    '      }\n' +
    '    }\n' +
    '  ]\n' +
    '}');




var q1= "How many metro lines are there?";
console.log("Q1-"+q1);
console.log(lines.Lines.length+'\n');
var q2="First station on silver line?";
console.log("Q2-"+q2);

for( var name of lines.Lines){
    if(name.DisplayName=="Silver"){
        const stationCode=name.StartStationCode;
        for(var code of info.Stations){
            if(code.Code==stationCode){
                console.log(code.Name+'\n');
            }


        }

    }
}



var q3="Last Station on silver line?";
console.log("Q3-"+q3);
for( var name of lines.Lines){
    if(name.DisplayName=="Silver"){
        const stationCode=name.EndStationCode;
        for(var code of info.Stations){
            if(code.Code==stationCode){
                console.log(code.Name+'\n');
            }


        }

    }
}
var q4="How many Station are there on silver line?"
console.log("Q4-"+q4);
console.log(info.Stations.length+'\n');
var q5="what are the name of all the stations on silver line?";
console.log("Q5-"+q5);

for(var name of info.Stations){
  console.log(name.Name+'\n');
}

var q6="what is total length of silver line?";
console.log("Q6-"+q6);
var total=0;
for(var len of path.Path){
    total+=len.DistanceToPrev;
}
console.log(total+" feet"+'\n');
var q7="What is address for metro center?";
console.log("Q7-"+q7);
class MertoCenter{
    constructor(street,city,state,zip){
        this.street=street;
        this.city=city;
        this.state=state;
        this.zip=zip;
    }
    address(){
        return this.street+'\n'+ this.city+","+ this.state+'\n'+this.zip;
    }
}
for (var name of info.Stations){
    if(name.Name=="Metro Center"){
        var metroC=new MertoCenter(name.Address.Street,name.Address.City,name.Address.State,name.Address.Zip);
        console.log(metroC.address()+'\n');
    }
}
var q8="List the name of Each line";
console.log("Q8-"+q8);
var c=[];
for(var color of lines.Lines)
{
   console.log(color.DisplayName)
}
