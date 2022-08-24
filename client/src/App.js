import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Fragment } from 'react';
import { publicRoutes } from './routes/routes';

import DefaultLayout from './layouts/DefaultLayout';
import HeaderOnly from './layouts/HeaderOnly';

function App() {
  return (
    <div>
      <Router>
      <div>
        <Routes>
          { publicRoutes.map( (route, index) => {
            let Layout
            const Page = route.component 
            switch(route.layout){
              case HeaderOnly:
                Layout = route.layout
                break
              default:
                  Layout = DefaultLayout
            }
              return <Route key={index} path={route.path} element={<Layout><Page /></Layout>} />

          })}
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
