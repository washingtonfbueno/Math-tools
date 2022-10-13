import React from "react";
import { Route } from "react-router";
import { Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Area } from "./pages/Area";
import { Calculator } from "./pages/Calculator";
import { Force } from "./pages/Force";
import { Length } from "./pages/Length";
import { Volume } from "./pages/Volume";

export const App: React.FC = () => {
    return (
        <BrowserRouter>
            <div className="bg-[#151532] px-12 py-16 lg:px-0 h-screen flex justify-center">
                <div className="w-full max-w-[1000px] flex flex-col relative text-[#ffffff7f]">
                    <Navbar />

                    <div className="absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] text-[2.8rem] font-[200]">
                        <Routes>
                            <Route path="/" element={<Calculator />} />
                            <Route
                                path="/length-unit-converter"
                                element={<Length />}
                            />
                            <Route
                                path="/area-unit-converter"
                                element={<Area />}
                            />
                            <Route
                                path="/volume-unit-converter"
                                element={<Volume />}
                            />
                            <Route
                                path="/force-unit-converter"
                                element={<Force />}
                            />
                        </Routes>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
};
