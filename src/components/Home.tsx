import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button, Typography, Space, Card, Row, Col } from 'antd';
import { LockOutlined, ThunderboltOutlined, HeartOutlined } from '@ant-design/icons';
import { useAuth } from '../contexts/AuthContext';

const { Title, Paragraph } = Typography;

const Home: React.FC = () => {
  const { isAuthenticated, isLoading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      navigate('/dashboard');
    }
  }, [isAuthenticated, isLoading, navigate]);

  if (isLoading) {
    return (
      <div className="app-container">
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '48px', marginBottom: '20px' }}>⏳</div>
          <Title level={3}>Loading...</Title>
        </div>
      </div>
    );
  }

  return (
    <div style={{ textAlign: 'center', padding: '40px 20px' }}>
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <div style={{ fontSize: '80px', marginBottom: '20px' }}>
          🔐
        </div>
        
        <Title level={1} className="gradient-text" style={{ fontSize: '3rem' }}>
          AuthFlow
        </Title>
        
        <Paragraph style={{ 
          fontSize: '1.2rem', 
          color: 'rgba(255, 255, 255, 0.9)',
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          Experience the future of authentication with our cutting-edge platform built on{' '}
          <strong style={{ color: '#667eea' }}>React</strong> and{' '}
          <strong style={{ color: '#764ba2' }}>Laravel</strong>. 
          Secure, fast, and beautifully designed.
        </Paragraph>
        
        <Space size="large">
          <Link to="/login">
            <Button 
              type="primary" 
              size="large" 
              style={{ 
                background: 'linear-gradient(45deg, #667eea, #764ba2)',
                border: 'none',
                height: '50px',
                padding: '0 40px',
                fontSize: '16px'
              }}
            >
              Get Started
            </Button>
          </Link>
          
          <Link to="/register">
            <Button 
              size="large" 
              style={{ 
                height: '50px',
                padding: '0 40px',
                fontSize: '16px',
                border: '2px solid rgba(255, 255, 255, 0.8)',
                color: 'white',
                background: 'rgba(255, 255, 255, 0.1)'
              }}
            >
              Create Account
            </Button>
          </Link>
        </Space>

        {/* Features */}
        <Row gutter={[24, 24]} style={{ marginTop: '60px', maxWidth: '800px', margin: '60px auto 0' }}>
          <Col xs={24} sm={8}>
            <Card 
              style={{ 
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: 'white'
              }}
            >
              <LockOutlined style={{ fontSize: '32px', color: '#667eea', marginBottom: '16px' }} />
              <Title level={4} style={{ color: 'white' }}>Bank-Level Security</Title>
              <Paragraph style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                Powered by Laravel Sanctum with industry-standard encryption.
              </Paragraph>
            </Card>
          </Col>
          
          <Col xs={24} sm={8}>
            <Card 
              style={{ 
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: 'white'
              }}
            >
              <ThunderboltOutlined style={{ fontSize: '32px', color: '#764ba2', marginBottom: '16px' }} />
              <Title level={4} style={{ color: 'white' }}>Lightning Fast</Title>
              <Paragraph style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                Built with React 18 and Ant Design for blazing-fast performance.
              </Paragraph>
            </Card>
          </Col>
          
          <Col xs={24} sm={8}>
            <Card 
              style={{ 
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: 'white'
              }}
            >
              <HeartOutlined style={{ fontSize: '32px', color: '#f093fb', marginBottom: '16px' }} />
              <Title level={4} style={{ color: 'white' }}>Beautiful Design</Title>
              <Paragraph style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                Stunning UI crafted with Ant Design and modern principles.
              </Paragraph>
            </Card>
          </Col>
        </Row>
      </Space>
    </div>
  );
};

export default Home;