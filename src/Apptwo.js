import React, { useState } from 'react';
import {
  Clock, Droplets, Apple, Footprints, Moon,
  CheckCircle, Timer, Gift, Home, Heart, Users
} from 'lucide-react';
import './App.css';

export default function App() {
  const [activeTab, setActiveTab] = useState('All');

  const tasks = [
    {
      id: 1,
      title: 'Drink 2L of Water',
      icon: Droplets,
      status: 'In Progress',
      timeLeft: '2h 30m remaining',
      reward: 300,
      progress: 65,
      color: '#00BFFF'
    },
    {
      id: 2,
      title: 'Eat 3 Fruits Today',
      icon: Apple,
      status: 'Completed',
      timeLeft: 'Completed!',
      reward: 250,
      progress: 100,
      color: '#4ECDC4'
    },
    {
      id: 3,
      title: '10 Minute Walk',
      icon: Footprints,
      status: 'Active',
      timeLeft: '5h 15m remaining',
      reward: 400,
      progress: 0,
      color: '#FF6B6B'
    },
    {
      id: 4,
      title: 'Sleep 8 Hours',
      icon: Moon,
      status: 'Locked',
      timeLeft: 'Unlock at Level 3',
      reward: 500,
      progress: 0,
      color: '#FFD93D'
    },
    {
      id: 5,
      title: 'Meditate 5 Minutes',
      icon: Heart,
      status: 'Active',
      timeLeft: '8h 45m remaining',
      reward: 200,
      progress: 0,
      color: '#9B59B6'
    }
  ];

  const tabs = ['All', 'Active', 'Completed', 'Locked'];
  const navItems = [
    { icon: Home, label: 'Home', active: false },
    { icon: CheckCircle, label: 'Tasks', active: true },
    { icon: Heart, label: 'Tap', active: false },
    { icon: Users, label: 'Friends', active: false },
    { icon: Gift, label: 'Airdrop', active: false }
  ];

  const filteredTasks = activeTab === 'All'
    ? tasks
    : tasks.filter(task =>
        activeTab === 'Active' ? task.status === 'Active' || task.status === 'In Progress' :
        activeTab === 'Completed' ? task.status === 'Completed' :
        activeTab === 'Locked' ? task.status === 'Locked' : true
      );

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed': return '#4CAF50';
      case 'In Progress': return '#FF9800';
      case 'Active': return '#2196F3';
      case 'Locked': return '#9E9E9E';
      default: return '#2196F3';
    }
  };

  const getButtonText = (status) => {
    switch (status) {
      case 'Completed': return 'View Details';
      case 'Locked': return 'Unlock';
      default: return 'Start Now ➝';
    }
  };

  return (
    <div className="app-container">
      <header className="header">
        <h1>Daily Health Tasks</h1>
        <p>Boost your lifespan with simple, fun tasks.</p>
      </header>

      <div className="tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
      </header>

      <div className="tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`tab-button ${activeTab === tab ? 'active' : ''}`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="task-list">
        {filteredTasks.map((task) => {
          const IconComponent = task.icon;
          return (
            <div key={task.id} className="task-card">
              <div className="task-header">
                <div className="task-icon" style={{ backgroundColor: `${task.color}20` }}>
                  <IconComponent style={{ color: task.color }} strokeWidth={2} />
                </div>
                <div>
                  <h3>{task.title}</h3>
                  <div className="task-status">
                    <span className="status-dot" style={{ backgroundColor: getStatusColor(task.status) }}></span>
                    <span>{task.status}</span>
                  </div>
                </div>
                <div className="task-reward">
                  <Timer /> +{task.reward}s
                </div>
              </div>
              {task.status !== 'Locked' && (
                <div className="progress-bar">
                  <div 
                    className="progress"
                    style={{ width: `${task.progress}%`, backgroundColor: task.color }}
                  />
                </div>
              )}
              <div className="task-footer">
                <div className="task-time">
                  <Clock /> {task.timeLeft}
                </div>
                <button 
                  className={`task-button ${task.status}`} 
                  disabled={task.status === 'Locked'}
                >
                  {getButtonText(task.status)}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <nav className="bottom-nav">
        {navItems.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <button
              key={index}
              className={`nav-button ${item.active ? 'active' : ''}`}
            >
              <IconComponent strokeWidth={2} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}