import React from 'react';

const GenerateColdEmail = () => {
  return (
    <div style={{
      color: '#ffffff',          
      minHeight: '100vh',       
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      boxSizing: 'border-box',
      fontFamily: 'sans-serif' 
    }}>
      <h2 style={{
        color: '#8ab4f8', 
        fontSize: '2.5em',
        marginBottom: '100px', 
        textAlign: 'center'
      }}>
        Hello, MAYANK
      </h2>

      <div style={{
        width: 'clamp(300px, 80%, 700px)', 
        backgroundColor: '#2e2e2e',
        borderRadius: '30px',
        display: 'flex',
        alignItems: 'center',
        padding: '10px 20px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)' 
      }}>
        <span style={{
          fontSize: '1.8em',
          color: '#8ab4f8',
          marginRight: '15px',
          cursor: 'pointer'
        }}>
          +
        </span>
        <input
          type="text"
          placeholder="Generate Cold E-Mail"
          style={{
            flexGrow: 1, 
            backgroundColor: 'transparent',
            border: 'none',
            color: '#ffffff',
            fontSize: '1.1em',
            outline: 'none', 
            padding: '10px 0'
          }}
        />

        <div style={{ display: 'flex', gap: '15px', marginLeft: '20px' }}>
          <button style={{
            backgroundColor: 'transparent',
            border: 'none',
            color: '#c5c5c5', 
            fontSize: '1em',
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
            padding: '5px 10px',
            borderRadius: '20px'
          }}>
            <span style={{ marginRight: '5px' }}>🔍</span> Deep Research
          </button>
          <button style={{
            backgroundColor: 'transparent',
            border: 'none',
            color: '#c5c5c5',
            fontSize: '1em',
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
            padding: '5px 10px',
            borderRadius: '20px'
          }}>
            <span style={{ marginRight: '5px' }}>🖼️</span> Canvas
          </button>
        </div>

        <span style={{
          fontSize: '1.8em',
          color: '#c5c5c5',
          marginLeft: '20px',
          cursor: 'pointer'
        }}>
          🎤
        </span>
      </div>
    </div>
  );
};

export default GenerateColdEmail;