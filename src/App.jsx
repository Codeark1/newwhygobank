
import Home from './Features/Pages/Home'
import Login from './Features/Pages/Login'
import { Routes,Route } from 'react-router-dom'
// import { QueryClient, QueryClientProvider } from 'react-query'
import SignUp  from './Features/Pages/SignUp'
import Dashboard from './Features/Pages/Dashboard'

const App = () => {
  // const queryClient = new QueryClient()
  return (
   
      // <QueryClientProvider client={queryClient}>
      <Routes>
        <Route element={  <Home/>} path='/'/>
        <Route element={  <Login/>} path='/login'/>
        <Route element={  <SignUp/>} path='/sign-up'/>
        <Route element={  <Dashboard/>} path='/Dashboard'/>
      </Routes>
      // {/* </QueryClientProvider> */}
 
  )
}

export default App
