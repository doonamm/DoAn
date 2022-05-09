import { useState } from "react";

export default function useSetGet(defaultValue){
    const [value, setValue] = useState(defaultValue);
    return {
        val: value,
        set: setValue
    };
};