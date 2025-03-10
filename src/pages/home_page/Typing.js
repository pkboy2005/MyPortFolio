import React from "react";
import Typewriter from "typewriter-effect";

function Typing() {
    return (
        <Typewriter
            options={{
                strings: [
                    "Developer",
                    "Software Engineer",
                    "Frontend Developer",
                    "Backend Developer",
                    "Cloud Engineer",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 40,
            }}
        />
    );
}

export default Typing;
