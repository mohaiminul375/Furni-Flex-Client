# Furni-Flex

# Live URL: https://furni-flex-375.web.app

- Full Stack Developer Intern job task from IBOS

# Run the Project Locally

1. **Clone the Repository**:

   ```sh
   git clone https://github.com/mohaiminul375/Furni-Flex-Client
   cd Furni-Flex-Client
   ```

2. **Install Dependencies**:

   ```sh
   npm install
   ```

3. **Set Up Environment Variables**: Create a `.env.local` file in the root directory and add the necessary environment variables. (**Important!**)

4. **Run the Application**:

   ```sh
   npm run dev -- --host
   ```

5. **Access the Site**: Open your browser and go to `http://localhost:5173/` or `http://192.168.1.12:5173/` from other devices on the same network to view the application.

# website features

This is an E-commerce WebApp using React and Context API.

## Features

- **User Authentication**:

  - Users can sign up or log in to access the full functionality of the app.
  - The authentication state is globally managed using **Context API**, ensuring users remain logged in until they log out.

- **Product Listing**:
- The application fetches product data from an API and displays it dynamically on the product listing page.
- Users can browse through available products, with product data loaded and managed via Context API.

- **Shopping Cart Functionality**:
  - Users can add or remove products to/from the shopping cart dynamically.
  - The cart state is globally managed using the **Context API**, ensuring real-time updates across the application.
  - Product data is fetched from an API, and the cart state reflects changes instantly when products are added or removed.

- **Cart Management**:
  - Users can adjust the quantity of items in the cart.
  - The total price is automatically updated as items are added or removed.

# npm and package

- vite
- react
- react-router dom
- tailwind css
- daisy ui
- react icon
- react-spinners
- Axios
- tan stack query
- react hot toast

# Back End
[GitHub Backend](https://github.com/mohaiminul375/Furni-Flex-Server)
- Node.js
- Express.js
- MongoDB
# Base API URL 
  - `https://furni-flex-server-rho.vercel.app/furniture`
