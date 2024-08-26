import { useState } from "react";
import Btn from "./Btn";
import camera from "../assets/camera.png";
import battery from "../assets/battery.png";
import signal from "../assets/signal.png";
import wifi from "../assets/wifi.png";

const Calculator = () => {
  const [number, setNumber] = useState("0");

  const handleClick = (value) => {
    // If the current value is "0", replace it with the new value
    // Otherwise, append the new value to the existing number
    setNumber((prevNumber) =>
      prevNumber === "0" ? value : prevNumber + value
    );
  };

  const calculateResult = () => {
    try {
      // Evaluate the expression in the number state
      // Using eval is simple but be aware it's not safe for untrusted input
      const result = eval(number); // eslint-disable-line no-eval
      setNumber(String(result));
    } catch (error) {
      setNumber("Error");
    }
  };
  const handleDelete = () => {
    setNumber((prevNumber) =>
      prevNumber.length > 1 ? prevNumber.slice(0, -1) : "0"
    );
  };

  return (
    <div className="flex items-center justify-center w-full h-full ">
      {/* iphone top bar */}

      <div className="block w-[220px] h-[440px]  bg-black border border-gray-800 rounded-[30px] overflow-auto relative shadow-lg">
        <div className="flex items-center justify-center w-[100%] h-3">
          <div className="w-[10%] h-[2px] bg-gray-800"></div>
        </div>
        {/* top of phone */}
        <div className="flex items-center justify-center w-[100%] h-3">
          {/* camera */}
          <div
            className="flex w-[50%] items-center justify-end">
            <img src={camera} alt="camera.png" className="w-3 h-3 mr-[30px]" />
          </div>
          <div className="w-[50%] flex justify-end items-center px-5 gap-[2px]">
            <img src={signal} alt="signal.png" className="w-3 h3" />
            <img src={wifi} alt="wifi.png" className="w-3 h3" />
            <img src={battery} alt="battery.png" className="w-3 h3" />
          </div>
        </div>

        <div className=" w-full h-[130px] flex items-end justify-end px-5 text-white ">
          <input
            type="text"
            value={number}
            readOnly
            className="bg-transparent w-full text-right text-4xl font-mono"
          />
        </div>

        {/* Use the handleClick function to update the number when a button is clicked */}
        <div className=" px-5 flex justify-between gap-2 pt-3">
          <Btn
            text={"C"}
            action={() => setNumber("0")}
            justify={"center"}
            className={"bg-gray-300 text-black w-[40px] h-[40px]"}
          />
          <Btn
            text={"Del"}
            action={() => handleDelete()}
            justify={"center"}
            className={"bg-gray-300 text-black w-[40px] h-[40px] "}
          />
          <Btn
            text={"%"}
            action={() => handleClick("%")}
            justify={"center"}
            className={"bg-gray-300 text-black w-[40px] h-[40px]"}
          />
          <Btn
            text={"/"}
            action={() => handleClick("/")}
            justify={"center"}
            className={"bg-yellow-500 w-[40px] h-[40px] text-white"}
          />
        </div>
        <div className="flex px-5 justify-between gap-2 pt-2">
          <Btn
            text={"7"}
            action={() => handleClick("7")}
            justify={"center"}
            className={"bg-gray-700  w-[40px] h-[40px] text-white"}
          />
          <Btn
            text={"8"}
            action={() => handleClick("8")}
            justify={"center"}
            className={"bg-gray-700  w-[40px] h-[40px] text-white"}
          />
          <Btn
            text={"9"}
            action={() => handleClick("9")}
            justify={"center"}
            className={"bg-gray-700  w-[40px] h-[40px] text-white"}
          />
          <Btn
            text={"*"}
            action={() => handleClick("*")}
            justify={"center"}
            className={"bg-yellow-500  w-[40px] h-[40px] text-white"}
          />
        </div>

        <div className="flex px-5 gap-2 justify-between pt-2">
          <Btn
            text={"4"}
            action={() => handleClick("4")}
            justify={"center"}
            className={"bg-gray-700  w-[40px] h-[40px] text-white"}
          />
          <Btn
            text={"5"}
            action={() => handleClick("5")}
            justify={"center"}
            className={"bg-gray-700  w-[40px] h-[40px] text-white "}
          />
          <Btn
            text={"6"}
            action={() => handleClick("6")}
            justify={"center"}
            className={"bg-gray-700  w-[40px] h-[40px] text-white"}
          />
          <Btn
            text={"-"}
            action={() => handleClick("-")}
            justify={"center"}
            className={"bg-yellow-500  w-[40px] h-[40px] text-white"}
          />
        </div>
        <div className="flex px-5 justify-between gap-2 pt-2">
          <Btn
            text={"1"}
            action={() => handleClick("1")}
            justify={"center"}
            className={"bg-gray-700  w-[40px] h-[40px] text-white"}
          />
          <Btn
            text={"2"}
            action={() => handleClick("2")}
            justify={"center"}
            className={"bg-gray-700  w-[40px] h-[40px] text-white"}
          />
          <Btn
            text={"3"}
            action={() => handleClick("3")}
            justify={"center"}
            className={"bg-gray-700  w-[40px] h-[40px] text-white"}
          />
          <Btn
            text={"+"}
            action={() => handleClick("+")}
            justify={"center"}
            className={"bg-yellow-500  w-[40px] h-[40px] text-white"}
          />
        </div>
        <div className="flex px-5 justify-between gap-2 pt-2">
          <Btn
            text={"0"}
            action={() => handleClick("0")}
            justify={"start"}
            className={"bg-gray-700 w-[150px] h-[40px] text-white"}
          />
          <Btn
            text={"."}
            action={() => handleClick(".")}
            justify={"center"}
            className={"bg-gray-700  w-[40px] h-[40px] text-white"}
          />
          <Btn
            text={"="}
            action={() => calculateResult()}
            justify={"center"}
            className={"bg-yellow-500  w-[40px] h-[40px] text-white"}
          />
        </div>
        <div className="w-[100%] h-[20px] flex items-end justify-center mt-3 ">
          <div className="bg-white w-[40%] h-[2px] rounded-full "></div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
