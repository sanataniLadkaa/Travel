import React, { useState, useEffect } from "react";
import axios from "axios";
import "./UserExperience.css";

const UserExperience = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    review: "",
    rating: "",
  });

  // Default Testimonials
  const defaultTestimonials = [
    {
      name: "John Doe",
      location: "New York, USA",
      review: "Booking my trip was seamless and hassle-free. Highly recommend Tour & Ghumo!",
      rating: 5,
    },
    {
      name: "Aditi Sharma",
      location: "Delhi, India",
      review: "I found the perfect hotel near my destination. This platform made my travel easy.",
      rating: 4.5,
    },
    {
      name: "Liam Chen",
      location: "Beijing, China",
      review: "A reliable travel companion with excellent features. The booking experience was fantastic!",
      rating: 4.8,
    },
    {
      name: "Maria Garcia",
      location: "Madrid, Spain",
      review: "I loved how easy it was to explore tourist places and book my train tickets in one go.",
      rating: 5,
    },
  ];

  // Fetch existing testimonials from the server
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await axios.get("http://localhost:5000/experiences");
        setTestimonials([...defaultTestimonials, ...response.data]); // Combine default and user-added testimonials
      } catch (error) {
        console.error("Error fetching testimonials:", error);
        setTestimonials(defaultTestimonials); // Fall back to default testimonials
      }
    };
    fetchTestimonials();
  }, []);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.location || !formData.review || !formData.rating) {
      alert("Please fill out all fields!");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/experiences", formData);
      setTestimonials([...testimonials, response.data]); // Add new testimonial
      setFormData({ name: "", location: "", review: "", rating: "" }); // Reset form
    } catch (error) {
      console.error("Error adding testimonial:", error);
      alert("Failed to submit your experience. Please try again.");
    }
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="ux-container">
      <h1>User Experience</h1>
      <p>See what our happy travelers have to say about us!</p>

      {/* Form to Add User Experience */}
      <form className="experience-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="location"
          placeholder="Your Location"
          value={formData.location}
          onChange={handleChange}
          required
        />
        <textarea
          name="review"
          placeholder="Your Experience"
          value={formData.review}
          onChange={handleChange}
          required
        ></textarea>
        <input
          type="number"
          name="rating"
          placeholder="Rating (1-5)"
          min="1"
          max="5"
          value={formData.rating}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit</button>
      </form>

      {/* Display Testimonials */}
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <h3>{testimonial.name}</h3>
            <p className="location">{testimonial.location}</p>
            <p className="review">"{testimonial.review}"</p>
            <p className="rating">Rating: {testimonial.rating} ⭐</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserExperience;
