import React from "react";
import Pagebanner from "../components/PageBanner";
import ServiceCategory from "../components/services/ServiceCategory";
import ServiceProcess from "../components/services/ServiceProcess";
import RequestQuote from "../components/services/RequestQuote";
const Services = () => {
  return (
    <div>
      <Pagebanner
        title="Services"
        breadcrumb="Home / About us "
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZGf-GlCJSdr89-hfxAsCUr2gTTbcO2oO479A5d6iZ_surojWxDLNkWdSk&s=10"
      />

      <ServiceCategory />
      <ServiceProcess />
      <RequestQuote />
    </div>
  );
};

export default Services;
