import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { JavaTutorial } from "./java-tutorial";
import { ReactTutorial } from "./react-tutorial";
import { AngularTutorial } from "./angular-tutorial";
import { TutorialHome } from "./tutorial-home";
import { EMICalculator } from "../components/emi-calculator/emi-calculator";


export function TutorialIndex(){
    return(
        <div className="container-fluid">
            <BrowserRouter>
             <header className="text-center p-4 border border-1">
                <h1>Tutorial Index</h1>
                <nav>
                    <span> <Link to="/">Home</Link> </span>
                    <span className="mx-4"> <Link to="angular">Angular</Link> </span>
                    <span> <Link to="java">Java</Link> </span>
                    <span className="mx-4"> <Link to="react">React</Link> </span>
                    <span> <Link to="emi">EMI</Link> </span>
                </nav>
             </header>
             <section className="mt-4">
                <Routes>
                    <Route path="/" element={<TutorialHome />} />
                    <Route path="java" element={<JavaTutorial />} />
                    <Route path="react/:topic/:subtopic" element={<ReactTutorial />} />
                    <Route path="angular" element={<AngularTutorial />} />
                    <Route path="emi" element={<EMICalculator />} />
                    <Route path="*" element={<code><h4>Not Found</h4><p>Request path not found in application.</p></code>} />
                </Routes>
             </section>
            </BrowserRouter>
        </div>
    )
}