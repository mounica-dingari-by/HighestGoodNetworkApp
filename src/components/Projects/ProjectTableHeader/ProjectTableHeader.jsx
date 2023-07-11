/*********************************************************************************
 * Component: Project Table Header
 * Author: Henry Ng - 01/17/20
 * This component is the top of the table. It displays titles.
 ********************************************************************************/
import React, { useState, useEffect } from 'react';
import './../projects.css';
import {
  PROJECT_NAME,
  ACTIVE,
  MEMBERS,
  WBS,
  PROJECT_CATEGORY,
  INVENTORY,
  DELETE,
} from './../../../languages/en/ui';
import hasPermission from 'utils/permissions';
import ReactTooltip from 'react-tooltip';

const ProjectTableHeader = props => {
  //infopoint
  // const [infoModal, setInfoModal] = useState(false);
  // const toggleInfoModal = () => {
  //   setInfoModal(!infoModal);
  // };

  return (
    <>
    {/* <Modal isOpen={infoModal} toggle={toggleInfoModal}>
            <ModalHeader toggle={toggle}>Import Tasks Info</ModalHeader>
            <ModalBody>
            test
          </ModalBody>
          <ModalFooter>
            <Button onClick={toggle} color="secondary" className="float-left">
              {' '}
              Ok{' '}
            </Button>
          </ModalFooter>
        </Modal>   */}
    <tr>
      <th scope="col" id="projects__order">
        #
      </th>
      <th scope="col">{PROJECT_NAME}</th>
      <th scope="col" id="projects__category">
        {PROJECT_CATEGORY}
      </th>
      <th scope="col" id="projects__active">
        {ACTIVE}
      </th>
      <th scope="col" id="projects__inv">
        {INVENTORY}
      </th>
      <th scope="col" id="projects__members">
        {MEMBERS}
      </th>
      <th scope="col" id="projects__wbs">
        {WBS}
        {/* <i
          data-toggle="tooltip"
          data-placement="right"
          title="Click for more information"
          style={{ fontSize: 24, cursor: 'pointer' }}
          aria-hidden="true"
          className="fa fa-info-circle"
          onClick={toggleInfoModal}
        /> */}
        <i
          className="fa fa-info-circle"
          data-tip
          data-for="timeEntryTip"
          data-delay-hide="1000"
          aria-hidden="true"
          title=""
        />
        <ReactTooltip id="timeEntryTip" place="bottom" effect="solid">
        By clicking on the WBS logo, you gain access to a comprehensive project management interface. <br/>
        This powerful tool allows you to efficiently manage access to various projects within your team. <br/>
        When clicking on the project’s name you can effortlessly manage tasks, including assigning them to team members,<br/>
        tracking their progress, and marking them as active or inactive as needed. The WBS logo serves as a gateway to an <br/>
        intuitive project management system that streamlines collaboration, enhances organization, and fosters seamless coordinationamong team members.<br/>
       </ReactTooltip>

      </th>
      {hasPermission(props.role, 'deleteProject', props.roles, props.userPermissions) ? (
        <th scope="col" id="projects__delete">
          {DELETE}
        </th>
      ) : null}
    </tr>
        
    </>
  );
};

export default ProjectTableHeader;
