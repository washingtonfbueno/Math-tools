import { useState } from "react";

export const Calculator: React.FC = () => {
    const [field, setField] = useState("");
    const [hasError, setHasError] = useState(false);

    const handleResult = () => {
        try {
            setField(eval(field.replace(/÷/g, "/").replace(/×/g, "*")));
        } catch (err) {
            setHasError(true);
        }
    };

    return (
        <div className="flex flex-col w-[32rem] relative">
            {hasError && (
                <div className="absolute -top-24 space-x-16 self-center">
                    <span>Syntax ERROR</span>
                    <span
                        onClick={() => setHasError(false)}
                        className="text-[6rem] leading-[1rem]"
                    >
                        ×
                    </span>
                </div>
            )}
            <div className="min-h-[6.5rem] bg-[#242440] py-4 px-8 mb-12 w-full break-words rounded-xl">
                {field}
            </div>
            <div className="grid grid-cols-4 gap-3">
                {buttons.map((btn, index) =>
                    index == 3 ? (
                        <button
                            onClick={() =>
                                setField(field.slice(0, field.length - 1))
                            }
                            key={index}
                            className="bg-[#242440] rounded-xl hover:bg-[#2e2e51]"
                        >
                            <span>{btn}</span>
                        </button>
                    ) : index == 7 ? (
                        <button
                            onClick={() => setField("")}
                            key={index}
                            className="bg-[#242440] rounded-xl hover:bg-[#2e2e51]"
                        >
                            <span>{btn}</span>
                        </button>
                    ) : index == 15 ? (
                        <button
                            onClick={handleResult}
                            key={index}
                            className="bg-[#242440] rounded-xl hover:bg-[#2e2e51]"
                        >
                            {btn}
                        </button>
                    ) : (
                        <button
                            onClick={() => setField(field + btn)}
                            key={index}
                            className="bg-[#242440] rounded-xl hover:bg-[#2e2e51]"
                        >
                            {btn}
                        </button>
                    )
                )}
            </div>
        </div>
    );
};

const buttons = [
    "7",
    "8",
    "9",
    "←",
    "4",
    "5",
    "6",
    "AC",
    "1",
    "2",
    "3",
    ".",
    "0",
    "(",
    ")",
    "=",
    "+",
    "-",
    "×",
    "÷",
];
