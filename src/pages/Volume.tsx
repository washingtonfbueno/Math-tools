import { useEffect, useState } from "react";
import { toMeter } from "../UnitConvert";
import { Input } from "./Input";

export const Volume: React.FC = () => {
    const [inputToConvert, setInputToConvert] = useState("");
    const [result, setResult] = useState("");
    const [firstUnit, setFirstUnit] = useState("Meter");
    const [secondUnit, setSecondUnit] = useState("Meter");

    useEffect(() => {
        if (inputToConvert) {
            setResult(
                eval(
                    `${inputToConvert} * ${toMeter[firstUnit]} ** 3 * ${
                        1 / toMeter[secondUnit]
                    } ** 3`
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
    "Cubic meter": "Meter",
    "Cubic kilometre": "Kilometre",
    "Cubic decimeter": "Decimeter",
    "Cubic centimeter": "Centimeter",
    "Cubic millimetre": "Millimetre",
    "Cubic micrometre": "Micrometre",
    "Cubic nanometre": "Nanometre",
    "Cubic mile": "Mile",
    "Cubic yard": "Yard",
    "Cubic foot": "Foot",
    "Cubic inch": "Inch",
};
