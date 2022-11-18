import React from "react";
import portfolio from "../data/portfolio";
import PortfolioItem from "./PortfolioItem";

function Portfolio() {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center">
            {/* grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                {/* iterate through portfolio */}
                {portfolio.map(project => (
                    <PortfolioItem
                        imgUrl={project.imgUrl}
                        imtAlt={project.imtAlt}
                        title={project.title}
                        stack={project.stack}
                        link={project.link}
                    />
                ))}
            </div>
        </div>
    )
}

export default Portfolio;