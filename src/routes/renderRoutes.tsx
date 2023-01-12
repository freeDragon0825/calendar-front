import React, { Fragment } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import { IRoute } from 'types';

export default function renderRoutes(routes: IRoute[]): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route: IRoute, i: number) => {
          const Component = route.component;
          const Guard = route.guard || Fragment;
          const Layout = route.layout || Fragment;

          return (
            <Route
              key={i}
              path={route.path}
              index={route.index}
              element={
                <Guard>
                  <Layout>
                    <Component />
                  </Layout>
                </Guard>
              }
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}
