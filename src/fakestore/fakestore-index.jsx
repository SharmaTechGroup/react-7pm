import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FakestoreHome } from "./fakestore-home";
import { FakestoreDetails } from "./fakestore-details";
import { FakestoreSearch } from "./fakestore-search";
import { FakestoreResults } from "./fakestore-results";
import { lazy, Suspense } from "react";
import { FakestoreLogin } from "./fakestore-login";

const FakestoreProducts = lazy(()=> import('./fakestore-products'));

export function FakestoreIndex(){
    return(
        <div className="container-fluid">
            <BrowserRouter>
                <header className="bg-dark text-white text-center p-2">
                    <h2 className="bi bi-bag-fill"> Fakestore</h2>
                </header>
                <section className="mt-4">
                   <Suspense fallback={<div> <span className="spinner-border text-success"></span> Loading.. </div>}>

                         <Routes>
                         <Route path="/" element={<FakestoreHome />} />
                         <Route path="products/:category" element={<FakestoreProducts />}>
                            <Route path="details/:id" element={<FakestoreDetails />} />
                         </Route>
                         <Route path="search" element={<FakestoreSearch />} />
                         <Route path="results" element={<FakestoreResults />} />
                         <Route path="login" element={<FakestoreLogin />} />
                         <Route  path="*" element={<code><h4>Not Found</h4></code>} />
                         </Routes>

                   </Suspense>
                </section>
            </BrowserRouter>
        </div>
    )
}