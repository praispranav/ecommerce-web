import React from "react";
import TopNav from "../components/TopNav";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";
import { useQuery } from "../hooks/useQuery";
import HeaderNormal from "../elements/HeaderNormal";
import ImageViewer from "../components/ImageViewer";
import Content from "../components/Content";

export default function ProductDetailPage() {
  const query = useQuery();
  const productId = query.get("id");
  return (
    <div className="w-100 h-100 m-0 p-0">
      <div>
        <TopNav />
        <Header />
        <SearchBar selectedCategory={"All Categories"} queryParams={""} />
        <div className="container-fluid py-3">
          <HeaderNormal>Product Id: {productId}</HeaderNormal>
          <div className="row m-0 mt-3">
            <div className="col-5">
              <ImageViewer />
            </div>
            <div className="col-7">
              <Content />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
