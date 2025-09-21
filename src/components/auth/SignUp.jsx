import styled from "styled-components";
import BG from "../../assets/bg.jpg";
import { LockOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Flex } from "antd";
import { Link } from "react-router-dom";

const SignUp = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
    <LoginStyle>
      <Form
        name="login"
        initialValues={{ remember: true }}
        // style={{ maxWidth: 360 }}
        onFinish={onFinish}
        className="Form"
      >
        <h1>Create Account</h1>
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please input your Username!" }]}
        >
          <Input prefix={<UserOutlined />} placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[{ required: true, message: "Please input your Email!" }]}
        >
          <Input prefix={<MailOutlined />} placeholder="Email" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input.Password
            prefix={<LockOutlined />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item
          name="confirm-password"
          rules={[{ required: true, message: "Please confirm your Password!" }]}
        >
          <Input.Password
            prefix={<LockOutlined />}
            type="password"
            placeholder="Confirm Password"
          />
        </Form.Item>
        <Form.Item>
          <Flex justify="space-between" align="center">
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <a href="">Forgot password</a>
          </Flex>
        </Form.Item>

        <Form.Item>
          <Button block type="se" htmlType="submit">
            Log in
          </Button>
          <Link to="/login" style={{ color: "black" }}>
            or <span className="Rig">Login now!</span>
          </Link>
        </Form.Item>
      </Form>
    </LoginStyle>
  );
};

export default SignUp;

const LoginStyle = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.531), #000), url(${BG});
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  .Form {
    width: 25%;
    min-height: max-content;
    background-color: #fff;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    Button {
      background: red;
      height: 3rem;
      margin-bottom: 1rem;
    }

    .Rig {
      color: red;
    }

    h1 {
      margin-bottom: 2rem;
    }
  }
`;
