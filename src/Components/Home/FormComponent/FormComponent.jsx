/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import styles from './FormComponent.module.css'
import rigthArrow from '../../../images/icon-arrow-right.svg'

// eslint-disable-next-line react/prop-types
const FormComponent = ({
  password,
  passwordColor,
  passwordLength,
  setPasswordLength,
  includeUppercase,
  setIncludeUppercase,
  includeLowercase,
  setIncludeLowercase,
  includeNumbers,
  setIncludeNumbers,
  includeSymbols,
  setIncludeSymbols,
  generatePassword,
  passwordStrength,
  setPasswordStrength
}) => {
  const [widthToFill, setWidthToFill] = useState("20%");

  const progressColors = {
    0: "#18171f",
    1: "#f64a4a",
    2: "#fb7c58",
    3: "#f8cd65",
    4: "#a4ffaf",
  }

  useEffect(() => {
    setPasswordStrength(0);

    if(passwordColor !== "#54535b") {
      setPasswordStrength((prev) => prev + 1);
    }

    if (password.length > 10) {
      setPasswordStrength((prev) => prev +1);
    }

    if(includeNumbers) {
      setPasswordStrength((prev) =>  prev +1);
     }
    
     if(includeSymbols) {
      setPasswordStrength((prev) =>  prev +1);
     }
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[password])

 

  return (
    <article className={styles["main__form-component"]}>
      <form
        onSubmit={generatePassword}
        className={styles["main__form-component__form"]}
      >
        <div className={styles["main__form-component__form__length-label"]}>
          <label htmlFor="length">
            <h2>Character Length</h2>
            <span>{passwordLength}</span>
          </label>
        </div>
        <div className={styles["main__form-component__form__slider"]}>
          <div
            className={styles.sliderFill}
            style={{ width: widthToFill }}
          ></div>
          <input
            id="length"
            name="length"
            value={passwordLength}
            onChange={(e) => {
              setPasswordLength(e.target.value);
              setWidthToFill(
                e.target.value > 8
                  ? `${(e.target.value / 20) * 100 - 2}%`
                  : `${(e.target.value / 20) * 100 + 2}%`
              );
            }}
            type="range"
            min="0"
            max="20"
          />
        </div>
        <section className={styles["main__form-component__form__checklist"]}>
          <ul>
            <li>
              <label htmlFor="uppercase">
                <div
                  className={
                    includeUppercase ? styles.checkboxChecked : styles.checkbox
                  }
                ></div>{" "}
                <p>Include UpperCase Letters</p>
              </label>
              <input
                id="uppercase"
                name="uppercase"
                type="checkbox"
                onChange={(e) =>
                  e.target.checked
                    ? setIncludeUppercase(true)
                    : setIncludeUppercase(false)
                }
              />
            </li>
            <li>
              <label htmlFor="lowercase">
                <div
                  className={
                    includeLowercase ? styles.checkboxChecked : styles.checkbox
                  }
                ></div>{" "}
                <p>Include Lowercase Letters</p>
              </label>
              <input
                id="lowercase"
                name="lowercase"
                type="checkbox"
                onChange={(e) =>
                  e.target.checked
                    ? setIncludeLowercase(true)
                    : setIncludeLowercase(false)
                }
              />
            </li>
            <li>
              <label htmlFor="numbers">
                <div
                  className={
                    includeNumbers ? styles.checkboxChecked : styles.checkbox
                  }
                ></div>{" "}
                <p>Include Numbers</p>
              </label>
              <input
                id="numbers"
                name="numbers"
                type="checkbox"
                onChange={(e) =>
                  e.target.checked
                    ? setIncludeNumbers(true)
                    : setIncludeNumbers(false)
                }
              />
            </li>
            <li>
              <label htmlFor="symbols">
                <div
                  className={
                    includeSymbols ? styles.checkboxChecked : styles.checkbox
                  }
                ></div>{" "}
                <p>Include Symbols</p>
              </label>
              <input
                id="symbols"
                name="symbols"
                type="checkbox"
                onChange={(e) =>
                  e.target.checked
                    ? setIncludeSymbols(true)
                    : setIncludeSymbols(false)
                }
              />
            </li>
          </ul>
        </section>
        <section className={styles["main__form-component__form__strength"]}>
          <div
            className={styles["main__form-component__form__strength__wrapper"]}
          >
            <h2> STRENGTH</h2>
            <div
              className={styles["main__form-component__form__strength__info"]}
            >
              {passwordStrength === 0 && null}
              {passwordStrength === 1 && <h2>TOO WEAK</h2>}
              {passwordStrength === 2 && <h2>WEAK</h2>}
              {passwordStrength === 3 && <h2>MEDIUM</h2>}
              {passwordStrength === 4 && <h2>STRONG</h2>}
              <div
                className={
                  styles["main__form-component__form__strength__info__bar"]
                }
              >
                <div
                  style={{ backgroundColor: progressColors[passwordStrength],border: passwordStrength > 1
                    ? "none":
                    "2px solid #E6E5EA",   }}
                  className={
                    styles["main__form-component__form__strength__info__bar-1"]
                  }
                ></div>
                <div
                  style={{
                    backgroundColor:
                      passwordStrength > 1
                        ? progressColors[passwordStrength]
                        : progressColors[0],
                    border:
                    passwordStrength > 1
                    ? "none":
                    "2px solid #E6E5EA",    
                  }}
                  className={
                    styles["main__form-component__form__strength__info__bar-2"]
                  }
                ></div>
                <div
                  style={{
                    backgroundColor:
                      passwordStrength > 2
                        ? progressColors[passwordStrength]
                        : progressColors[0], 
                    border: 
                    passwordStrength > 2
                        ? "none":
                        "2px solid #E6E5EA",     
                  }}
                  className={
                    styles["main__form-component__form__strength__info__bar-3"]
                  }
                ></div>
                <div
                  style={{
                    backgroundColor:
                      passwordStrength > 3
                        ? progressColors[passwordStrength]
                        : progressColors[0],
                    border:
                    passwordStrength > 3
                    ? "none":
                    "2px solid #E6E5EA",    
                  }}
                  className={
                    styles["main__form-component__form__strength__info__bar-4"]
                  }
                ></div>
              </div>
            </div>
          </div>
        </section>
        <div className={styles["main__form-component__form__submit-btn"]}>
          <button>GENERATE <img src={rigthArrow} alt="" aria-hidden='true' className={styles['filter-green']} /></button>
        </div>
      </form>
    </article>
  );
};

export default FormComponent;
