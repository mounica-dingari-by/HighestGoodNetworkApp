import React, { useState, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import AddNewUserProfile from '../UserProfile/AddNewUserProfile';
import { useHistory } from 'react-router-dom';
import { boxStyle } from 'styles';
import ReactTooltip from 'react-tooltip';

/**
 * Modal popup to show the user profile in create mode
 */
const NewUserPopup = React.memo(props => {
  const closePopup = e => {
    props.onUserPopupClose();
  };
  const history = useHistory();
  //infopoint
  const [infoModal, setInfoModal] = useState(false);
  const toggleInfoModal = () => {
    setInfoModal(!infoModal);
  };
    // modal
    const [modal, setModal] = useState(false);
    const toggle = () => {
      setModal(!modal);
    };
  /**
   * User creation success call back.
   */
  const userCreated = () => {
    props.userCreated();
  };

  return (
    <>
       <i
          className="fa fa-info-circle"
          data-tip
          data-for="timeEntryTip"
          data-delay-hide="1000"
          aria-hidden="true"
          title=""
        />
         <ReactTooltip id="timeEntryTip" place="bottom" effect="solid">
         Our Management Dashboard is your ultimate tool for efficient user management. <br/>
         With just a few clicks, you can perform a wide range of essential actions. <br/>
         Easily toggle a user's status between Active or Inactive, granting or revoking <br/>
         access as needed. Access user profiles directly from the dashboard to make modifications, <br/>
         ensuring their information remains up to date. Check crucial details such as their role, <br/>
         email address, and weekly commitment effortlessly. Additionally, you have the power to pause <br/>
         a user, setting up a final day for their work within your organization. For further control, <br/>
         you can delete their account if necessary or initiate a password reset for added security. <br/>
         Simplify your user management tasks and enjoy seamless control with our Management Dashboard today!<br/>
       </ReactTooltip>
    
    <Modal isOpen={props.open} toggle={closePopup} className={'modal-dialog modal-lg'}>
      <ModalHeader
        toggle={closePopup}
        cssModule={{ 'modal-title': 'w-100 text-center my-auto pl-2' }}
      >
        Create New User
        <i
          data-toggle="tooltip"
          data-placement="right"
          title="Click for more information"
          style={{ fontSize: 24, cursor: 'pointer' }}
          aria-hidden="true"
          className="fa fa-info-circle"
          onClick={toggleInfoModal}
        />

<Modal isOpen={infoModal} toggle={toggleInfoModal}>
            <ModalHeader toggle={toggle}>Create New User Info</ModalHeader>
            <ModalBody>
            <p>Welcome to the User Management page, where you can seamlessly add new users and <br/>
            manage their information, team assignments, and tasks. This centralized hub allows <br/>
            you to streamline the onboarding process and ensure smooth collaboration within your organization.<br/>
            </p>
            <p>
            Adding a new user is a breeze. Simply provide their relevant details, such as name, <br/>
            email address, and role, and the system will generate their user profile. You can also <br/>
            assign them to a specific team, ensuring they are seamlessly integrated into the appropriate group.<br/>
            </p>
            <p>
            But it doesn't stop there. The User Management page also enables you to assign tasks to <br/>
            individual users or entire teams. Easily delegate responsibilities, set deadlines, <br/>
            and monitor progress, all within a few clicks.<br/>
            </p>
            <p>
            Efficiency and organization are at your fingertips with our User Management page. Take control <br/>
            of your team's structure and tasks, ensuring everyone is aligned and empowered to contribute their best work.<br/>
            </p>
          </ModalBody>
          <ModalFooter>
            <Button onClick={toggle} color="secondary" className="float-left">
              {' '}
              Ok{' '}
            </Button>
          </ModalFooter>
        </Modal>
        
        </ModalHeader>
       
      <ModalBody>
        <AddNewUserProfile
          closePopup={closePopup}
          isAddNewUser={true}
          history={history}
          userCreated={userCreated}
          userProfiles={props.userProfiles}
        />

        {/* Nested Modal that triggers when a first and last name user already exists */}

        <Modal isOpen={props.close}>
          <ModalHeader>WARNING: Duplicate Name Exists!</ModalHeader>
          <ModalBody>
            A user with a first and/or last name already exists. Do you still want to create this
            user?
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={function noRefCheck() {}}>
              Confirm
            </Button>{' '}
            <Button onClick={function noRefCheck() {}}>Cancel</Button>
          </ModalFooter>
        </Modal>

        {/* Nested Modal that triggers when a first and last name user already exists */}
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={closePopup} style={boxStyle}>
          Close
        </Button>
      </ModalFooter>
      
    </Modal>
    </>
  );
});

export default NewUserPopup;
