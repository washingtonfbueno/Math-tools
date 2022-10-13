import { useEffect, useState } from "react";
import { toMeter } from "../UnitConvert";
import { Input } from "./Input";

export const Length: React.FC = () => {
    const [inputToConvert, setInputToConvert] = useState("");
    const [result, setResult] = useState("");
    const [firstUnit, setFirstUnit] = useState("Meter");
    const [secondUnit, setSecondUnit] = useState("Meter");

    useEffect(() => {
        if (inputToConvert) {
            setResult(
                eval(
                    `${inputToConvert} * ${toMeter[firstUnit]} * ${
                        1 / toMeter[secondUnit]
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
    Meter: "Meter",
    Kilometre: "Kilometre",
    Decimeter: "Decimeter",
    Centimeter: "Centimeter",
    Millimetre: "Millimetre",
    Micrometre: "Micrometre",
    Nanometre: "Nanometre",
    Mile: "Mile",
    Yard: "Yard",
    Foot: "Foot",
    Inch: "Inch",
};
