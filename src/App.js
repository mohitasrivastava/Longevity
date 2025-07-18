import React from 'react';
import './App.css';
import { Clock, Droplets, Dumbbell, Carrot, Moon } from 'lucide-react';

export default function App() {
  const tasks = [
    { id: 1, label: 'Drink Water', icon: Droplets, color: '#00BFFF' },
    { id: 2, label: '3 Min Walk', icon: Dumbbell, color: '#FF6B6B' },
    { id: 3, label: 'Eat Healthy', icon: Carrot, color: '#4ECDC4' },
    { id: 4, label: 'Sleep Early', icon: Moon, color: '#FFD93D' },
  ];

  const progressDots = Array.from({ length: 8 }, (_, i) => i + 1);

  return (
    <div className="app-container">
      {/* Logo Section */}
      <div className="logo-section">
        <div className="logo-icon">
          <Clock className="icon" strokeWidth={2} color="white" size={32} />
        </div>
        <h1 className="logo-title">Longevity InTime</h1>
      </div>

      {/* Heading */}
      <div className="heading">
        Complete Daily Health Tasks
      </div>

      {/* Task Grid */}
      <div className="task-grid">
        {tasks.map(({ id, label, icon: Icon, color }) => (
          <div className="task-card" key={id}>
            <Icon size={32} strokeWidth={2} color={color} />
            <span className="task-label">{label}</span>
          </div>
        ))}
      </div>

      {/* Description */}
      <div className="description">
        Simple tasks improve your health & earn life seconds. Scientifically backed to support your real health progress.
      </div>

      {/* CTA Button */}
      <button className="cta-button">
        Get My First Task
      </button>

      {/* Progress Dots */}
      <div className="progress-dots">
        {progressDots.map((dot, i) => (
          <div key={i} className={`dot ${i === 3 ? 'active' : ''}`} />
        ))}
      </div>
    </div>
  );
}
