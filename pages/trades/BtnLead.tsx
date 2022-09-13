import { useState } from "react";
import { BtnItem, BtnLeadList, FlexBasic } from "../../components/style";

type TArrProps = {
  key: number;
  label: string;
};

const periodList = [
  {
    key: 0,
    label: "1D",
  },
  {
    key: 1,
    label: "1W",
  },
  {
    key: 2,
    label: "1M",
  },
  {
    key: 3,
    label: "6M",
  },
];

interface IBtnList {
  list?: Array<TArrProps>;
}
const BtnLead = (props: IBtnList) => {
  const { list = periodList } = props;
  const [activeKey, setActiveKey] = useState(0);

  const handleActive = (key: number) => {
    setActiveKey(key);
  };

  return (
    <BtnLeadList>
      <FlexBasic style={{ justifyContent: "space-between" }}>
        {list.map((item: any, idx: number) => (
          <BtnItem
            onClick={() => handleActive(item?.key)}
            key={idx}
            className={item.key === activeKey ? "btn-active" : ""}
            style={{ cursor: "pointer" }}
          >
            {item?.label}
          </BtnItem>
        ))}
      </FlexBasic>
    </BtnLeadList>
  );
};

export default BtnLead;
