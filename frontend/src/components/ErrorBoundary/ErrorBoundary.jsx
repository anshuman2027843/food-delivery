import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Unhandled React Error Caught by ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          padding: '60px 20px',
          textAlign: 'center',
          fontFamily: 'Outfit, sans-serif',
          color: '#49557E'
        }}>
          <h2 style={{ fontSize: '28px', color: '#FF4C24', marginBottom: '16px' }}>Oops! Something went wrong</h2>
          <p style={{ fontSize: '16px', marginBottom: '24px' }}>The app encountered an unexpected issue. Please try refreshing.</p>
          <button 
            onClick={() => {
              this.setState({ hasError: false });
              window.location.href = '/';
            }}
            style={{
              padding: '12px 30px',
              backgroundColor: '#FF4C24',
              color: '#fff',
              border: 'none',
              borderRadius: '50px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: '500'
            }}
          >
            Back to Home
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
