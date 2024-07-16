import { useState } from "react";

const Counter = () => {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + count);

  function handleAddStep() {
    setStep((s) => s + 1);
  }

  function handleMinusStep() {
    setStep((s) => s - 1);
  }

  // function getDate(date) {
  //   const dayName = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  //   const monthNames = [
  //     "Jan",
  //     "Feb",
  //     "Mar",
  //     "Apr",
  //     "May",
  //     "Jun",
  //     "Jul",
  //     "Aug",
  //     "Sep",
  //     "Oct",
  //     "Nov",
  //     "Dec",
  //   ];

  //   const day = dayName[date.getDay()];
  //   const month = monthNames[date.getMonth()];
  //   const dayOfMonth = date.getDate();
  //   const year = date.getFullYear();
  //   return `${day} ${month} ${dayOfMonth}, ${year}`;
  // }

  // const [currentDate, setCurrentDate] = useState(getDate(new Date()));

  function handleAddCount() {
    setCount((s) => s + step);
    // setCurrentDate((prevDate) => {
    //   const current = new Date(prevDate);
    //   current.setDate(current.getDate() + count);
    //   return getDate(current);
    // });
  }

  function handleMinusCount() {
    setCount((s) => s - step);
  }

  return (
    <>
      <div className="d-flex space-y-2">
        <div className="d-flex flex justify-center items-center space-x-2 ">
          <button
            className="bg-red-500 text-white p-2 rounded-lg"
            onClick={handleMinusStep}
          >
            -
          </button>
          <p className="d-flex items-center">Step: {step}</p>
          <button
            className="bg-blue-500 text-white p-2 rounded-lg"
            onClick={handleAddStep}
          >
            +
          </button>
        </div>

        <div className="d-flex flex justify-center items-center space-x-2 ">
          <button
            className="bg-red-500 text-white p-2 rounded-lg"
            onClick={handleMinusCount}
          >
            -
          </button>
          <p className="d-flex items-center">Count: {count}</p>
          <button
            className="bg-blue-500 text-white p-2 rounded-lg"
            onClick={handleAddCount}
          >
            +
          </button>
        </div>

        <p>
          <span>
            {count === 0
              ? "Today is "
              : count > 0
              ? `${count} days from today is `
              : `${Math.abs(count)} days ago was `}
          </span>
          <span>{date.toDateString()}</span>
        </p>
      </div>
    </>
  );
};

export default Counter;
