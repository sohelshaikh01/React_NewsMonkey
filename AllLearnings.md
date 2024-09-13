# React Daily Learnings and Code Changes

## 1. Fetching News by Categories
- Create different categories.
- Add category and country as props for the API, set PropTypes accordingly.
- Update navigation with category links.

## 2. React Router Setup
- Install `react-router-dom`: `npm i react-router-dom`.
- Import `BrowserRouter`, `Routes`, and `Route` in `index.js`.
- Wrap `<App />` in `<BrowserRouter />` in `index.js`.
- Set up routes in `App.js`.
- Use `<Link>` from `react-router-dom` for navigation instead of `<a>`.
- Assign unique keys to routes for proper remounting.

## 3. Adding Time, Author, and Source to News
- Destructure and pass author, time, and source as props.
- Add a `<p>` tag for time, author, and source in the news card.
- Use z-index for source placement.

## 4. Refactoring News Component
- Use an update function instead of refetching data each time.
- Implement "Previous" and "Next" buttons using the function to update `pageNo`.

## 5. React Component LifeCycle
- Use `document.title` for the category and headline.
- Lifecycle events: Render > Mounting > Update > Unmount.

## 6. Adding Infinite Scroll
- Replace pagination with infinite scroll.
- Use `react-infinite-scroll-component`.
- Fetch and append data while scrolling, set up a spinner for loading.

## 7. Top Loading Bar
- Install `react-top-loading-bar`: `npm i react-top-loading-bar`.
- Add to `App.js`, set up progress with `setProgress` function.

## 8. Hiding API Key
- Store API key in `.env.local` using `REACT_APP_NEWS_API`.
- Access it with `process.env.REACT_APP_NEWS_API`.

## 9. Introduction to React Hooks
- `useState`: For managing state in functional components.
- `useEffect`: Acts like `componentDidMount` for side effects.
- `useContext`: For avoiding prop drilling.
- `useRef`: To reference DOM elements directly.

## 10. Converting Class Components to Functional Components
- Replace `render()` with a direct `return`.
- Replace `this.props` with `props`.
- Use `useEffect` to replace `componentDidMount`.
- Convert static prop types to `Component.propTypes`.

## 11. Making Navbar Sticky
- Implement sticky behavior for the navbar.
- Update `useEffect` for document title management.
