import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import { ErrorPage } from './components/ErrorPage';
import { TemplateFlow } from './features/todoFlow/TemplateFlow';
import { TodoFlow } from './features/todoFlow/TodoFlow';
import { OneTimeFlow } from './features/todoFlow/OneTimeFlow';
import { History } from './features/history/History';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "todo",
    element: <TodoFlow />,
    children: [
      {
        path: 'template',
        element: <TemplateFlow />
      },
      {
        path: 'one',
        element: <OneTimeFlow />
      }
    ]
  },
  {
    path: 'history/:type',
    element: <History />
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full">
        <div className="mx-auto max-w-3xl h-full">
          <RouterProvider router={router} />
        </div>
     </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
