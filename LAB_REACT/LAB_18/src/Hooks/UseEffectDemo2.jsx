import { useEffect, useState } from "react";

const UseEffectDemo2 = () => {
  const [data, setData] = useState("Loading...");

  useEffect(() => {
    setTimeout(() => {
      setData("Data Fetched");
    }, 2000);
  }, []);

  return (
    <div className="d-flex flex-column align-items-center mt-4">
      <h1 className="text-primary">{data}</h1>
    </div>
  );
};

export default UseEffectDemo2;