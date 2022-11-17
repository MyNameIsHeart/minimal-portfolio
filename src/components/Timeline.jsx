import React from "react";
import timeline from "../data/timeline";
import TimelineItem from "./TimelineItem";
import Title from "./Title";

function Timeline() {
    return (
        <div className="flex flex-col md:flex-row justify-center my-20">
            <div className="w-full md:w-7/12">
                <Title>Timeline</Title>
                {/* iterate through timeline */}
                {timeline.map(item => (
                    <TimelineItem
                        date={item.date}
                        title={item.title}
                        place_of_employment={item.place_of_employment}
                        details={item.details}
                    />
                ))}
            </div>
        </div>
    )
}

export default Timeline;