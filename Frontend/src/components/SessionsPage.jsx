import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SessionsPage() {
  const [sessions, setSessions] = useState([]);
  const [isCanceled, setIsCanceled] = useState(false);
  const [cancelMessage, setCancelMessage] = useState('');
  const navigate = useNavigate();

  // Fetch sessions when the component mounts
  useEffect(() => {
    async function fetchSessions() {
      try {
        const response = await fetch('http://localhost:3001/sessions');
        if (response.ok) {
          const data = await response.json();
          console.log('Fetched Sessions Data:', data);
          setSessions(data);
        } else {
          console.error('Failed to fetch sessions.');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
    fetchSessions();
  }, []);

  // Function to cancel the session
  const handleCancelSession = async (sessionId) => {
    console.log(`Canceling session with ID: ${sessionId}`); // Log the session ID to ensure the click is detected

    try {
      const response = await fetch(`http://localhost:3001/sessions/${sessionId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        console.log('Session canceled successfully'); // Log success
        setSessions((prevSessions) =>
          prevSessions.filter((session) => session.id !== sessionId) // Remove the canceled session from the state
        );
        setCancelMessage('Your session has been canceled.');
        setIsCanceled(true);

        setTimeout(() => {
          setIsCanceled(false); // Hide the message after 3 seconds
          setCancelMessage('');
        }, 3000);
      } else {
        console.error('Failed to cancel the session.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div
      style={{
        padding: '40px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#E0F2FE',
        minHeight: '100vh',
      }}
    >
      <h1
        style={{
          fontSize: '2rem',
          fontWeight: '600',
          color: '#1E3A8A',
          marginBottom: '24px',
        }}
      >
        Your Booked Sessions
      </h1>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '24px',
          width: '100%',
          maxWidth: '1200px',
        }}
      >
        {sessions.length > 0 ? (
          sessions.map((session) => (
            <div
              key={session.id}
              style={{
                padding: '24px',
                backgroundColor: '#FFFFFF',
                borderRadius: '16px',
                boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.15)',
                transform: 'scale(1)',
                transition: 'transform 0.3s',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
              <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#334155' }}>
                {session.doctor_name}
              </h2>
              <p style={{ fontSize: '1rem', color: '#64748B' }}>
                <strong>Session Time:</strong> {session.session_time}
              </p>
              <p style={{ fontSize: '1rem', color: '#64748B' }}>
                <strong>Patient:</strong> {session.patient_name}
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
                    cursor: 'pointer',
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
                    cursor: 'pointer',
                  }}
                  onClick={() => handleCancelSession(session.id)} // This triggers cancel
                >
                  Cancel Session
                </button>
              </div>
            </div>
          ))
        ) : (
          <p style={{ fontSize: '1.1rem', color: '#475569', marginTop: '16px' }}>
            You have no sessions booked at the moment.
          </p>
        )}
      </div>

      {/* Slide-up message for cancellation */}
      {isCanceled && (
        <div
          style={{
            position: 'fixed',
            bottom: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: '#34D399',
            color: '#FFFFFF',
            padding: '12px 20px',
            borderRadius: '8px',
            fontWeight: '600',
            zIndex: '999',
            animation: 'slideIn 0.5s ease-out',
          }}
        >
          {cancelMessage}
          <button
            onClick={() => {
              setIsCanceled(false);
              setCancelMessage('');
            }}
            style={{
              marginLeft: '16px',
              backgroundColor: '#10B981',
              color: '#FFFFFF',
              border: 'none',
              padding: '6px 12px',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Okay
          </button>
        </div>
      )}
    </div>
  );
}

export default SessionsPage;
