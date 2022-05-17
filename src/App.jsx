import { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Loading from './views/Loading/Loading.view'

const InitView = lazy(() => import('./views/Init/Init.view'))

function App() {

  return (
    <Router>
      <Suspense fallback={ <Loading /> }>
        <Routes>
          <Route path='/' element={ <InitView /> }/>
          <Route path='*' element={ <h1>404</h1> }/>
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
