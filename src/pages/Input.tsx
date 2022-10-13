interface Props {
    units: object;
    inputToConvert: string;
    setInputToConvert: React.Dispatch<React.SetStateAction<string>>;
    setFirstUnit: React.Dispatch<React.SetStateAction<string>>;
    setSecondUnit: React.Dispatch<React.SetStateAction<string>>;
    result: string;
}

export const Input: React.FC<Props> = ({
    units,
    inputToConvert,
    setInputToConvert,
    setFirstUnit,
    setSecondUnit,
    result,
}) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (
            e.target.value.match(
                /^$|^[0]$|^[0][.]$|^[0][.]\d+$|^[1-9]\d*$|^[1-9]+\d*[.]$|^[1-9]+\d*[.]\d+$/g
            )
        ) {
            setInputToConvert(e.target.value);
        }
    };

    return (
        <div className="flex flex-col w-[30rem]">
            <input
                onChange={handleChange}
                value={inputToConvert}
                className="bg-[#242440] border-[#ffffff1d] border-[1px] border-solid h-full min-h-[6rem] px-8 py-2 break-words"
                type="text"
            />

            <select
                onChange={(e) => setFirstUnit(e.target.value)}
                className="bg-[#242440] border-[#ffffff1d] border-[1px] border-solid h-full min-h-[6rem] px-8 py-2 break-words"
            >
                {Object.entries(units).map(([k, v], index) => (
                    <option key={index} value={v}>
                        {k}
                    </option>
                ))}
            </select>

            <p className="text-center text-[8rem] leading-[0rem] py-12">=</p>

            <div className="bg-[#242440] border-[#ffffff1d] border-[1px] border-solid h-full min-h-[6rem] px-8 py-2 break-words">
                {result}
            </div>

            <select
                onChange={(e) => setSecondUnit(e.target.value)}
                className="bg-[#242440] border-[#ffffff1d] border-[1px] border-solid h-full min-h-[6rem] px-8 py-2 break-words"
            >
                {Object.entries(units).map(([k, v], index) => (
                    <option key={index} value={v}>
                        {k}
                    </option>
                ))}
            </select>
        </div>
    );
};
