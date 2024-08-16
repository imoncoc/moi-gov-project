import { CaretRightOutlined, DribbbleOutlined } from "@ant-design/icons";
import { Button, Tag } from "antd";

const noticeBoard = [
  { title: "G.O.No-332 (Condolence)" },
  { title: "G.O.No-330(8)" },
  { title: "G.O. No: 237" },
  { title: "G.O.No-322(5)" },
  { title: "G.O.No-321/(7)" },
];

const NoticeBoard = () => {
  return (
    <div className="flex flex-row gap-8 shadow-md p-4  relative  bg-slate-50">
      <div>
        <DribbbleOutlined className="text-6xl text-lime-500" />
      </div>
      <div className="my-6">
        <h3 className="text-xl text-lime-700">Notice Board</h3>
        <div className="mt-4">
          {noticeBoard.map((item) => (
            <p className="text-[14px] text-gray-600">
              <span className="text-lime-500 me-2">
                <CaretRightOutlined />
              </span>
              {item.title}

              <span className="ms-2 text-red-500">(New)</span>
            </p>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 right-0 h-12 w-16">
        {/* <p>All</p> */}
        {/* <Tag color="success" className="px-4 cursor-pointer" bordered={true}>
          All
        </Tag> */}
        <Button>All</Button>
      </div>
    </div>
  );
};

export default NoticeBoard;
