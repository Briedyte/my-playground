import React from "react";
import { Route, Routes } from "react-router-dom";
import RequireAuth from "../../hoc/RequireAuth";

import { publicRoutes, privateRoutes } from "../../routes/pages/routes";
import NotFound from "../../routes/pages/NotFound";

const RoutesRenderer = () => {
  return (
    <Routes>
      {publicRoutes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={<route.component />}
        />
      ))}
      <Route element={<RequireAuth />}>
        {privateRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<route.component />}
          />
        ))}
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
export default React.memo(RoutesRenderer);
