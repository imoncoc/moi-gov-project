import { Button, Select } from "antd";
import Search, { SearchProps } from "antd/es/input/Search";

const BangladeshNationalPortal = () => {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
    console.log(info?.source, value);
  return (
    <div className="container mx-auto my-2">
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div className="flex items-center gap-2 mx-auto md:mx-0">
          <p>Bangladesh National Portal:</p>
          <Select
            defaultValue="অফিসের ধরণ"
            style={{ width: 160 }}
            onChange={handleChange}
            options={[
              // { value: "অফিসের ধরণ", label: "অফিসের ধরণ" },
              { value: "মন্ত্রণালয়/বিভাগ", label: "মন্ত্রণালয়/বিভাগ" },
              { value: "অধিদপ্তর বাতায়ন", label: "অধিদপ্তর বাতায়ন" },
              { value: "বিভাগীয় বাতায়ন", label: "বিভাগীয় বাতায়ন" },
              { value: "জেলা বাতায়ন ", label: "জেলা বাতায়ন " },
              { value: "উপজেলা বাতায়ন", label: "উপজেলা বাতায়ন" },
              { value: "ইউনিয়ন বাতায়ন", label: "ইউনিয়ন বাতায়ন" },
              { value: "অন্যান্য", label: "অন্যান্য" },
            ]}
          />
          <Button className="">Go</Button>
        </div>
        <div className="flex gap-2 px-6 md:px-0">
          <Search
            placeholder="input search text"
            allowClear
            enterButton="Search"
            onSearch={onSearch}
          />
          <Button className="">English</Button>
        </div>
      </div>
    </div>
  );
};

export default BangladeshNationalPortal;
