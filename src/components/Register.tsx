import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Form, Input, Button, Typography, Alert, Checkbox, Space } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined, CheckOutlined } from '@ant-design/icons';
import { useAuth } from '../contexts/AuthContext';

const { Title, Text } = Typography;

const Register: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const { register } = useAuth();
  const navigate = useNavigate();

  const onFinish = async (values: { 
    name: string; 
    email: string; 
    password: string; 
    confirmPassword: string;
    terms: boolean;
  }) => {
    setIsLoading(true);
    setError('');

    // Basic validation
    if (values.password !== values.confirmPassword) {
      setError('Passwords do not match');
      setIsLoading(false);
      return;
    }

    if (values.password.length < 8) {
      setError('Password must be at least 8 characters long');
      setIsLoading(false);
      return;
    }

    try {
      await register(values.name, values.email, values.password, values.confirmPassword);
      navigate('/dashboard');
    } catch (err: any) {
      setError(err.message || 'Registration failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div style={{ textAlign: 'center', marginBottom: '32px' }}>
        <div style={{ fontSize: '48px', marginBottom: '16px' }}>👤</div>
        <Title level={2} className="gradient-text">Join AuthFlow</Title>
        <Text type="secondary">Create your account and start your journey</Text>
      </div>

      <Form
        name="register"
        onFinish={onFinish}
        layout="vertical"
        size="large"
        autoComplete="off"
      >
        {error && (
          <Alert
            message={error}
            type="error"
            showIcon
            style={{ marginBottom: '24px' }}
          />
        )}

        <Form.Item
          name="name"
          label="Full Name"
          rules={[{ required: true, message: 'Please input your full name!' }]}
        >
          <Input
            prefix={<UserOutlined />}
            placeholder="Enter your full name"
            style={{ borderRadius: '12px' }}
          />
        </Form.Item>

        <Form.Item
          name="email"
          label="Email Address"
          rules={[
            { required: true, message: 'Please input your email!' },
            { type: 'email', message: 'Please enter a valid email!' }
          ]}
        >
          <Input
            prefix={<MailOutlined />}
            placeholder="Enter your email"
            style={{ borderRadius: '12px' }}
          />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={[
            { required: true, message: 'Please input your password!' },
            { min: 8, message: 'Password must be at least 8 characters!' }
          ]}
        >
          <Input.Password
            prefix={<LockOutlined />}
            placeholder="Enter your password"
            style={{ borderRadius: '12px' }}
          />
        </Form.Item>

        <Form.Item
          name="confirmPassword"
          label="Confirm Password"
          rules={[{ required: true, message: 'Please confirm your password!' }]}
        >
          <Input.Password
            prefix={<CheckOutlined />}
            placeholder="Confirm your password"
            style={{ borderRadius: '12px' }}
          />
        </Form.Item>

        <Form.Item
          name="terms"
          valuePropName="checked"
          rules={[
            { 
              validator: (_, value) => 
                value ? Promise.resolve() : Promise.reject(new Error('You must agree to the terms'))
            }
          ]}
        >
          <Checkbox>
            I agree to the{' '}
            <Link to="#" style={{ color: '#667eea' }}>
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link to="#" style={{ color: '#667eea' }}>
              Privacy Policy
            </Link>
          </Checkbox>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            loading={isLoading}
            block
            style={{
              height: '48px',
              background: 'linear-gradient(45deg, #667eea, #764ba2)',
              border: 'none',
              borderRadius: '12px',
              fontSize: '16px',
              fontWeight: '600'
            }}
          >
            {isLoading ? 'Creating account...' : 'Create Account'}
          </Button>
        </Form.Item>

        <div style={{ textAlign: 'center', marginTop: '24px' }}>
          <Text type="secondary">
            Already have an account?{' '}
            <Link to="/login" style={{ color: '#667eea', fontWeight: '600' }}>
              Sign in here
            </Link>
          </Text>
        </div>
      </Form>
    </div>
  );
};

export default Register;