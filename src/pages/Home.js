import React from 'react'
import Layout from '../component/Layout/Layout'
import '../styles/home.css'
import '../styles/about.css'
import '../styles/service.css'
import '../styles/contact.css'

const home = () => {
  return (
    <Layout>
      <section id="home" class="landing-section">
        <div class="landing-content">
          <h1 class="landing-title">Welcome to FinEdge</h1>
          <p class="landing-description">Revolutionizing cross-border payments for individuals and businesses.
            FinEdge is an innovative fintech startup at the forefront of revolutionizing cross-border payments. 
            With a vision to facilitate seamless transactions for individuals and businesses, FinEdge aims to transcend geographical boundaries. 
            Leveraging cutting-edge technology and expertise in the financial industry, FinEdge is dedicated to providing efficient and secure solutions for cross-border payments. 
            By eliminating barriers and streamlining international transactions, FinEdge empowers individuals and businesses to transact effortlessly across borders, unlocking new opportunities in the global marketplace.
            Revolutionizing cross-border payments for individuals and businesses.
            FinEdge is an innovative fintech startup at the forefront of revolutionizing cross-border payments. 
            With a vision to facilitate seamless transactions for individuals and businesses, FinEdge aims to transcend geographical boundaries. 
            Leveraging cutting-edge technology and expertise in the financial industry, FinEdge is dedicated to providing efficient and secure solutions for cross-border payments. 
            By eliminating barriers and streamlining international transactions, FinEdge empowers individuals and businesses to transact effortlessly across borders, unlocking new opportunities in the global marketplace.  
        </p>
        </div>
        </section>
        <section id="about" class="about-section">
        <div class="about-content">
          <h2 class="about-title">About FinEdge</h2>
          <p class="about-description">
            FinEdge is a cutting-edge fintech startup dedicated to revolutionizing cross-border payments. Our vision is to enable seamless transactions for individuals and businesses, transcending geographical boundaries.
            Revolutionizing cross-border payments for individuals and businesses.
            FinEdge is an innovative fintech startup at the forefront of revolutionizing cross-border payments. 
            With a vision to facilitate seamless transactions for individuals and businesses, FinEdge aims to transcend geographical boundaries. 
            Leveraging cutting-edge technology and expertise in the financial industry, FinEdge is dedicated to providing efficient and secure solutions for cross-border payments. 
            By eliminating barriers and streamlining international transactions, FinEdge empowers individuals and businesses to transact effortlessly across borders, unlocking new opportunities in the global marketplace.
            Revolutionizing cross-border payments for individuals and businesses.
            FinEdge is an innovative fintech startup at the forefront of revolutionizing cross-border payments. 
            With a vision to facilitate seamless transactions for individuals and businesses, FinEdge aims to transcend geographical boundaries. 
            Leveraging cutting-edge technology and expertise in the financial industry, FinEdge is dedicated to providing efficient and secure solutions for cross-border payments. 
            By eliminating barriers and streamlining international transactions, FinEdge empowers individuals and businesses to transact effortlessly across borders, unlocking new opportunities in the global marketplace.
            Revolutionizing cross-border payments for individuals and businesses.
            FinEdge is an innovative fintech startup at the forefront of revolutionizing cross-border payments. 
            With a vision to facilitate seamless transactions for individuals and businesses, FinEdge aims to transcend geographical boundaries. 
            Leveraging cutting-edge technology and expertise in the financial industry, FinEdge is dedicated to providing efficient and secure solutions for cross-border payments. 
            By eliminating barriers and streamlining international transactions, FinEdge empowers individuals and businesses to transact effortlessly across borders, unlocking new opportunities in the global marketplace.
          </p>
        </div>
      </section>
      <section id="services" class="services-section">
        <div class="services-content">
          <h2 class="services-title">Our Services</h2>
          <div class="services-list">
            <div class="service">
              {/* <img src="money-transfer.png" alt="Money Transfer Icon" class="service-icon"> */}
              <h3 class="service-title">Individual Money Transfers</h3>
              <p class="service-description">Send money across borders quickly and securely.</p>
            </div>
            <div class="service">
              {/* <img src="business-payments.png" alt="Business Payments Icon" class="service-icon"> */}
              <h3 class="service-title">Business Payments</h3>
              <p class="service-description">Streamline your international business payments and increase efficiency.</p>
            </div>
            <div class="service">
              {/* <img src="payment-tracking.png" alt="Payment Tracking Icon" class="service-icon"> */}
              <h3 class="service-title">Real-time Payment Tracking</h3>
              <p class="service-description">Track your payments in real-time and gain full visibility of your transactions.</p>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" class="contact-section">
        <div class="contact-content">
          <h2 class="contact-title">Contact Us</h2>
          <form class="contact-form">
            <div class="form-group">
              <label for="name">Name</label>
              <input type="text" id="name" name="name" placeholder="Enter your name"/>
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Enter your email"/>
            </div>
            <div class="form-group">
              <label for="message">Message</label>
              <textarea id="message" name="message" placeholder="Enter your message"></textarea>
            </div>
            <button type="submit" class="submit-btn">Submit</button>
          </form>
        </div>
      </section>
    </Layout>
  )
}

export default home