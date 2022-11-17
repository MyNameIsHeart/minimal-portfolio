import React from "react";
import timeline from "../data/timeline";
import TimelineItem from "./TimelineItem";

function Timeline() {
    return (
        <div className="flex flex-col md:flex-row justify-center my-20">
            <div className="w-full md:w-7/12">
                {/* iterate through portfolio */}
                {timeline.map(item => (
                    <TimelineItem
                        date={item.date}
                        title={item.title}
                        details={item.details}
                    />
                ))}
            </div>
        </div>
    )
}

export default Timeline;