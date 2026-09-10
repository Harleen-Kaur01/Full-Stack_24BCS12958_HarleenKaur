import { useNavigate } from 'react-router-dom';

export default function Contact() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    // Prevent the standard browser reload/network submission
    event.preventDefault(); 
    
    // Perform programmatic redirect to the Home page
    navigate('/'); 
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Contact Page</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="message">Your Message: </label>
          <br />
          <textarea id="message" required rows="4" cols="30" />
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}
