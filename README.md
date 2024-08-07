# 🎬 MCTS (Movies, Celebrities and TV Shows)
### A React-based application that allows users to explore various movies, celebrities and TV shows. Users can register, log in, browse featured content, create watchlists, add reviews and more.
### Deployed working version - https://mcts-firebase-project.web.app/
### Recommended resolution on computer: 1920x1080
### Recommended resolution on phone: <600px

## ✨ Features
### 🔐 Authentication
- **Register**: Users can register, providing First Name, Last Name, Email, Password and Confirm Password - error messages are displayed if the values are not in the correct format.
- **Login**: Users can log in to their account after it has been created.
- **Logout**: Users can log out of their accounts after they have been logged in.

**Register:**
![image](https://github.com/user-attachments/assets/8cfcc77c-f0c3-48d2-b9ae-6859fd924bc0)


**Login:**
![image](https://github.com/user-attachments/assets/b3c2d7cd-dfe6-4389-ade0-3439325ef508)




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
![image](https://github.com/user-attachments/assets/87aea10c-3dac-4bbd-b4a0-00e9ab8b731b)


**Header when logged in:**
![image](https://github.com/user-attachments/assets/af2df3c4-3b62-46a0-9b71-0e162c0743a7)




### 🏠 Home Page
- **Playing Now**: See the first 15 movies that are currently playing in cinemas.
- **Watchlist**: See the first 15 (or less) movies in your watchlist (if logged in).
- **Featured Today**: View the first 15 movies featured today.
- **Top on MCTS This Week**: See the first 15 top movies on MCTS this week.
- **Top Rated**: Explore the first 15 top-rated movies.
- **Coming Soon**: Check out the first 15 upcoming movies.
- **Most Popular Celebrities**: Discover the first 15 most popular celebriies.

**Home Page:**
![image](https://github.com/user-attachments/assets/01d63cf1-917c-4c8c-93c3-3a98ca3afc94)
![image](https://github.com/user-attachments/assets/98d5fd9b-b2fb-40bd-a67e-8ff5067df98e)
![image](https://github.com/user-attachments/assets/293186ae-63d0-4731-aee4-db55284d4496)
![image](https://github.com/user-attachments/assets/278176d8-5856-4619-8302-8b859d930351)








### 📄 Section Pages
- **Playing Now**: See more movies that are currently playing in cinemas.
- **Wathlist**: See all movies in your watchlist (if logged in).
- **Featured Today**: View more movies featured today.
- **Top on MCTS This Week**: See more movies on MCTS this week.
- **Top Rated**: Explore more top-rated movies.
- **Coming Soon**: Check out more upcoming movies.
- **Most Popular Celebrities**: Discover more popular celebrities.

**The section name depends on the section we want to visit (see the URL):**
![image](https://github.com/user-attachments/assets/84db1650-fa8c-45c7-8f67-98b39a44cb1e)




### 🎫 Watchlist
- Add movies to your watchlist.
- View your watchlist. If not logged in, a login button will be displayed that redirects to the login page.
- If logged in but the watchlist is empty, a `Browse Movies` button will be displayed that redirects to `Top Rated Movies` Page
- If logged in and watchlist is not empty, there will be small red buttons that allow to delete a movie from watchlist.

**Watchlist if not logged in:**
![image](https://github.com/user-attachments/assets/54a79110-a7c9-47d9-8629-d6da28d12cb8)

**Watchlist if logged in, but watchlist is empty:**
![image](https://github.com/user-attachments/assets/598d42dd-f1ac-42cc-b79b-b64c29fcecc2)

**Watchlist if logged in and watchlist is not empty:**
![image](https://github.com/user-attachments/assets/70f527e9-a910-40e6-b62d-67f12c3ac568)






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
  - 'Like' button - allows users to like a review. The number of likes for a review is displayed. (if a user tries to like a review and he is not logged in, he will be redirected to login page)
 
**The 'Add to Watchlist' button is not displayed if the user is not logged in:**
**When not logged in:**
![image](https://github.com/user-attachments/assets/aa0a80f3-7eaf-407e-b093-7ccf33db4868)

**When logged in and the movie is not added to watchlist:**
![image](https://github.com/user-attachments/assets/8a5a7a26-60e9-4514-bf57-ef3fc8c77ade)

**When logged in and the movie is added to watchlist:**
![image](https://github.com/user-attachments/assets/e62f5265-74e0-4491-b74c-4fb2a0898a44)
![image](https://github.com/user-attachments/assets/7905d404-5fa3-4e18-a555-397815f40359)



**Last two added reviews for the movie:**
![image](https://github.com/user-attachments/assets/8494fe74-7f5d-4828-beb0-4d43df1b125f)



**Edit review if logged in and the author is you (the last sentence is marked just for the screenshot - this is the edit done to the review \removed sentence\):**
![image](https://github.com/user-attachments/assets/a6dedc5e-5e5e-49a9-932e-5f376e0a8a59)



**Already updated review:**
![image](https://github.com/user-attachments/assets/bcd3e133-1a54-4532-8bcf-53563968a4c1)



### 📝 All Movie Reviews
- A page which displays all the reviews for a particular movie:
![image](https://github.com/user-attachments/assets/b9b71cbd-19d3-4c3a-819a-f463bcd5ae2d)
![image](https://github.com/user-attachments/assets/793c0edc-1774-41f5-850f-29831f74192c)




### Favourite Reviews
- A page which displays all the reviews that your user has likes:
![image](https://github.com/user-attachments/assets/abe6d149-65dc-4e71-ac9d-791a456396d5)



### 🌟 Celebrity Details
- View detailed information about a particular celebrity - biography and movies that the person has participated in.
- See images of the person - from movies and big events for popular people.

**Celebrity Details Page:**
![image](https://github.com/user-attachments/assets/420eb772-b597-41a7-8c7b-d59b45c3d5a7)
![image](https://github.com/user-attachments/assets/64ade853-c558-4ee4-a357-4f7987d22ae6)




### 👩‍🚀 User Profile
- **View Profile**:
  - View other users' profiles - their profile picture, first name, last name and bio.
- **Edit Profile**:
  - If viewing your own profile, you can edit your information - profile picture, first name, last name, phone number and bio.

**View other person's profile page:**
![image](https://github.com/user-attachments/assets/bf87c417-ecbe-4292-9df2-ea3795be7dda)

**View your own profile page:**
![image](https://github.com/user-attachments/assets/df08c6f4-47c1-4a8a-a26f-a6b7205294ba)




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
![image](https://github.com/user-attachments/assets/8465455c-abb0-4267-8ec1-0ee2b14b6d20)


**Location Map:**
![image](https://github.com/user-attachments/assets/92a8ab55-701a-4e04-a2aa-999b360940b3)




### 🔍 404 Page
- Displayed when the user tries to access a route that doesn't exist

**404 Page:**
![image](https://github.com/user-attachments/assets/3f1413db-b3b6-4b10-b377-4354c52e2d4b)


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
- **emailjs-com**: Sending emails and receiving emails.
- **Vitest: Unit testing.**
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

3. Open new terminal and navigate to `server` folder **WITHOUT** shutting down the terminal where the app (the client) is running:
   ```sh
   cd .\server\
   node .\server.js
   ```

4. Open the URL generated in the first teminal (client) and enjoy! :))

---
Thank you for using MCTS! If you have any questions or feedback, feel free to reach out!






