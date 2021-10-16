import React from "react";
import TopNav from "../components/TopNav";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import Carousel from "../components/Carousel";
import Features from "../components/Features";
import ProductSuggestion1 from "../components/ProductSuggestion1";
import FeaturedProducts from "../components/FeaturedProducts";
import HotDeals from "../components/HotDeals";
import Footer from "../components/Footer"
import NewArrival from "../components/NewArrival";

export default function HomePage(){
    return (
        <div className="w-100 h-100 m-0 p-0">
            <div>
                <TopNav />
                <Header />
                <SearchBar selectedCategory={'All Categories'} queryParams={''} />
                <Carousel />
                <Features />
                <ProductSuggestion1 />
                <FeaturedProducts /> 
                <HotDeals />
                <NewArrival />
                <Footer />
            </div>
        </div>
    )
}