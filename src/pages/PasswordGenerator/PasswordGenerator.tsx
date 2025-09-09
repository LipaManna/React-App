import { use, useState } from "react";

const PasswordGenerator = () =>{
    const [length, setLength] = useState(8);
    const [numberAllowed, setNumberAllowed] = useState(false);
    const [characterAllowed, setCharacterAllowed] = useState(false);
    const [password, setPassword] = useState("");

    const generatePassword = () => {

    }


    return <div>Password Generator Page</div>;
}

export default PasswordGenerator;