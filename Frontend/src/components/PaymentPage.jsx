import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PaymentPage = () => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [transactionId, setTransactionId] = useState('');
  const [amount, setAmount] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Handle the payment submission
  const handlePaymentSubmit = (e) => {
    e.preventDefault();

    if (!paymentMethod || !transactionId || !amount) {
      setError('Please fill in all the fields.');
      return;
    }

    // Reset error message
    setError('');

    // Example of submitting payment details to a backend service
    const paymentData = {
      paymentMethod,
      transactionId,
      amount
    };

    // Mock backend API call
    fetch('/api/payments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(paymentData),
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          setSuccessMessage('Payment successfully completed!');
        } else {
          setError('Payment failed. Please try again.');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        setError('An error occurred. Please try again.');
      });
  };

  return (
    <div style={styles.container}>
      <button 
        style={styles.backButton} 
        onMouseEnter={(e) => e.target.style.backgroundColor = 'transparent'}
        onMouseLeave={(e) => e.target.style.backgroundColor = 'linear-gradient(to right, #ff0000, #ffff00)'}
        onClick={() => window.history.back()}
      >
        Back
      </button>
      
      <div style={styles.description}>
        <h2>Special Offers and Important Information</h2>
        <p>Complete your payment now and get a 10% discount on your first consultation session! Limited time offer.</p>
        <p><strong>Warning:</strong> Ensure that your transaction ID is correct to avoid any payment issues. Contact support if you experience any problems.</p>
      </div>

      <h2>Payment Page</h2>
      <form onSubmit={handlePaymentSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor="paymentMethod">Select Payment Method:</label>
          <select
            id="paymentMethod"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            style={styles.input}
          >
            <option value="">--Select Payment Method--</option>
            <option value="bkash">bKash</option>
            <option value="rocket">Rocket</option>
            <option value="nagad">Nagad</option>
          </select>
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="transactionId">Transaction ID:</label>
          <input
            type="text"
            id="transactionId"
            value={transactionId}
            onChange={(e) => setTransactionId(e.target.value)}
            placeholder="Enter your transaction ID"
            style={styles.input}
          />
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="amount">Amount (in BDT):</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter the amount"
            style={styles.input}
          />
        </div>

        <button type="submit" style={styles.button}>Submit Payment</button>

        {error && <div style={styles.error}>{error}</div>}
        {successMessage && <div style={styles.success}>{successMessage}</div>}
      </form>
    </div>
  );
};

// Inline CSS styles
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: '#e0f7fa',
    background: 'linear-gradient(135deg, #00796b 25%, #004d40 100%)',
    color: '#fff',
    padding: '50px',
    paddingTop: '80px', // Adjusted padding to shift content down from the navbar
  },
  backButton: {
    position: 'absolute',
    top: '80px', // Increased from 20px to move it below the navbar
    left: '20px',
    padding: '10px',
    background: 'linear-gradient(to right, #ff0000, #ffff00)',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background 0.3s',
  },
  description: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    padding: '15px',
    borderRadius: '10px',
    marginBottom: '20px',
    textAlign: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '10px',
    backgroundColor: '#fff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    color: '#000',
    width: '80%', // Adjust width to be responsive
    maxWidth: '500px', // Ensure form doesn't exceed max width
  },
  formGroup: {
    marginBottom: '15px',
  },
  input: {
    width: '100%',
    padding: '8px',
    margin: '5px 0',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
  error: {
    color: 'red',
    marginTop: '10px',
  },
  success: {
    color: 'green',
    marginTop: '10px',
  },
};

export default PaymentPage;