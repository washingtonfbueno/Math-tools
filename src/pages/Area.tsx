import { useEffect, useState } from "react";
import { toMeter } from "../UnitConvert";
import { Input } from "./Input";

export const Area: React.FC = () => {
    const [inputToConvert, setInputToConvert] = useState("");
    const [result, setResult] = useState("");
    const [firstUnit, setFirstUnit] = useState("Meter");
    const [secondUnit, setSecondUnit] = useState("Meter");

    useEffect(() => {
        if (inputToConvert) {
            setResult(
                eval(
                    `${inputToConvert} * ${toMeter[firstUnit]} ** 2 * ${
                        1 / toMeter[secondUnit]
                    } ** 2`
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
    "Square meter": "Meter",
    "Square kilometre": "Kilometre",
    "Square decimeter": "Decimeter",
    "Square centimeter": "Centimeter",
    "Square millimetre": "Millimetre",
    "Square micrometre": "Micrometre",
    "Square nanometre": "Nanometre",
    "Square mile": "Mile",
    "Square yard": "Yard",
    "Square foot": "Foot",
    "Square inch": "Inch",
};
