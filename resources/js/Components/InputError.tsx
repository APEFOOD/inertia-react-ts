import React from "react";

type InputType = {
    message?: React.ReactNode;
    className: string;
};

export default function InputError({ message, className = "" }: InputType) {
    return message ? (
        <p className={"text-sm text-red-600 " + className}>{message}</p>
    ) : null;
}
