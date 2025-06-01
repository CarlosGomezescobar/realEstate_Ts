import React, { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Import pages
const HomePage = lazy(() => import('../pages/HomePage'));
const PropertiesPage = lazy(() => import('../pages/PropertiesPage'));
const PropertyDetailPage = lazy(() => import('../pages/PropertyDetailPage'));
const ContactPage = lazy(() => import('../pages/ContactPage'));
const ServicesPage = lazy(() => import('../pages/ServicesPage'));
const FAQPage = lazy(() => import('../pages/FAQPage'));
const CheckoutPage = lazy(() => import('../pages/CheckoutPage'));
const CheckoutSuccessPage = lazy(() => import('../pages/CheckoutSuccessPage'));

// Loading spinner
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-600"></div>
  </div>
);

// Create router
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/properties',
    element: <PropertiesPage />,
  },
  {
    path: '/property/:id',
    element: <PropertyDetailPage />,
  },
  {
    path: '/contact',
    element: <ContactPage />,
  },
  {
    path: '/services',
    element: <ServicesPage />,
  },
  {
    path: '/faq',
    element: <FAQPage />,
  },
  {
    path: '/checkout',
    element: <CheckoutPage />,
  },
  {
    path: '/checkout/success',
    element: <CheckoutSuccessPage />,
  },
]);

const Router: React.FC = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default Router;