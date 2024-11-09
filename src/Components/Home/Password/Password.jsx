import styles from './Password.module.css';
import copyIcon  from '../../../images/icon-copy.svg'
import { useState, useEffect } from 'react';


// eslint-disable-next-line react/prop-types
const Password = ({ password, passwordColor }) => {

  const[displayCopied, setDisplayCopied] = useState("none");

  useEffect(()=> {
    setDisplayCopied('none');
  },[password])

  

  const handleCopy = () => {
    setDisplayCopied(displayCopied === "none" ? "block" : "none");

    navigator.clipboard.writeText(password);
  }

  

  return (
    <article className={styles["main__final-password"]}>
      <p style={{color: passwordColor}}>{password}</p>

      <div className={styles["main__final-password__copy"]}>
      <p style={{display: displayCopied}}>COPIED</p>
      <img className={styles["filter-white"]} onClick={handleCopy} src={copyIcon} alt="Copy icon" />
      </div>
    </article>
  );
}

export default Password
