import React, {Component} from 'react'

import Header from 'Components/Header'
import LandingSection from './Home/LandingComponent'
import Footer from 'Components/Footer'

import UserProfile from './Account/UserProfile'

class Home extends Component {

    
    render() {
        return(
            <div>
                <Header/>
                <LandingSection/>
                <Footer/>
            </div>
        )
    }
}

export default Home;