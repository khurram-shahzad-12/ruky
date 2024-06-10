"use client"
import React, { useState } from "react";
import ProductCard from "./ProductCard";

const PerfumeTab = () => {
  const [open, setOpen] = useState("All");

  const handleTabOpen = (tabCategory) => {
    setOpen(tabCategory);
  };

  return (
    <>
      <section className="py-20 lg:py-[50px] flex justify-center">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mb-14 w-full">
                <div className="flex flex-col flex-wrap rounded-lg border border-[#E4E4E4] px-4 py-3 dark:border-dark-3 sm:flex-row justify-center">
                  <a
                    onClick={() => handleTabOpen("All")}
                    className={`cursor-pointer rounded-md px-4 py-3 text-sm font-medium md:text-base lg:px-6 ${
                      open === "All"
                        ? "bg-primary text-white"
                        : "text-body-color hover:bg-primary hover:text-white dark:text-dark-6 dark:hover:text-white"
                    }`}
                  >
                    All
                  </a>
                  <a
                    onClick={() => handleTabOpen("Male")}
                    className={`cursor-pointer rounded-md px-4 py-3 text-sm font-medium md:text-base lg:px-6 ${
                      open === "Male"
                        ? "bg-primary text-white"
                        : "text-body-color hover:bg-primary hover:text-white dark:text-dark-6 dark:hover:text-white"
                    }`}
                  >
                    Male
                  </a>
                  <a
                    onClick={() => handleTabOpen("Female")}
                    className={`cursor-pointer rounded-md px-4 py-3 text-sm font-medium md:text-base lg:px-6 ${
                      open === "Female"
                        ? "bg-primary text-white"
                        : "text-body-color hover:bg-primary hover:text-white dark:text-dark-6 dark:hover:text-white"
                    }`}
                  >
                    Female
                  </a>
                  <a
                    onClick={() => handleTabOpen("UniSex")}
                    className={`cursor-pointer rounded-md px-4 py-3 text-sm font-medium md:text-base lg:px-6 ${
                      open === "UniSex"
                        ? "bg-primary text-white"
                        : "text-body-color hover:bg-primary hover:text-white dark:text-dark-6 dark:hover:text-white"
                    }`}
                  >
                    UniSex
                  </a>
                </div>
                <ProductCard
                 tabCategory="All"
                  open={open}
                />
                <ProductCard
                  tabCategory="Male"
                  open={open}
                />
                <ProductCard
                 tabCategory="Female"
                  open={open}
                />
                <ProductCard
                  tabCategory="UniSex"
                  open={open}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PerfumeTab;

