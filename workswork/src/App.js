import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import {AddAdmin} from "./components/AddAdmin";
import {Home} from "./components/Home";
import {UserSignup} from "./components/UserSingup";
import {AdminChangePassword} from "./components/AdminChangePassword";
import {AddCategory} from "./components/AddCategory";
import {AdminLogin} from "./components/AdminLogin";
import {UserLogin} from "./components/UserLogin";
import {AdminHome} from "./components/AdminHome";
import {UserHome} from "./components/UserHome";
import {FreelancerSignup} from "./components/FreelancerSignup";
import {createContext ,useState} from "react";
import {FreelancerLogin} from "./components/Freelancer-Login";
import {FreelancerHome} from "./components/FreelancerHome";
import {SellerPage} from "./components/SellerPage";
import {AddWork} from "./components/AddWork";
import {WorkPage} from "./components/WorkPage";
import {UserChangePassword} from "./components/UserChangePassword";
import {UserDashboard} from "./components/UserDashboard";
import {UserJobs} from "./components/UserJobs";
import {EditUserProfile} from "./components/EditUserProfile";
import {SellerDashboard} from "./components/SellerDashboard";
import {EditSellerProfile} from "./components/EditSellerProfile";
import {SellerChangePassword} from "./components/SellerChangePassword";
import {SellerWorkPage} from "./components/SellerWorkPage";
import {SellerViewPage} from "./components/SellerViewPage";
import {WorkViewPage} from "./components/WorkViewPage";
import {SendBidPage} from "./components/SendBidPage";
import {ViewBids} from "./components/ViewBids";
import {ViewSellerApp} from "./components/ViewSellerApp";
import {About} from "./components/About";
import {Blog} from "./components/Blog";
import {ContactUs} from "./components/ContactUs";
import {Messages} from "./components/Messages";
import {SellerActiveJobs} from "./components/SellerActiveJobs";
import {AdminForgotPassword} from "./components/AdminForgotPassword";
import {UserForgotPassword} from "./components/UserForgotPassword";
import {SellerForgotPassword} from "./components/SellerForgotPassword";
import {SearchPage} from "./components/SearchPage";
// import {createContext} from "react";
export let searchContext = createContext(null);

function App() {

    const [searchData, setSearchData] = useState([]);
    return (

        <>

            <BrowserRouter>
                <searchContext.Provider value={{searchData, setSearchData}}>
                    <Routes>
                        <Route path={'/'} element={<Home/>}/>
                        <Route path={'/about'} element={<About/>}/>
                        <Route path={'/blog'} element={<Blog/>}/>
                        <Route path={'/contact-us'} element={<ContactUs/>}/>
                        <Route path={'/messages'} element={<Messages/>}/>
                        <Route path={'/search-result'} element={<SearchPage/>}/>
                        <Route path={'/add-admin'} element={<AddAdmin/>}/>
                        <Route path={'/admin-home'} element={<AdminHome/>}/>
                        <Route path={'/admin-login'} element={<AdminLogin/>}/>
                        <Route path={'/admin-forgot-pass'} element={<AdminForgotPassword/>}/>
                        <Route path={'/user-signup'} element={<UserSignup/>}/>
                        <Route path={'/user-login'} element={<UserLogin/>}/>
                        <Route path={'/user-forgot-pass'} element={<UserForgotPassword/>}/>
                        <Route path={'/user-dashboard'} element={<UserDashboard/>}/>
                        <Route path={'/user-jobs'} element={<UserJobs/>}/>
                        <Route path={'/user-home'} element={<UserHome/>}/>
                        <Route path={'/user-edit-profile'} element={<EditUserProfile/>}/>
                        <Route path={'/user-change-password'} element={<UserChangePassword/>}/>
                        <Route path={'/add-work'} element={<AddWork/>}/>
                        <Route path={'/add-category'} element={<AddCategory/>}/>
                        <Route path={'/admin-change-password'} element={<AdminChangePassword/>}/>
                        <Route path={'/freelance-signup'} element={<FreelancerSignup/>}/>
                        <Route path={'/freelance-login'} element={<FreelancerLogin/>}/>
                        <Route path={'/seller-forgot-pass'} element={<SellerForgotPassword/>}/>
                        <Route path={'/seller-edit-profile'} element={<EditSellerProfile/>}/>
                        <Route path={'/seller-work-page'} element={<SellerWorkPage/>}/>
                        <Route path={'/seller-view-page/:id'} element={<SellerViewPage/>}/>
                        <Route path={'/seller-change-password'} element={<SellerChangePassword/>}/>
                        <Route path={'/freelance-home'} element={<FreelancerHome/>}/>
                        <Route path={'/seller-page'} element={<SellerPage/>}/>
                        <Route path={'/seller-dashboard'} element={<SellerDashboard/>}/>
                        <Route path={'/work-page'} element={<WorkPage/>}/>
                        <Route path={'/work-view-page/:id'} element={<WorkViewPage/>}/>
                        <Route path={'/send-bid-page/:id'} element={<SendBidPage/>}/>
                        <Route path={'/view-bids'} element={<ViewBids/>}/>
                        <Route path={'/seller-applications'} element={<ViewSellerApp/>}/>
                        <Route path={'/seller-active-jobs'} element={<SellerActiveJobs/>}/>
                    </Routes>
                </searchContext.Provider>
            </BrowserRouter>

        </>

    );
}

export default App;
