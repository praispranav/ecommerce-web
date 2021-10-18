import React from "react"
import TopNav from "../components/TopNav"
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";
import { useQuery } from "../hooks/useQuery";
import SideNavFilter from "../components/SideNavFilter";
import SearchResult from "../components/SearchResult";
import { filterCategoriesName } from '../features/filterCategories'

export default function SearchPage() {
    const query = useQuery()
    const category = filterCategoriesName(query.get('category'))
    const queryParams = query.get('product')
    return (
        <div className="w-100 h-100 m-0 p-0">
            <div>
                <TopNav />
                <Header />
                <SearchBar selectedCategory={category} queryParams={queryParams} />

                    <div className="row mx-1 me-0">
                        <div className="col-2 m-0 p-0">
                            <SideNavFilter selectedCategory={category} />
                        </div>
                        <div className="col-10 m-0 p-0">
                            <SearchResult selectedCategory={category} />
                            <Footer />
                        </div>
                    </div>
            </div>
        </div>
    )
}