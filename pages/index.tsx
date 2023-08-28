import type { NextPage } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import { Dropdown, DropdownButton, SplitButton } from "react-bootstrap";
import styles from "./desktop-suggestions.module.css";
const DesktopSuggestions: NextPage = () => {
  return (
    <div className={styles.desktopSuggestions}>
      <div className={styles.rectangleParent}>
        <div className={styles.rectangle} />
        <div className={styles.group}>
          <div className={styles.pathParent}>
            <img className={styles.pathIcon} alt="" src="/path.svg" />
            <b className={styles.b}>2</b>
          </div>
          <h3 className={styles.addTagsFor}>Add tags for solutions</h3>
          <div className={styles.easierToSearch}>
            Easier to search for solutions based on a specific stack.
          </div>
          <div className={styles.rectangleGroup}>
            <div className={styles.rectangle1} />
            <b className={styles.b1}>112</b>
            <img className={styles.path2Icon} alt="" src="/path-21.svg" />
          </div>
          <div className={styles.rectangleContainer}>
            <div className={styles.rectangle2} />
            <div className={styles.enhancement}>Enhancement</div>
          </div>
        </div>
      </div>
      <img className={styles.bulb1Icon} alt="" src="/bulb-1.svg" />
      <div className={styles.group3Copy}>
        <div className={styles.rectangle} />
        <div className={styles.group}>
          <div className={styles.pathGroup}>
            <img className={styles.pathIcon} alt="" src="/path.svg" />
            <b className={styles.b}>2</b>
          </div>
          <b className={styles.allowImagevideoUp}>
            Allow image/video upload to feedback
          </b>
          <div className={styles.imagesAndScreencas}>
            Images and screencasts can enhance comments on solutions.
          </div>
          <div className={styles.groupDiv}>
            <div className={styles.rectangle1} />
            <b className={styles.b3}>51</b>
            <img className={styles.path2Icon} alt="" src="/path-21.svg" />
          </div>
          <button className={styles.groupButton}>
            <div className={styles.rectangle2} />
            <div className={styles.enhancement1}>Enhancement</div>
          </button>
        </div>
      </div>
      <div className={styles.rectangleParent1}>
        <div className={styles.rectangle} />
        <div className={styles.group}>
          <div className={styles.pathGroup}>
            <img className={styles.pathIcon} alt="" src="/path.svg" />
            <b className={styles.b}>4</b>
          </div>
          <b className={styles.allowImagevideoUp}>Add a dark theme option</b>
          <div className={styles.imagesAndScreencas}>
            It would help people with light sensitivities and who prefer dark
            mode.
          </div>
          <div className={styles.groupDiv}>
            <div className={styles.rectangle1} />
            <b className={styles.b5}>99</b>
            <img className={styles.path2Icon} alt="" src="/path-21.svg" />
          </div>
          <button className={styles.rectangleParent3}>
            <div className={styles.rectangle2} />
            <div className={styles.feature}>Feature</div>
          </button>
        </div>
      </div>
      <div className={styles.rectangleParent4}>
        <div className={styles.rectangle} />
        <div className={styles.frameGroup}>
          <div className={styles.pathParent1}>
            <img className={styles.pathIcon} alt="" src="/path.svg" />
            <b className={styles.b}>1</b>
          </div>
          <b
            className={styles.qaWithinThe}
          >{`Q&A within the challenge hubs`}</b>
          <div
            className={styles.challengeSpecificQ}
          >{`Challenge-specific Q&A would make for easy reference.`}</div>
          <div className={styles.rectangleParent5}>
            <div className={styles.rectangle1} />
            <b className={styles.b7}>65</b>
            <img className={styles.path2Icon} alt="" src="/path-21.svg" />
          </div>
        </div>
        <button className={styles.rectangleParent6}>
          <div className={styles.rectangle2} />
          <div className={styles.feature}>Feature</div>
        </button>
      </div>
      <div className={styles.group7Copy}>
        <div className={styles.rectangle} />
        <div className={styles.group}>
          <div className={styles.pathGroup}>
            <img className={styles.pathIcon} alt="" src="/path.svg" />
            <b className={styles.b}>3</b>
          </div>
          <b className={styles.allowImagevideoUp}>Ability to follow others</b>
          <div className={styles.imagesAndScreencas}>
            Stay updated on comments and solutions other people post.
          </div>
          <div className={styles.groupDiv}>
            <div className={styles.rectangle1} />
            <b className={styles.b5}>42</b>
            <img className={styles.path2Icon} alt="" src="/path-21.svg" />
          </div>
          <button className={styles.rectangleParent3}>
            <div className={styles.rectangle2} />
            <div className={styles.feature}>Feature</div>
          </button>
        </div>
      </div>
      <div className={styles.group11Copy}>
        <div className={styles.rectangle} />
        <div className={styles.group}>
          <div className={styles.pathGroup}>
            <img className={styles.pathIcon} alt="" src="/path.svg" />
            <b className={styles.b10}>0</b>
          </div>
          <h3 className={styles.headingtext}>Preview images not loading</h3>
          <div className={styles.imagesAndScreencas}>
            Challenge preview images are missing when you apply a filter.
          </div>
          <div className={styles.groupDiv}>
            <div className={styles.rectangle1} />
            <b className={styles.b11}>3</b>
            <img className={styles.path2Icon} alt="" src="/path-21.svg" />
          </div>
          <button className={styles.rectangleParent10}>
            <div className={styles.rectangle2} />
            <div className={styles.bug}>Bug</div>
          </button>
        </div>
      </div>
      <header className={styles.groupHeader}>
        <div className={styles.rectangle18} />
        <DropdownButton
          className={styles.groupChild}
          title="Sort by : Most Upvotes"
          variant="primary"
          align="start"
          drop="down"
        > <Dropdown.Item href="#">Option 1</Dropdown.Item>
        <Dropdown.Item href="#">Option 2</Dropdown.Item>
        <Dropdown.Item href="#">Option 3</Dropdown.Item>
        <Dropdown.Item href="#">Option 4</Dropdown.Item></DropdownButton>
        <div className={styles.suggestionsParent}>
          <h3 className={styles.suggestions}>6 Suggestions</h3>
          <img className={styles.bulb2Icon} alt="" src="/bulb-1.svg" />
        </div>
        <button className={styles.btnn} id="btnn">
          <div className={styles.rectangle19} />
          <b className={styles.addFeedback}>+ Add Feedback</b>
        </button>
      </header>
      <div className={styles.groupParent}>
        <div className={styles.rectangleParent11}>
          <div className={styles.rectangle20} />
          <div className={styles.frameParent2}>
            <button className={styles.rectangleParent12}>
              <div className={styles.rectangle2} />
              <div className={styles.enhancement1}>Enhancement</div>
            </button>
            <div className={styles.group10Copy}>
              <div className={styles.rectangle22} />
              <div className={styles.all}>All</div>
            </div>
            <div className={styles.group10Copy4}>
              <div className={styles.rectangle2} />
              <div className={styles.all}>UI</div>
            </div>
            <div className={styles.group10Copy5}>
              <div className={styles.rectangle2} />
              <div className={styles.all}>UX</div>
            </div>
            <button className={styles.group10Copy2}>
              <div className={styles.rectangle2} />
              <div className={styles.feature}>Feature</div>
            </button>
            <button className={styles.group10Copy3}>
              <div className={styles.rectangle2} />
              <div className={styles.bug}>Bug</div>
            </button>
          </div>
        </div>
        <div className={styles.rectangleParent13}>
          <div className={styles.rectangle27} />
          <div className={styles.roadmapParent}>
            <b className={styles.roadmap}>Roadmap</b>
            <div className={styles.view}>View</div>
          </div>
          <div className={styles.plannedParent}>
            <div className={styles.planned}>Planned</div>
            <b className={styles.b12}>2</b>
            <div className={styles.oval} />
          </div>
          <div className={styles.group19Copy}>
            <div className={styles.planned}>In-Progress</div>
            <b className={styles.b13}>3</b>
            <div className={styles.oval1} />
          </div>
          <div className={styles.group19Copy2}>
            <div className={styles.planned}>Live</div>
            <b className={styles.b14}>1</b>
            <div className={styles.oval2} />
          </div>
        </div>
        <div className={styles.ovalParent}>
          <img className={styles.ovalIcon} alt="" src="/oval4.svg" />
          <div className={styles.eqaimParent}>
            <h3 className={styles.eqaim}>Eqaim</h3>
            <div className={styles.feedbackBoard}>Feedback Board</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopSuggestions;
