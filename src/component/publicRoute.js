
function PublicRoute({children,...routeProps}) {

  return (
    <Route {...routeProps}>
      {children}
    </Route>
  )
}

export default PublicRoute;