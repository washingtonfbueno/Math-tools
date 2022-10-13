import { useEffect, useState } from "react";
import { toGramForce } from "../UnitConvert";

import { Input } from "./Input";

export const Force = () => {
    const [inputToConvert, setInputToConvert] = useState("");
    const [result, setResult] = useState("");
    const [firstUnit, setFirstUnit] = useState("Gram-force");
    const [secondUnit, setSecondUnit] = useState("Gram-force");

    useEffect(() => {
        if (inputToConvert) {
            setResult(
                eval(
                    `${inputToConvert} * ${toGramForce[firstUnit]} * ${
                        1 / toGramForce[secondUnit]
                    }`
                )
            );
        } else {
            setResult("");
        }
    }, [inputToConvert, firstUnit, secondUnit]);

    return (
        <Input
            {...{
                units,
                inputToConvert,
                setInputToConvert,
                setFirstUnit,
                setSecondUnit,
                result,
            }}
        />
    );
};

const units = {
    "Gram-force": "Gram-force",
    "Kilogram-force": "Kilogram-force",
    "Ton-force": "Ton-force",
    Newton: "Newton",
    Kilonewton: "Kilonewton",
    Meganewton: "Meganewton",
    Giganewton: "Giganewton",
    "Pound-force": "Pound-force",
    "Kilopound-force": "Kilopound-force",
};
