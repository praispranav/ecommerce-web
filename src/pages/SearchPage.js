import React from "react"
import TopNav from "../components/TopNav"
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer"
import { useQuery } from "../hooks/useQuery"
import { Categories } from '../config/Categories'

const filterCategoriesName = (query) => {
    const sort = Categories.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
    const result = sort.filter(category => category.toLowerCase().includes(query))
    return result[0] ? result[0] : 'All Categories'
}

export default function SearchPage() {
    const query = useQuery()
    const category = filterCategoriesName(query.get('category'))
    const queryParams = filterCategoriesName(query.get('product'))
    return (
        <div className="w-100 h-100 m-0 p-0">
            <div>
                <TopNav />
                <Header />
                <SearchBar selectedCategory={category} queryParams={queryParams} />
                <h3>
                    {category}
                </h3>
                <Footer />
            </div>
        </div>
    )
}