import React from "react";
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default (props) => (
    <Carousel autoPlay={true} showThumbs={false} transitionTime={2} showStatus={false} infiniteLoop={true} width={1400}
              showIndicators={true}>

        {
            (props.movies).map((movie) =>
                <div align={"center"}>
                     <div >
                        <p style={{float: "center", color: "white"}}>{movie.title}</p>
                    </div>
                    <div style={{height: "350px", width: "220px"}}>
                        <img alt="" src={movie.posterPath}/>
                    </div>
                </div>
            )
        }


    </Carousel>
);
