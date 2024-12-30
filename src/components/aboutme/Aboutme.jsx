
import './aboutme.css'
function Aboutme() {
    return <>
        <div className="container mx-auto">
            <div className="grid grid-cols-4 gap-4">
                <div className="col-span-2">
                    <h2 className="text-yellow-400 text-xl-800">About me</h2>
                    <h2 className="text-xl-600">Front - End Developer </h2><br />

                </div>
                <div className='col-span-2'>
                    <p className='text-white text-2xl'>My name is Vo Thi Van Thu. I am a third - year student at Passerelles Numeriques Viet Nam</p><br />
                    <p className='text-white text-2xl'>I am passionate about crafting seamless and engaging user experiences as a Front-end Developer. With experience in HTML, CSS, JavaScript, and modern frameworks like React.js and Next.js, I am eager to contribute my skills to create intuitive and visually appealing interfaces. I am highly motivated to learn, adapt, and collaborate with teams to deliver exceptional digital products.</p><br />
                    <p className='text-white text-2xl '>I possess strong communication skills, enabling me to effectively convey ideas and collaborate with diverse teams. I excel in teamwork, fostering a cooperative and productive environment to achieve shared goals. My problem-solving abilities allow me to analyze challenges critically and develop innovative solutions. Additionally, I am confident in public speaking and delivering presentations, ensuring clear and engaging delivery of information to various audiences.</p>
                    <h2 className="text-yellow-400 text-xl-800">Personal Information</h2>
                    <div className="space-y-4">
                        <h3 className="text-yellow-400 text-2xl font-bold">Education</h3>
                        <p className='text-white text-2xl'>Passerelles Numeriques Viet Nam</p>
                        <h3 className="text-yellow-400 text-2xl font-bold">Email</h3>
                        <a href="mailto:thu.vo25@student.passerellesnumeriques.org" className='text-white text-2xl'>thu.vo25@student.passerellesnumeriques.org</a>
                        <h3 className="text-yellow-400 text-2xl font-bold">Address</h3>
                        <p className='text-white text-2xl'>99 Tô Hiến Thành - Sơn Trà - Đà Nẵng</p>
                    </div>

                </div>
            </div>
        </div>
    </>
}

export default Aboutme;