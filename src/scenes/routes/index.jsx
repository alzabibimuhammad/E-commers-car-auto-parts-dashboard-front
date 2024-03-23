import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../dashboard'
import BannedCustomers from '../banned customers'
import Sellers from '../sellers'
import Customer from '../customers'
import BannedSellers from '../banned sellers'
import Form from '../form'
import Bar from '../bar'
import Pie from '../pie'
import Categories from '../categories'
import RequestedSeller from '../requested sellers'
import HiddenCategories from '../hidden categories'
import ProposedCategories from '../proposed categories'
import ProposedCar from '../proposed car'
import Cars from '../cars'
import ProposedCarType from '../proposed car type'
import CarType from '../car type'
import Parts from '../parts'
import Sales from '../sales'
import AddCarType from '../form add car type'
import AddCarModel from '../form add car model'
import ContactUS from '../contact us'
import Report from '../report'
import EditCategory from '../editCategory'
import UserProfile from '../userProfile/userProfile'
import EditProfile from '../Edit Profile/editProfile'
import AddAdmin from '../Add Admin'
import RemoveAdmin from '../Remove Admin'
import Users_backup from '../users backup'
import Calendar from '../calendar'

export default function Routers() {
  return (
    <Routes>
    <Route path="/" element={<Dashboard />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/banned customers" element={<BannedCustomers />} />
    <Route path="/sellers" element={<Sellers />} />
    <Route path="/customers" element={<Customer />} />
    <Route path="/banned sellers" element={<BannedSellers />} />
    <Route path="/form" element={<Form />} />
    <Route path="/bar" element={<Bar />} />
    <Route path="/pie" element={<Pie />} />
    <Route path="/categories" element={<Categories />} />
    <Route path="/RequestedSeller" element={<RequestedSeller />} />
    <Route path="/HiddenCategories" element={<HiddenCategories />} />
    <Route path="/ProposedCategories" element={<ProposedCategories />} />
    <Route path="/ProposedCar" element={<ProposedCar />} />
    <Route path="/Cars" element={<Cars />} />
    <Route path="/ProposedCarType" element={<ProposedCarType />} />
    <Route path="/CarType" element={<CarType />} />
    <Route path="/Parts" element={<Parts />} />
    <Route path="/Sales" element={<Sales />} />
    <Route path="/AddCarType" element={<AddCarType />} />
    <Route path="/AddCarModel" element={<AddCarModel />} />
    <Route path="/ContactUS" element={<ContactUS />} />
    <Route path="/Report" element={<Report />} />
    <Route path="/editCategory" element={<EditCategory />} />
    <Route path="/UserProfile" element={<UserProfile />} />
    <Route path="/EditProfile" element={<EditProfile />} />
    <Route path="/AddAdmin" element={<AddAdmin />} />
    <Route path="/RemoveAdmin" element={<RemoveAdmin />} />
    <Route path="/users backup" element={<Users_backup />} />




    {/* <Route path="/line" element={<Line />} /> */}
    {/* <Route path="/faq" element={<FAQ />} /> */}
    {/* <Route path="/geography" element={<Geography />} /> */}
    <Route path="/calendar" element={<Calendar />} />
  </Routes>
  )
}
