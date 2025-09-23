import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Typography, Button, Space, Row, Col, Statistic, Avatar, Divider } from 'antd';
import { UserOutlined, LogoutOutlined, SettingOutlined, KeyOutlined, ProfileOutlined } from '@ant-design/icons';
import { useAuth } from '../contexts/AuthContext';

const { Title, Text } = Typography;

const Dashboard: React.FC = () => {
  const { user, logout, isAuthenticated, isLoading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, isLoading, navigate]);

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  if (isLoading) {
    return (
      <div className="app-container">
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '48px', marginBottom: '20px' }}>⏳</div>
          <Title level={3}>Loading your dashboard...</Title>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="dashboard-container">
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
        <div>
          <Title level={2} className="gradient-text" style={{ margin: 0 }}>
            Welcome back, {user?.name}! 👋
          </Title>
          <Text type="secondary">Here's what's happening with your account today.</Text>
        </div>
        <Button
          type="primary"
          danger
          icon={<LogoutOutlined />}
          onClick={handleLogout}
          style={{
            background: 'linear-gradient(45deg, #ff4d4f, #ff7875)',
            border: 'none',
            borderRadius: '12px'
          }}
        >
          Logout
        </Button>
      </div>

      {/* Stats Cards */}
      <Row gutter={[24, 24]} style={{ marginBottom: '32px' }}>
        <Col xs={24} sm={8}>
          <Card>
            <Statistic
              title="Profile Views"
              value={1234}
              prefix={<ProfileOutlined style={{ color: '#667eea' }} />}
              valueStyle={{ color: '#667eea' }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={8}>
          <Card>
            <Statistic
              title="Tasks Completed"
              value={89}
              prefix={<KeyOutlined style={{ color: '#52c41a' }} />}
              valueStyle={{ color: '#52c41a' }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={8}>
          <Card>
            <Statistic
              title="Growth Rate"
              value={12.5}
              suffix="%"
              prefix={<SettingOutlined style={{ color: '#faad14' }} />}
              valueStyle={{ color: '#faad14' }}
            />
          </Card>
        </Col>
      </Row>

      {/* User Information */}
      <Card title="Personal Information" style={{ marginBottom: '24px' }}>
        <Row gutter={[24, 24]}>
          <Col xs={24} sm={12}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
              <Avatar size={64} icon={<UserOutlined />} style={{ marginRight: '16px' }} />
              <div>
                <Title level={4} style={{ margin: 0 }}>{user?.name}</Title>
                <Text type="secondary">{user?.email}</Text>
              </div>
            </div>
          </Col>
          <Col xs={24} sm={12}>
            <Space direction="vertical" style={{ width: '100%' }}>
              <div>
                <Text strong>User ID:</Text>
                <br />
                <Text type="secondary">{user?.id}</Text>
              </div>
              <div>
                <Text strong>Member Since:</Text>
                <br />
                <Text type="secondary">
                  {user?.created_at ? new Date(user.created_at).toLocaleDateString() : 'N/A'}
                </Text>
              </div>
            </Space>
          </Col>
        </Row>
      </Card>

      {/* Quick Actions */}
      <Card title="Quick Actions">
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={8}>
            <Button
              type="primary"
              icon={<ProfileOutlined />}
              block
              style={{
                height: '48px',
                background: 'linear-gradient(45deg, #667eea, #764ba2)',
                border: 'none',
                borderRadius: '12px'
              }}
            >
              Update Profile
            </Button>
          </Col>
          <Col xs={24} sm={8}>
            <Button
              type="primary"
              icon={<KeyOutlined />}
              block
              style={{
                height: '48px',
                background: 'linear-gradient(45deg, #52c41a, #73d13d)',
                border: 'none',
                borderRadius: '12px'
              }}
            >
              Change Password
            </Button>
          </Col>
          <Col xs={24} sm={8}>
            <Button
              type="primary"
              icon={<SettingOutlined />}
              block
              style={{
                height: '48px',
                background: 'linear-gradient(45deg, #faad14, #ffc53d)',
                border: 'none',
                borderRadius: '12px'
              }}
            >
              View Settings
            </Button>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default Dashboard;