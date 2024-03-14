import React, { useState } from 'react';

const Upload = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    // Get the selected file
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (file) {
        const formData = new FormData();
        console.log(formData);
        formData.append('file', file); // <-- Change 'image' to 'file'

        // Make a POST request to your API
        const response = await fetch('http://127.0.0.1:5000/gettext', {
          method: 'POST',
          body: formData,
        });

        if (response.ok) {
          // Handle success
          console.log('Photo uploaded successfully');
        } else {
          // Handle error
          console.error('Failed to upload photo');
        }
      } else {
        console.error('No file selected');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <section className='banner' id='upload'>
      <form onSubmit={handleSubmit}>
        <label htmlFor='doc_input'>Upload Doc</label>
        <input type='file' id='doc_input' name='file' onChange={handleFileChange} /> {/* Change name to 'file' */}
        <button type='submit'>Upload</button>
      </form>
    </section>
  );
};

export default Upload;