import { CheckCircleOutlined } from "@ant-design/icons";
import { Button } from "antd";
// import { eServiceData } from "./data";

const InternalEservice = ({ title, serviceData, name }) => {
  return (
    <div className="my-4 shadow-sm hover:shadow-md rounded">
      <p className="bg-lime-500 text-white text-center py-2 rounded">{title}</p>
      {serviceData?.map((data: any) => (
        <div className="flex text-sm gap-2 p-2">
          <p>
            <CheckCircleOutlined className="text-lime-500" />
          </p>
          <p className="text-slate-600">{data}</p>
        </div>
      ))}

      {name !== "false" && <Button className="w-full mt-2">{name}</Button>}
    </div>
  );
};

export default InternalEservice;
