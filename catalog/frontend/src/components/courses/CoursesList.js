import React from "react";
import { Link } from "react-router-dom";


const CoursesList = (props) => {
    return (
        <div className="courses-list">
            <div className="courses-filters">
                <input type="text" placeholder={props.language[props.locale].courses.searchPlaceholder} onChange={props.changeSearchValue} value={props.searchValue}/>
                <div className="courses-select">
                    <button className="courses-select-input-left-button">Level</button>
                    <button className="courses-select-input-right-button select-input-closed"></button>
                    <ul className="courses-select-dropdown courses-select-dropdown-closed">
                    </ul>
                </div>
                <div className="courses-select">
                    <button className="courses-select-input-left-button">Organization</button>
                    <button className="courses-select-input-right-button select-input-closed"></button>
                    <ul className="courses-select-dropdown courses-select-dropdown-closed">
                    </ul>
                </div>
            </div>
            <ul>
                { props.courses.map((course) => 
                <li>
                    <Link exact to={course.url}>
                        <div className="courses-item-img">
                            <img src={require("../../assets/"+course.img)}></img>
                        </div>
                        <div className="courses-item-text">
                                <div className="courses-profile">   
                                    <img src={require("../../assets/" + course.organizationImg)} />
                                    <p>{course.organization}</p>
                                </div>
                                <div className="line"></div>
                                <div className="courses-info">
                                    <h2>{course.name[props.locale]}</h2>
                                    <p className="courses-level">{course.level[props.locale]}</p>
                                    <p className="courses-tags">
                                            {course.tags[props.locale].map( (tag) => <span>{tag}</span>)}
                                    </p>
                                    <p className="courses-description">{course.description[props.locale]}</p>
                                </div>
                        </div>
                    </Link>
                </li>                
                )}
            </ul>
        </div>
    );
};

export default CoursesList;