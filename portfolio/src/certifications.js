import React, { useState } from 'react';
import './certifications.css';

// Updated image paths to point to the public directory
import ml from './certificates/guvi.png'; // Assuming you moved the file to public/images/
import sql from './certificates/java.png'; // Assuming you moved the file to public/images/
import imgppr from './certificates/abc.jpg'; // Assuming you moved the file to public/images/

const Certifications = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const certificates = [
    {
      title: "PYTHON MATPLOTLIB",
      description: "Matplotlib",
      image: imgppr,
    },
    {
      title: "GUVI",
      description: "Completed a comprehensive  development course.",
      image: ml,
    },
    {
      title: "JAVA",
      description: "A COMPLETE JAVA DEVELOPMENT COURSE",
      image: sql,
    },
  ];

  const openModal = (certificate) => setSelectedCertificate(certificate);
  const closeModal = () => setSelectedCertificate(null);

  return (
    <div className="certificates-section">
      <h2 className="certificates-title">My Certificates</h2>
      <div className="certificates-grid">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="certificate-card"
            onClick={() => openModal(cert)}
          >
            <img
              src={cert.image}
              alt={cert.title}
              className="certificate-image"
            />
            <div className="certificate-info">
              <h3>{cert.title}</h3>
              <p>{cert.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Certificate Details */}
      {selectedCertificate && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedCertificate.image}
              alt={selectedCertificate.title}
              className="modal-image"
            />
            <h3>{selectedCertificate.title}</h3>
            <p>{selectedCertificate.description}</p>
            <button className="close-modal-btn" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Certifications;
