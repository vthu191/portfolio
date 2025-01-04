import "./experience.css";

import ProjectGrid from "./ProjectGrid";
function Experience() {
    return <>
        <div className="container mx-auto px-6 md:px-12 mt-30">
        <h2 className="inline-block text-center mb-5">
                    <span>My projects</span>
                </h2>
            <p className="text-white text-5xl mb-8 font-bold opacity-50">Some school projects</p>
            <ProjectGrid />
        </div>

    </>
}

export default Experience;