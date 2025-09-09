import React from "react";

function FormGroup({htmlFor, label, children}) {
    return (
        <div className="flex flex-col gap-1">
            <label
                htmlFor={htmlFor}
                className="text-zinc-800 border-zinc-200 rounded h-10 px-3">
                {label}
            </label>
            {children}
        </div>
    );
}
