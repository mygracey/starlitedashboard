
import logo from "../../assets/starlitelogo-removebg.png"
import { FaGraduationCap,FaTachometerAlt,FaSignOutAlt,FaArrowCircleRight,FaUserAlt,FaBookOpen,FaCalendar,FaFileArchive,FaStickyNote,FaEnvelope,FaLaptop,FaCircle,FaVolumeUp,FaArrowRight, FaTrophy,FaUser, FaArrowAltCircleRight,FaBars,FaTimes } from "react-icons/fa"
import {Link} from "react-router-dom"
import smilingemoji from "../../assets/smiling-emoji-removebg.png"
import "./Dashboard.css"


function Dashboard(){


function openMenu(){
    const openmenu=document.querySelector(".open")
    const closemenu=document.querySelector(".close")
    const menu=document.querySelector(".header-icons")
    menu.classList.add("show-menu")
    openmenu.style.display="none"
    closemenu.style.display="block"

}


function closeMenu(){
    const openmenu=document.querySelector(".open")
    const closemenu=document.querySelector(".close")
    const menu=document.querySelector(".header-icons")
    menu.classList.remove("show-menu")
    openmenu.style.display="block"
    closemenu.style.display="none"
}

    return(
        <section className="dashboard-container">
            <div className="sidebar">
                <div className="logo">
                    <img src={logo} width="60"/>
                  
                </div>
                  <p className="school-name">Starlite International School.</p>
                 <p className="slogan">Learn . Grow . Shine</p>

                <ul className="main-sidebar-links">
                    <li className="active"><Link to="#" className="link">Dashboard</Link>
                        <FaTachometerAlt className="sidebar-icon"/>
                    </li>
                    <li><Link to="#" className="link">School Admin</Link>
                        <FaUser className="sidebar-icon"/>
                    </li>
                    <li><Link to="#" className="link">Principal</Link>
                        <FaEnvelope className="sidebar-icon"/>
                    </li>
                    <li><Link to="#" className="link">Head Teacher</Link>
                        <FaEnvelope className="sidebar-icon"/>
                    </li>
                    <li><Link to="#" className="link">Class Teacher</Link>
                        <FaEnvelope className="sidebar-icon"/>
                    </li>
                    <li><Link to="#" className="link">Guardian</Link>
                        <FaUser className="sidebar-icon"/>
                    </li>
                    <li><Link to="#" className="link">Online Class</Link>
                        <FaLaptop className="sidebar-icon"/>
                    </li>
                    <li><Link to="#" className="link">Logout</Link>
                        <FaSignOutAlt className="sidebar-icon"/>
                    </li>
                </ul>

        

            </div>
            <div className="main-frame">
                     <header className="container">
                    <h3>Dashboard</h3>
                <div className="header-icons">
                    
                         <FaEnvelope className="header-icon icon1 icon"/>
                                          
                   
                    <FaUserAlt className="header-icon icon2 icon"/>

                    <FaSignOutAlt className="header-icon icon3 icon"/>
                </div>

                <FaBars className="open" onClick={openMenu}/>
                <FaTimes className="close" onClick={closeMenu}/>
            </header>

            <div className="banner container">
                <div className="card-left">
                    <div className="text-box">
                        <h2>Welcome back, <span className="caleb">Caleb!</span></h2>
                        <p>Ready to learn something great today? <img src={smilingemoji} width="50"/></p>
                    </div>
                        <FaGraduationCap className="banner-icon"/>

                    
                </div>
                <div className="card-right">
                    <div className="banner-user-icon-box">
                         <FaUserAlt className="banner-icon-right"/>
                    </div>
                   
                        <div className="desc">
                            
                                 <h3>Caleb Okafor</h3>
                               <div className="ss2">SS2</div> 
                       </div>  
                                      
                </div>

           </div>


            <div className="card-wrapper container">
                    <div className="card card1">
                        <div className="card-icon-box">
                            <FaBookOpen className="card-icon card-icon1"/>
                            <FaArrowCircleRight className="icon-circle icon-circle1"/>
                        </div>
                        <h3 className="desc desc1">My Course</h3>
                    </div>
                    
                    <div className="card card2">
                         <div className="card-icon-box">
                            <FaCalendar className="card-icon card-icon2"/>
                            <FaArrowCircleRight className="icon-circle icon-circle2"/>
                         </div>
                         <h3 className="desc desc2">My Schedule</h3>
                    </div>

                    <div className="card card3">
                         <div className="card-icon-box">
                            <FaFileArchive className="card-icon card-icon3"/>
                            <FaArrowCircleRight className="icon-circle icon-circle3"/>
                         </div>
                         <h3 className="desc desc3">Assignments</h3>
                    </div>

                    <div className="card card4">
                         <div className="card-icon-box">
                            <FaStickyNote className="card-icon card-icon4"/>
                            <FaArrowCircleRight className="icon-circle icon-circle4"/>
                         </div>
                         <h3 className="desc desc4">Reports</h3>
                    </div>
                </div>


                <div className="info-card-wrapper container">

                    <div className="card card1">
                        <div className="latest-announcement">
                            <h2><FaVolumeUp className="volume-icon"/>Latest Announcements</h2> <span className="viewall">View All<FaArrowRight/></span>
                        </div>
                        
                        <div className="announce1 anouncement">
                            <h3><FaCircle className="circle"/>School Resumes:</h3>
                            <p>School resumes Monday the 12th October, 2026 from the mid-term break. Please take note that lessons will continue in earnest in preparation for your upcoming tests and exams.</p>
                        </div>
                        <div className="announce2 anouncement">
                            <h3><FaCircle className="circle"/>Mathemetics Test this Friday:</h3>
                            <p>You are strongly advised to prepare for your Math test as you prepare to return to school.</p>
                        </div>
                        <div className="announce3 anouncement">
                            <h3><FaCircle className="circle"/>Pay School Fees Balance:</h3>
                            <p>You are minded to clear all outstanding payments with regards to your tuition fees. The deadline is 24th October, 2026. Students who fail to pay before the expiration of the deadline will ultmately be prevented from entering into the school compound.</p>
                        </div>
                    </div>
                        <div className="card card2">
                        <div className="statement">Aim for the top this term!</div>
                        <FaTrophy className="icon-trophy"/>
                    </div>
                </div>
               
            </div>
           
        </section>
    )
}

export default Dashboard