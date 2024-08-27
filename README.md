# Simple Form Website

## Overview

The Simple Form Website is a web application designed to demonstrate various functionalities related to form handling, validation, and user interaction. The site features several pages including a registration form, a function chooser, an array manipulation page, and a form summary page. This project showcases form validation, responsive design, and dynamic navigation using React.

## Tech Stack

- **React**: A JavaScript library for building user interfaces. React helps in creating reusable components and managing the state of the application.
- **JavaScript**: The programming language used to create interactive and dynamic features on the website.
- **CSS**: Used for styling and creating a visually appealing design. The application uses responsive design principles to ensure compatibility across various devices.
- **Vercel**: Deployment platform used to host and deploy the web application. Vercel provides automated deployment and continuous integration features.

## Features

- **Registration Form**: Allows users to input personal details with validation for fields like name, email, phone, password, address, and date of birth.
- **Array Manipulation**: Provides a form to input and manipulate arrays with basic operations.
- **Choose Function**: Lets users select a function to perform on an array.
- **Form Summary**: Displays a summary of the submitted registration form.

## Designing for Consistency and Usability Across Devices

Follow these key principles:

1. **Responsive Design**: Use CSS media queries to adapt our layout based on different screen sizes. This includes adjusting font sizes, padding, and element alignment to ensure readability and usability on all devices.

2. **Flexible Grid System**: Our layout utilizes a flexible grid system that adjusts the arrangement of content dynamically. This ensures that the website looks good whether viewed on a large desktop screen or a small smartphone.

3. **Viewport Meta Tag**: We include the viewport meta tag in our HTML to control the layout on mobile browsers, making sure that the site scales correctly and maintains a user-friendly interface.

By following these practices, we achieve a layout that is both visually appealing and functional, regardless of the device used.

## Setup and Installation

### Prerequisites

- Node.js and npm (Node Package Manager) installed on your machine.

## Deployment

The website is deployed using Vercel. To deploy:

1. **Connect to Vercel:**
   - Create a new project on Vercel and connect it to your GitHub repository.

2. **Configure Build Settings:**
   - Vercel will automatically detect the project settings. Ensure that `npm run build` is set as the build command.

3. **Deploy:**
   - Click "Deploy" and Vercel will handle the build and deployment process.

4. **Access Your Deployment:**
   - Once deployed, your site will be accessible via a URL provided by Vercel.

### Installation Steps

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/your-username/simple-form-website.git
   cd simple-form-website```

2. **Install Dependencies:**

```npm install```

3. **Run the Development Server**
```npm start```

The application will be available at http://localhost:3000.

