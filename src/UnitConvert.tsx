interface Unit {
    [unit: string]: number;
}

export const toMeter: Unit = {
    Meter: 1,
    Kilometre: 1000,
    Decimeter: 1 / 10,
    Centimeter: 1 / 100,
    Millimetre: 1 / 1000,
    Micrometre: 1 / 10 ** 6,
    Nanometre: 1 / 10 ** 9,
    Mile: 1609.344,
    Yard: 1 / 1.0936132983,
    Foot: 1 / 3.2808333333,
    Inch: 1 / 39.3700787402,
};

export const toGramForce: Unit = {
    "Gram-force": 1,
    "Kilogram-force": 1000,
    "Ton-force": 10 ** 6,
    Newton: 101.9716213,
    Kilonewton: 101971.6213,
    Meganewton: 101971621.3,
    Giganewton: 101971621298,
    "Pound-force": 453.59237,
    "Kilopound-force": 453592.37,
};
