# 🎬 MCTS (Movies, Celebrities and TV Shows)
### A React-based application that allows users to explore various movies, celebrities and TV shows. Users can register, log in, browse featured content, create watchlists, add reviews and more.
### Deployed working version - https://mcts-firebase-project.web.app/

## ✨ Features
### 🔐 Authentication
- **Register**: Users can register, providing First Name, Last Name, Email, Password and Confirm Password - error messages are displayed if the values are not in the correct format.
- **Login**: Users can log in to their account after it has been created.
- **Logout**: Users can log out of their accounts after they have been logged in.

**Register:**
![image](https://github.com/user-attachments/assets/e39f35d6-89c4-48ec-8ddb-af792e374e00)

**Login:**
![image](https://github.com/user-attachments/assets/d6b76b04-a9a0-48af-abde-1a2fd165fbc4)



### 📌 Header
- **Navigation Buttons**:
  - **Movies**: Redirects to the `Featured Today` movies page.
  - **Top Rated**: Redirects to the `Top Rated` movies page.
  - **Celebrities**: Redirects to the `Celebrities` page.
  - **Search Bar**: Allows users to `Search` for movies.
  - **Contact Us**: Redirects to the `Contact Us` page.
  - **User Authentication Buttons**:
    - **Log In**: Displays a login button if the user is not logged in.
    - **User Dropdown Menu**: Displays a dropdown with the user's profile image if logged in, which includes links to:
      - **Profile Details**: Redirects to profile details page.
      - **Watchlist**: Redirects to user's watchlist page.
      - **Log Out**: Allows users to log out.

**Header when not logged in:**
![image](https://github.com/user-attachments/assets/135ed648-5d27-47cb-91fc-5469dae4a66e)

**Header when logged in:**
![image](https://github.com/user-attachments/assets/50fc4bf9-4cfc-457a-8523-74861c5789ba)



### 🏠 Home Page
- **Playing Now**: See the first 15 movies that are currently playing in cinemas.
- **Watchlist**: See the first 15 (or less) movies in your watchlist (if logged in).
- **Featured Today**: View the first 15 movies featured today.
- **Top on MCTS This Week**: See the first 15 top movies on MCTS this week.
- **Top Rated**: Explore the first 15 top-rated movies.
- **Coming Soon**: Check out the first 15 upcoming movies.
- **Most Popular Celebrities**: Discover the first 15 most popular celebriies.

**Home Page:**
![image](https://github.com/user-attachments/assets/13c8e01a-e0ad-4dac-a804-92db9a489a67)
![image](https://github.com/user-attachments/assets/f6e6e06f-e490-4757-8420-f29a0a4e057f)
![image](https://github.com/user-attachments/assets/c8cafe26-874a-493c-a076-601cd70f99c5)
![image](https://github.com/user-attachments/assets/03b5255d-6fe0-46d9-86fb-8bbbe468e417)




### 📄 Section Pages
- **Playing Now**: See more movies that are currently playing in cinemas.
- **Wathlist**: See all movies in your watchlist (if logged in).
- **Featured Today**: View more movies featured today.
- **Top on MCTS This Week**: See more movies on MCTS this week.
- **Top Rated**: Explore more top-rated movies.
- **Coming Soon**: Check out more upcoming movies.
- **Most Popular Celebrities**: Discover more popular celebrities.

**The section name depends on the section we want to visit (see the URL):**
![image](https://github.com/user-attachments/assets/52cd1d5e-a5bb-4dfa-83bc-13cf93053e96)



### Watchlist
- Add movies to your watchlist.
- View your watchlist. If not logged in, a login button will be displayed that redirects to the login page.
- If logged in but the watchlist is empty, a `Browse Movies` button will be displayed that redirects to `Top Rated Movies` Page
- If logged in and watchlist is not empty, there will be small red buttons that allow to delete a movie from watchlist.



### 🎥 Movie Details
- View detailed information about a particular movie - genre, plot, director, writers, stars.
- Explore photos from the movie's scenes - poster images, backdrop images and some scenes.
- See the `main characters` - actors displayed with their role's name and real name.
- **Add to Watchlist**: Button displayed for loggen-in users that adds the particular movie.
- **Reviews**:
  - First two reviews are visible to all users - guests and logged-in users.
  - 'All Reviews' button that redirecs to a page displaying all reviews. (requires login)
  - 'Add' button - displays a form with Rate, Title, Review fields. (requires login)
  - 'Edit' button - allows users to edit a review. (displayed on the review card only if the user is logged in and is the author of the review)
  - 'Delete' button - allows users to delete a review. (displayed on the review card only if the user is logged in and is the author of the review)
 
**The 'Add to Watchlist' button is not displayed if the user is not logged in:**
![image](https://github.com/user-attachments/assets/69754ad2-fffc-4481-b840-8a17513e1cbc)
![image](https://github.com/user-attachments/assets/aaa102c6-e721-4c8b-b255-046fe2c16d95)

**Last two reviews for the movie:**
![image](https://github.com/user-attachments/assets/9ac6fd4d-9d24-4437-9ec3-a19e4714bf58)

**Edit review if logged in and the author is you:**
![image](https://github.com/user-attachments/assets/b1bb23b7-b3e1-4416-b782-b8e9067b189c)

**Already updated review:**
![image](https://github.com/user-attachments/assets/13b4317f-6ad3-4ab6-958e-6b580302d5b9)



### 🌟 Celebrity Details
- View detailed information about a particular celebrity - biography and movies that the person has participated in.
- See images of the person - from movies and big events for popular people.

**Celebrity Details Page:**
![image](https://github.com/user-attachments/assets/a80658c4-fd75-4595-b53e-cc095405075e)
![image](https://github.com/user-attachments/assets/865b30e4-7d82-4cd4-b148-bf65306f3dc2)



### 👩‍🚀 User Profile
- **View Profile**:
  - View other users' profiles - their profile picture, first name, last name and bio.
- **Edit Profile**:
  - If viewing your own profile, you can edit your information - profile picture, first name, last name, phone number and bio.

![image](https://github.com/user-attachments/assets/9e6e9ce8-aeb0-46a0-8d30-5998166b3b87)
![image](https://github.com/user-attachments/assets/93e4630c-7cd3-4728-94ae-f9b95321cf97)



### 📧 Contact Us
- **Send Emails**: Users can send emails by providing their name, email, subject, phone number (not required) and message.
- **Contact Information**: On the right side is displayed information about MCTS socials and location:
  - Phone number
  - Email
  - GitHub
  - LinkedIn
  - Facebook
  - Office address
- **Office Location Map**: A card is displayed showing the exact location of the office.

**Contact Us Page:**
![image](https://github.com/user-attachments/assets/d758388e-b9b3-420f-8e3e-ee047a55ee52)

**Location Map:**
![image](https://github.com/user-attachments/assets/16bce418-1e63-4ba3-9969-26f1a3279fbf)



### 🔍 404 Page
- Displayed when the user tries to access a route that doesn't exist

**404 Page:**
![image](https://github.com/user-attachments/assets/4192f646-f55f-45d4-85b3-0e3b32ba2f6f)

## 🛠 Technologies
- **JavaScript**: Core language for functionality.
- **React**: Front-end framework for building the user interface and functionality.
- **CSS**: Styling the application.
- **Cloudinary**: Storing user profile pictures.
- **Firebase** Deployment platform.
- **Formik and Yup**: Form validation.
- **mdb-react-ui-kit**: Styling input fields in login and register forms.
- **react-bootstrap**: Using carousels.
- **react-leaflet**: Integrating map.
- **TMDB API**: Extracting movies, celebrities and TV shows.

## 🧪 Data for testing purposes
- **Users**:
  - **Email:** raya@email.com; **password:** raya123!
  - **Email:** anton@email.com; **password:** anton123!
  - **Email:** slavi@email.com; **password:** slavi123!

## 🚀 Getting Started

### 📋 Prerequisites
- Node.js and npm installed.

### 🛠 Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/rayapetkova/MCTS_WebApp.git
   ```

2. Navigate to `client` folder, install dependencies and run the app:
   ```sh
   cd .\client\
   npm install
   npm run dev
   ```

3. Open new terminal and navigate to `server` folder **WITHOUT** shutting down the terminal where the app runs
   ```sh
   cd .\server\
   node .\server.js
   ```

4. Open the URL generated in the first teminal (client) and enjoy! :))

---
Thank you for using MCTS! If you have any questions or feedback, feel free to reach out!






