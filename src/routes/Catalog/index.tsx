import "./styles.css";
import HeaderClient from "../../components/HeaderClient";
import SerachBar from "../../components/SearchBar";
import CatalogCard from "../../components/CatalogCard";
import ButtonNextPage from "../../components/ButtonNextPage";

function Catalog() {
  return (
    <>
      <HeaderClient></HeaderClient>
      <section id="catalog-section" className="dsc-container">
        <SerachBar></SerachBar>

        <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">
          <CatalogCard></CatalogCard>
          <CatalogCard></CatalogCard>
          <CatalogCard></CatalogCard>
          <CatalogCard></CatalogCard>
          <CatalogCard></CatalogCard>
          <CatalogCard></CatalogCard>
        </div>

        <ButtonNextPage></ButtonNextPage>
      </section>
    </>
  );
}

export default Catalog;
