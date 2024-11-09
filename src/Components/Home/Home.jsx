console.l
import Password from "./Password/Password"
import FormComponent from "./FormComponent/FormComponent"
import { useEffect, useState } from "react"
import generateArray from "../../functions/generateArray"
import styles from "./Home.module.css";




const Home = () => {
  const [password, setPassword] = useState("P4$5W0rD!");
  const [passwordLength, setPasswordLength] = useState(4);
  const [includeUppercase,setIncludeUppercase] = useState(false);
  const [includeLowercase, setIcludeLowercase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  /*to adjust color whether password in on initial state or not*/
  const [passwordColor, setPasswordColor] = useState("#54535b");
  const[passwordStrength, setPasswordStrength] = useState(0);
  

const uppercase = generateArray(65,90);
const lowercase = generateArray(97,122);
const numbers = generateArray(48,57);
const symbols = generateArray(33,47).concat(generateArray(58,64)).concat(generateArray(91,96)).concat(generateArray(123,126));


const generatePassword = (e) => {

  e.preventDefault();

  if(passwordLength<4){
    alert("Password length must be at least 4");
    return;
  }

  let prePassword = [];
  let fullSelection =[];

  if(includeUppercase){
    fullSelection = fullSelection.concat(uppercase);
    prePassword.push(uppercase[Math.floor(Math.random() * uppercase.length)]);
    
  }
  if(includeLowercase){
    fullSelection = fullSelection.concat(lowercase);
    prePassword.push(lowercase[Math.floor(Math.random() * lowercase.length)]);
  }
  if(includeNumbers){
    fullSelection = fullSelection.concat(numbers);
    prePassword.push(numbers[Math.floor(Math.random() * numbers.length)]);
  }
  if(includeSymbols){
    fullSelection = fullSelection.concat(symbols);
    prePassword.push(symbols[Math.floor(Math.random() * symbols.length)]);
  }

  if(fullSelection.length === 0){
    alert("Please select at least one character type");
    return;
  }

  while(prePassword.length < passwordLength){
    prePassword.push(fullSelection[Math.floor(Math.random() * fullSelection.length)]);
  }

  let passwordCharacters = [];

  for(let i =0; i< passwordLength; i++){
    passwordCharacters.push(String.fromCharCode(prePassword[i]));
  }


  setPassword(passwordCharacters.join(''));
  setPasswordColor("#E6E5EA");
}



 


  return (
    <div>
      <header className={styles.header}>
        <h1 className={styles.header__title}>Password Generator</h1>
      </header>

      <main className={styles.main}>
        <Password password={password} passwordColor={passwordColor} />
        <FormComponent
          password={password}
          setPassword={setPassword}
          passwordColor={passwordColor}
          passwordLength={passwordLength}
          setPasswordLength={setPasswordLength}
          includeUppercase={includeUppercase}
          setIncludeUppercase={setIncludeUppercase}
          includeLowercase={includeLowercase}
          setIncludeLowercase={setIcludeLowercase}
          includeNumbers={includeNumbers}
          setIncludeNumbers={setIncludeNumbers}
          includeSymbols={includeSymbols}
          setIncludeSymbols={setIncludeSymbols}
          generatePassword={generatePassword}
          passwordStrength={passwordStrength}
          setPasswordStrength={setPasswordStrength}
        />
      </main>
    </div>
  );
}

export default Home
