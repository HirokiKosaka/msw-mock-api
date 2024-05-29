import { FC } from "react";
import axios from "axios";

type userType = {
  id: number;
  name: string;
};

const ApiSample: FC = () => {
  const callApi = async () => {
    const url = "./api-sample";
    const res = await axios.get(url);
    const sampleData: userType = res.data;
    console.log(sampleData);
  };

  return (
    <>
      <button onClick={callApi}>APIを呼出す</button>
    </>
  );
};

export default ApiSample;
