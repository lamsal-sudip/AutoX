import ContactForm from '../components/ContactForm';

export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-8">Contact Us</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
          <div className="space-y-4">
            <p>
              <strong>Address:</strong><br />
              123 Auto Drive<br />
              Cartown, CT 12345
            </p>
            <p>
              <strong>Phone:</strong><br />
              (555) 123-4567
            </p>
            <p>
              <strong>Hours:</strong><br />
              Monday-Friday: 9am - 8pm<br />
              Saturday: 10am - 6pm<br />
              Sunday: Closed
            </p>
          </div>
        </div>
        
        <div>
          <h2 className="text-xl font-semibold mb-4">Send us a Message</h2>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}