import "./experience.css";

import ProjectGrid from "./ProjectGrid";
function Experience() {
    return <>
        <div className="container mx-auto px-6 md:px-12">
            <div className="inline-block text-center group">
                <h2 className="text-yellow-400 mb-1 group-hover:text-yellow-300 transition-colors">Experiences</h2>
                <div className="h-1 bg-yellow-400 w-full transition-all group-hover:w-[110%]"></div>
                <div className="h-1 bg-yellow-400 w-1/3 mt-1 transition-all group-hover:w-1/2 mb-3"></div>
            </div>
            <p className="text-white text-2xl mb-8 font-bold">Some school projects</p>
            <ProjectGrid />
        </div>

    </>
}

export default Experience;