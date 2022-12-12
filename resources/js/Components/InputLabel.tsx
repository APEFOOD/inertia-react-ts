import React from "react";

type InputLabelType = {
    forInput: any;
    value?: any;
    className?: string;
    children?: React.ReactNode;
    [key: string]: any;
};

export default function InputLabel({
    forInput,
    value,
    className,
    children,
}: InputLabelType) {
    return (
        <label
            htmlFor={forInput}
            className={`block font-medium text-sm text-gray-700 ` + className}
        >
            {value ? value : children}
        </label>
    );
}
