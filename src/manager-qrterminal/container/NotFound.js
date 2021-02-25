
const NotFound = props => {
  sessionStorage.clear();
  return (
      <div>
          <h1>Page not found</h1>
          <p>Look for something else</p>
      </div>
  )
}

export default NotFound