import { Col, Row, Table } from "antd";
import InputSearch from "./InputSearch";
import { DeleteTwoTone, EditTwoTone } from "@ant-design/icons";

const UserTable = () => {
  const data = [
    {
      key: "1",
      No: "1",
      email: "admin@gmail.com",
      userName: "admin",
      role: "ad",
    },
    {
      key: "2",
      No: "2",
      email: "user@gmail.com",
      userName: "user",
      role: "us",
    },
  ];

  const columns = [
    {
      title: "No",
      dataIndex: "No",
      key: "userID",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Tên đăng nhập",
      dataIndex: "userName",
      key: "userName",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "Xóa",
      render: (text, record, index) => {
        return (
          <span style={{ cursor: "pointer", margin: "0 20px" }}>
            <DeleteTwoTone twoToneColor="#ff4d4f" />
          </span>
        );
      },
    },
    {
      title: "Cập nhật",
      render: (text, record, index) => {
        return (
          <EditTwoTone twoToneColor="#f57800" style={{ cursor: "pointer" }} />
        );
      },
    },
  ];

  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };
  return (
    <Row gutter={[20, 20]}>
      <Col span={24}>
        <InputSearch />
      </Col>
      <Col span={24}>
        <Table
          className="def"
          columns={columns}
          dataSource={data}
          onChange={onChange}
        ></Table>
      </Col>
    </Row>
  );
};

export default UserTable;