import skillImg from '../../../assets/images/home/skill.jpg';
import skillShape from '../../../assets/images/home/skill-shape.png';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

const skills = [
    {
        id: 1,
        title: 'Business Growth',
        skillNum: 80,
        image: skillShape
    },
    {
        id: 2,
        title: 'Product Value',
        skillNum: 65,
        image: skillShape
    },
    {
        id: 3,
        title: 'Active Clients',
        skillNum: 73,
        image: skillShape
    }
]

const SkillOne = () => {
    return (
        <section className="skills-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        {/* <!-- Call To Action start --> */}
                        <div className="skill-content">
                            <div className="sub-title"><span className="border-left"></span>Skillset</div>
                            <h3 className="sec-title">
                                Innovative Solution
                                For Business
	                        </h3>
                            <p className="sec-desc">
                                A consultant is someone who has some level of expertise that a particular group of people find valuable, and people within that group are willing to pay the consultant.
	                        </p>
                            <div className="skill-wrapper">

                                {
                                    skills?.map(skill => {
                                        return (
                                            <div key={skill?.id} className="skill-item">
                                                <div className="skill-number" style={{ backgroundImage: `url(${skill?.image})` }}>
                                                    <h2>
                                                        <CountUp end={skill?.skillNum} redraw={true}>
                                                            {({ countUpRef, start }) => (
                                                                <VisibilitySensor onChange={start} delayedCall>
                                                                    <>
                                                                        <span ref={countUpRef} />
                                                                        <span className="suffix">%</span>
                                                                    </>
                                                                </VisibilitySensor>
                                                            )}
                                                        </CountUp>
                                                    </h2>
                                                </div>
                                                <p>{skill?.title}</p>
                                            </div>
                                        );
                                    })
                                }

                            </div>
                        </div>
                        {/* <!-- Call To Action End --> */}
                    </div>
                    <div className="col-lg-6 col-md-6">
                        {/* <!--  Skill Image start --> */}
                        <div className="skill-thumb">
                            <div className="angle-top"></div>
                            <img src={skillImg} alt="" />
                            <div className="angle-bottom"></div>
                        </div>
                        {/* <!-- Skill Image End --> */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SkillOne;