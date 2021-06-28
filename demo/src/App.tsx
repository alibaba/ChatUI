import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DemoIndex from './components/DemoIndex';
import * as demos from './demo';
import { navConfig } from './navConfig';
import { toPascalCase } from './utils';

const routes = navConfig.reduce((prev: any, current) => [...prev, ...current.list], []);

export default function App() {
  return (
    <Router>
      <Switch>
        {routes.map((route: any) => {
          const Comp = (demos as any)[toPascalCase(route.code)];
          return Comp ? (
            <Route path={`/${route.code}`} key={route.code}>
              <Comp />
            </Route>
          ) : null;
        })}
        <Route path="/">
          <DemoIndex />
        </Route>
      </Switch>
    </Router>
  );
}
