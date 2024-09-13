# HackerNews Top Stories

This is a Next.js application that displays the top stories from HackerNews and allows users to submit feedback.

## Features
- Fetches top stories from the HackerNews API.
- Displays details of each story on a separate page.
- Contains a feedback form with validation.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/twoj_nazwa_uzytkownika/hackernews-top-stories.git

2. Navigate to the project directory:
   ```bash
   cd hackernews-top-stories
   
3. Install dependencies:
   ```bash
   npm install

4. Run the development server:
   ```bash
   npm run dev

5. Open the application in your browser:
   ```bash
   http://localhost:3000

## Feedback Form
The feedback form collects name, email, and feedback.
Form validation ensures all fields are filled out and the email is in the correct format.
Upon submission, the form clears, and data is logged to the server-side console.

## Requirements
- Node.js
- npm
