import React from "react";
import { Route, Routes } from "react-router-dom";

import { privateRoutes, publicRoutes } from "@pages/routes";
import NotFound from "@pages/NotFound";
import RequireAuth from "@hoc/RequireAuth";
import DocumentMeta from "@components/DocumentMeta";

const RoutesRenderer = () => {
  return (
    <Routes>
      {publicRoutes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={
            <DocumentMeta title={route.title}>
              <route.component />
            </DocumentMeta>
          }
        />
      ))}
      <Route element={<RequireAuth />}>
        {privateRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={
              <DocumentMeta title={route.title}>
                <route.component />
              </DocumentMeta>
            }
          />
        ))}
      </Route>
      <Route
        path="*"
        element={
          <DocumentMeta title="Not found">
            <NotFound />
          </DocumentMeta>
        }
      />
    </Routes>
  );
};
export default React.memo(RoutesRenderer);
