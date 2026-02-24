# 🎬 React Movie Search App

## 📌 Overview

This project is a React application that allows users to search for movies using the OMDB API. It demonstrates core React concepts including:

* Component structure
* Lifting state
* Controlled forms
* The `useState` hook
* The `useEffect` hook
* Making external API requests using `fetch`
* Handling asynchronous logic with `async/await`

The application consists of three main components:

* `App`
* `Form`
* `MovieDisplay`

---

## 🎯 Learning Objectives Demonstrated

This lab demonstrates the ability to:

* Use `create-react-app` to initialize a React project
* Manage state using `useState`
* Trigger side effects using `useEffect`
* Implement the lifting state pattern
* Bind input fields using controlled components
* Make external API requests
* Handle asynchronous operations safely
* Prevent infinite render loops
* Safely render conditional data

---

## 🧠 Application Architecture

```
App
 ├── Form (handles user input)
 └── MovieDisplay (renders movie data)
```

### Data Flow (Important Concept)

React follows one-way data flow:

* `App` holds the movie data in state.
* `Form` sends the search term upward via props.
* `App` fetches the movie data.
* `App` passes movie data downward to `MovieDisplay`.

This pattern is called **lifting state**.

---

## 🔌 External API Integration

This application uses the OMDB API:

```
http://www.omdbapi.com/
```

### API Request Structure

```
http://www.omdbapi.com/?apikey=YOUR_KEY&t=movieTitle
```

* `apikey` → API authentication key
* `t` → title of the movie

Example request:

```
http://www.omdbapi.com/?apikey=98e3fb1f&t=godfather
```

### API Process in the App

1. User submits a movie title.
2. `getMovie(searchTerm)` is called.
3. `fetch()` sends a request to OMDB.
4. The response is returned as JSON.
5. State is updated using `setMovie(data)`.
6. React re-renders the component tree.
7. `MovieDisplay` receives updated props and renders the movie.

---

## ⚙️ Key React Concepts Used

### 1️⃣ useState

Used in:

* `App` → stores movie data
* `Form` → stores form input

Example:

```js
const [movie, setMovie] = useState(null);
```

---

### 2️⃣ useEffect

Used to load a default movie when the app first renders:

```js
useEffect(() => {
  getMovie("Clueless");
}, []);
```

The empty dependency array ensures the effect runs only once.

Without this dependency array, the app would enter an infinite fetch loop.

---

### 3️⃣ Controlled Form Pattern

The input field is controlled by React state:

```js
<input
  type="text"
  name="searchterm"
  value={formData.searchterm}
  onChange={handleChange}
/>
```

This ensures React is always aware of the input value.

---

### 4️⃣ Conditional Rendering

Since the movie state starts as `null`, we must prevent rendering before data exists:

```js
return movie ? loaded() : loading();
```

This prevents errors like:

```
Cannot read property 'Title' of null
```

---

## 🚨 Errors Encountered and Resolved

### ❌ 1. Infinite Fetch Loop

Problem:
Calling `getMovie()` directly inside the component body caused:

* Fetch
* setState
* Re-render
* Fetch again
* Infinite loop

Solution:
Wrap initial fetch inside `useEffect` with empty dependency array.

---

### ❌ 2. Cannot Read Property of Null

Problem:
Attempting to access `movie.Title` when `movie` was still `null`.

Solution:
Use conditional rendering:

```js
return movie ? loaded() : loading();
```

---

### ❌ 3. API Key / Invalid Movie Errors

Sometimes the API returns:

```json
{ "Response": "False", "Error": "Movie not found!" }
```

This requires defensive coding and error handling.

---

## 🔐 Async/Await & Fetch Explained

The `getMovie` function:

```js
const getMovie = async (searchTerm) => {
  try {
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
    );
    const data = await response.json();
    setMovie(data);
  } catch (error) {
    console.error(error);
  }
};
```

### Why async/await?

* `fetch()` is asynchronous.
* `await` pauses execution until the promise resolves.
* `response.json()` converts JSON text into a JavaScript object.
* `setMovie(data)` triggers a React re-render.

---

## 🏗 Final File Structure

```
src
 ├── App.js
 ├── components
 │     ├── Form.js
 │     └── MovieDisplay.js
 ├── App.css
```

---

## 🚀 Features

* Search for any movie by title
* Displays:

  * Title
  * Year
  * Genre
  * Poster
* Default movie loads on page refresh
* Error-safe rendering
* Clean component separation

---

## 🔮 Possible Improvements

* Add loading spinner state
* Add error message UI
* Handle "Movie not found" explicitly
* Show Plot, Actors, Ratings
* Style with CSS framework
* Add random movie on load
* Deploy to Netlify or Vercel

---

## 📚 Reflection

This project reinforced:

* The importance of state placement
* How data flows in React
* How to manage side effects safely
* How to debug fetch and rendering errors
* Why conditional rendering is critical
* The relationship between asynchronous code and UI updates

This lab represents a foundational React pattern used in real-world applications.

---

