import React, { FC, useState } from "react";
import UniModal from "../modal/Modal";
// import { useDispatch } from "react-redux";
import { Button, Form, Input } from "antd";
import { jsx } from "@emotion/react";

const AddProduct: FC = () => {
  // const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const onFinish = (values: object) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: object) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="wrapper flex justify-between items-center">
      <h2 className="text-xl font-semibold text-gray-800">Add Card</h2>

      <UniModal title={"Add Cart"}>
        <>
          <h2 className="text-2xl mb-4 text-slate-100 font-bold z-10">
            Add Card
          </h2>
          <Form
            className="p-4 bg-white rounded-lg shadow-lg"
            name="basic"
            layout="vertical"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input
                className="border-gray-300 rounded-md focus:border-black"
                placeholder="Enter your username"
              />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password
                className="border-gray-300 rounded-md focus:border-black"
                placeholder="Enter your password"
              />
            </Form.Item>

            <Form.Item className="m-0">
              <Button
                type="primary"
                htmlType="submit"
                className="w-full bg-black text-white hover:bg-gray-900"
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </>
      </UniModal>
    </div>
  );
};

export default AddProduct;
