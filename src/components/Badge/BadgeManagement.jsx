import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import classnames from 'classnames';
import AssignBadge from './AssignBadge';
import BadgeDevelopment from './BadgeDevelopment';
import { fetchAllBadges } from '../../actions/badgeManagement';
import { boxStyle } from 'styles';
import ReactTooltip from 'react-tooltip';

const BadgeManagement = props => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  useEffect(() => {
    props.fetchAllBadges();
  }, []);

  return (
    <div
      style={{
        margin: 20,
      }}
    >
        <i
          className="fa fa-info-circle"
          data-tip
          data-for="timeEntryTip"
          data-delay-hide="1000"
          aria-hidden="true"
          title=""
        />
         <ReactTooltip id="timeEntryTip" place="bottom" effect="solid">
         <p>Boost Team Confidence with Custom Badges!
          </p>
          <p>
          Welcome to the Badges Management page, your platform for assigning <br/>
          and creating badges to inspire and uplift your team. Recognizing and <br/>
          celebrating achievements is vital for fostering a positive and motivated <br/>
          work environment.
          </p>
          <p>
          On this page, you have the power to assign badges to team members as a token <br/>
          of appreciation for their outstanding contributions. Choose from a variety of <br/>
          predefined badges that represent different accomplishments, such as "Top Performer," <br/>
          "Innovator," or "Team Player." By awarding these badges, you not only recognize <br/>
          individual achievements but also encourage a culture of recognition and collaboration.
          </p>
          <p>
          Additionally, you can create custom badges tailored to specific accomplishments or <br/>
          goals aligned with your team's objectives. Personalize the badge design, name, <br/>
          and criteria to suit your unique needs and celebrate exceptional milestones or achievements.
          </p>
          <p>
          By leveraging the Badges Management page, you have the opportunity to uplift team morale, <br/>
          boost confidence, and foster a supportive work atmosphere. Celebrate your team's accomplishments <br/>
          and create a culture of appreciation with customized badges that showcase their achievements 
          and encourage continued success!
          </p>
       </ReactTooltip>
      <Nav pills>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => {
              toggle('1');
            }}
            style={boxStyle}
          >
            Badge Assignment
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => {
              toggle('2');
            }}
            style={boxStyle}
          >
            Badge Development
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <AssignBadge allBadgeData={props.allBadgeData} />
        </TabPane>
        <TabPane tabId="2">
          <BadgeDevelopment allBadgeData={props.allBadgeData} />
        </TabPane>
      </TabContent>
    </div>
  );
};

const mapStateToProps = state => ({ allBadgeData: state.badge.allBadgeData });

const mapDispatchToProps = dispatch => ({
  fetchAllBadges: () => dispatch(fetchAllBadges()),
});

export default connect(mapStateToProps, mapDispatchToProps)(BadgeManagement);
