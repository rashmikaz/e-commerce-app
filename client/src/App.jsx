import { Route, Routes } from "react-router-dom"
import AuthLayout from "./components/auth/layout"
import AuthLogin from "./pages/auth/login"
import AuthRegister from "./pages/auth/register"
import AdminLayout from "./components/admin-view/layout";
import AdminDashboard from "./pages/admin-view/dashboard";
import AdminProducts from "./pages/admin-view/products";
import AdminOrders from "./pages/admin-view/orders";
import AdminFeatures from "./pages/admin-view/features";
import CheckAuth from "./components/common/check-auth";
import UnauthPage from "./pages/unauth-page";


function App() {

  const isAuthenticated = false;
  const  user = null;
 

  return (
 <div className="flex flex-col overflow-hidden bg-white">
  <h1>header components</h1>
  <Routes>
    <Route path="/auth" element={
      <CheckAuth isAuthenticated={isAuthenticated} user={user}>
        <AuthLayout/>
      </CheckAuth>
      }>
      
    <Route path="login" element={<AuthLogin/>}/>
    <Route path="register" element={<AuthRegister/>}/>
    </Route>

  
    <Route path="/admin" element={
        <CheckAuth isAuthenticated={isAuthenticated} user={user}>
          <AdminLayout />
        </CheckAuth>
          }>

        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="products" element={<AdminProducts />} />
        <Route path="orders" element={<AdminOrders />} />
        <Route path="features" element={<AdminFeatures />} />

    </Route>

    {/* <Route
          path="/shop"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <ShoppingLayout />
            </CheckAuth>
          }
        >
          <Route path="home" element={<ShoppingHome />} />
          <Route path="listing" element={<ShoppingListing />} />
          <Route path="checkout" element={<ShoppingCheckout />} />
          <Route path="account" element={<ShoppingAccount />} />
          <Route path="paypal-return" element={<PaypalReturnPage />} />
          <Route path="payment-success" element={<PaymentSuccessPage />} />
          <Route path="search" element={<SearchProducts />} />
    </Route> */}
        <Route path="/unauth-page" element={<UnauthPage />} />
        {/* <Route path="*" element={<NotFound />} /> */}

  </Routes>
      

 </div>
  )
}

export default App
