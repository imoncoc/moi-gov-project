import { Button } from "antd";

const ChiefAdviser = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="shadow-sm hover:shadow-md rounded">
        <p className="bg-lime-500 text-white text-center py-2 rounded">
          Hon'ble Chief Adviser
        </p>
        <img
          className="size-40 mx-auto my-2 rounded"
          src="https://moi.gov.bd/sites/default/files/files/moi.portal.gov.bd/office_head/bc55c5da_95ac_4c12_b935_0f6793e60c0e/Dr.%20Muhammad%20Yunus.jpg"
          alt=""
        />
        <p className="text-center font-semibold">Dr. Muhammad Yunus</p>
        <p className="text-slate-500 text-center">Hon'ble chief adviser</p>
        <Button color="rgb(132 204 22)" className="w-full mt-2">
          View Details
        </Button>
      </div>
      <div className="shadow-sm hover:shadow-md rounded">
        <p className="bg-lime-500 text-white text-center py-2 rounded">
          Senior Secretary
        </p>
        <img
          className="size-40 mx-auto my-2 rounded"
          src="https://moi.gov.bd/sites/default/files/files/moi.portal.gov.bd/office_head/94d6d05a_d93b_41df_baa7_b70625877627/secretary.jpg"
          alt=""
        />
        <p className="text-center font-semibold">Md. Humayun Kabir Khandaker</p>
        <p className="text-slate-500 text-center">
          Senior Secretary, Ministry of Information and Broadcasting
        </p>
        <Button color="rgb(132 204 22)" className="w-full mt-2">
          View Details
        </Button>
      </div>
    </div>
  );
};

export default ChiefAdviser;
