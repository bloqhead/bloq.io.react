import React, { Component } from "react";

export default class Work extends Component {
  render() {

    const projects = [
      {
        "title": "University of Tampa",
        "url": "https://www.ut.edu/",
        "image": require("../images/work/ut.jpg")
      },
      {
        "title": "The Brewery Bay",
        "url": "http://www.thebrewerybay.com/",
        "image": require("../images/work/tbb.jpg")
      },
      {
        "title": "Mote Marine Laboratory & Aquarium",
        "url": "https://mote.org/",
        "image": require("../images/work/mote.jpg")
      },
      {
        "title": "Revs Institute",
        "url": "https://revsinstitute.org/",
        "image": require("../images/work/revs.jpg")
      }
    ];

    function Projects(props) {
      return (
        <div className="row work-grid">
        {props.items.map((item, index) =>
          <article className="work-grid__item" key={index}>
            <a href={item.url} className="work-grid__item-link" rel="external">
              <img className="work-grid__item-image" src={item.image} alt={item.title} />
              <div className="work-grid__item-info">
                <h3 className="work-grid__item-title">{item.title}</h3>
              </div>
            </a>
          </article>
        )}
        </div>
      )
    }

    return (
      <div>
        <h2>Work</h2>
        <Projects items={projects} />
      </div>
    );
  }
}
