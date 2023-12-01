import "./App.css";
import { useState, useEffect } from "react";


function App() {
  var [step, setStep] = useState(1);
  var [no, setNo] = useState(0);

  function nextFunction() {
    setStep(step + 1);
  }

  function changePassword(e) {
    if (e.target.value.length == 4) {
      if (e.target.value == "5588") {
        setStep(3);
      } else {
        setNo(no + 1);
        setStep(4);
        if (no < 3) {
          console.log(no);
          setTimeout(function () {
            setStep(2);
          }, 1000);
        }
        else {
          setStep(1);
          setNo(0)
        }
      }
    }
  }

  return (
    <>
      {step == 1 ? (
        <>
          <p>کارت خود را وارد کنید</p>
          <button onClick={nextFunction}>وارد کردن کارت</button>
        </>
      ) : (
        ""
      )}
      {step == 2 ? (
        <div>
          <p>رمز خود را وارد کنید</p>
          <input onChange={changePassword} />
        </div>
      ) : (
        ""
      )}
      {step == 4 ? "رمز شما اشتباه است" : ""}
      {step == 3 ? "کارت چی چیه؟؟ چی چی میخووی؟" : ""}
    </>
  );
}

export default App;
