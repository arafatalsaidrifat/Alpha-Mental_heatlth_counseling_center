import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SessionsPage() {
  const [sessions, setSessions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchSessions() {
      try {
        const response = await fetch('http://localhost:3001/sessions');
        if (response.ok) {
          const data = await response.json();
          console.log("Fetched Sessions Data:", data); // Log the data here
          setSessions(data);
        } else {
          console.error("Failed to fetch sessions.");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
    fetchSessions();
  }, []);
  
  return (
    <div style={{
      padding: '40px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: '#E0F2FE',
      minHeight: '100vh'
    }}>
      
      <h1 style={{ fontSize: '2rem', fontWeight: '600', color: '#1E3A8A', marginBottom: '24px' }}>
        Admin view
      </h1>


      <h1 style={{ fontSize: '2rem', fontWeight: '400', color: '#1E3A8A', marginBottom: '24px' }}>
        Your Booked Sessions
      </h1>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '24px',
        width: '100%',
        maxWidth: '1200px'
      }}>
        {sessions.map((session, index) => (
          <div 
            key={index} 
            style={{
              padding: '24px',
              backgroundColor: '#FFFFFF',
              borderRadius: '16px',
              boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.15)',
              transform: 'scale(1)',
              transition: 'transform 0.3s',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#334155' }}>
              {session.doctor_name} {/* Ensure correct property name based on your database */}
            </h2>
            <p style={{ fontSize: '1rem', color: '#64748B' }}>
              <strong>Session Time:</strong> {session.session_time} {/* Ensure correct property name */}
            </p>
            <p style={{ fontSize: '1rem', color: '#64748B' }}>
              <strong>Patient:</strong> {session.patient_name} {/* Ensure correct property name */}
            </p>
            <p style={{ fontSize: '1rem', color: '#64748B' }}>
              <strong>Contact:</strong> {session.contact}
            </p>
            <div style={{ marginTop: '16px' }}>
              <button 
                style={{
                  width: '100%',
                  padding: '10px',
                  backgroundColor: '#1D4ED8',
                  color: '#FFFFFF',
                  borderRadius: '8px',
                  border: 'none',
                  fontWeight: '600',
                  marginBottom: '8px',
                  cursor: 'pointer'
                }}
                onClick={() => navigate('/reschedule', { state: { session } })}
              >
                Reschedule
              </button>
              <button 
                style={{
                  width: '100%',
                  padding: '10px',
                  backgroundColor: '#DC2626',
                  color: '#FFFFFF',
                  borderRadius: '8px',
                  border: 'none',
                  fontWeight: '600',
                  cursor: 'pointer'
                }}
                onClick={() => alert("Feature Coming Soon")}
              >
                Cancel Session
              </button>
            </div>
          </div>
        ))}
      </div>
      {sessions.length === 0 && (
        <p style={{ fontSize: '1.1rem', color: '#475569', marginTop: '16px' }}>
          You have no sessions booked at the moment.
        </p>
      )}
    </div>
  );
}

export default SessionsPage;
