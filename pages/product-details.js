import React from 'react'
import { Preloader, Placeholder } from 'react-preloading-screen'
import Header from '../components/Layouts/Header'
import Footer from '../components/Layouts/Footer'
import GoTop from '../components/Layouts/GoTop'
import PageTitle from '../components/product-details/PageTitle';
import ProductContent from '../components/product-details/ProductContent';

class Products extends React.Component {
    render() {
        return (
            <Preloader>
                <Placeholder>
                    <div className="preloader">
                        <div className="spinner"></div>
                    </div>
                </Placeholder>
                <Header />
                <PageTitle />
                <ProductContent />
                
                <Footer />
                <GoTop scrollStepInPx="50" delayInMs="16.66" />
            </Preloader>
        )
    }
}

export default Products