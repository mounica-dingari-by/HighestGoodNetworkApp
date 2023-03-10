import { useEffect, useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch, useSelector } from 'react-redux';
import { FiBox } from 'react-icons/fi';
import { getProjectDetail } from '../../../actions/project';
import { fetchAllMembers, getProjectActiveUser } from '../../../actions/projectMembers';
import { fetchAllWBS } from '../../../actions/wbs';
import { ProjectMemberTable } from '../ProjectMemberTable';
import { ReportPage } from '../sharedComponents/ReportPage';
import { Paging } from '../../common/Paging';
import { TasksTable } from '../TasksTable';
import { WbsTable } from '../WbsTable';
import { projectReportViewData } from './selectors';
import '../../Teams/Team.css';
import './ProjectReport.css';

export const ProjectReport = ({ match }) => {
  const dispatch = useDispatch();
  const { wbs, projectMembers, isActive, projectName, wbsTasksID, isLoading } = useSelector(
    projectReportViewData,
  );

  useEffect(() => {
    if (match) {
      dispatch(getProjectDetail(match.params.projectId));
      dispatch(fetchAllWBS(match.params.projectId));
      dispatch(fetchAllMembers(match.params.projectId));
    }
  }, []);

  useEffect(() => {
    dispatch(getProjectActiveUser());
  }, [projectMembers.members]);

  return (
    <ReportPage
      renderProfile={() => (
        <ReportPage.ReportHeader isActive={isActive} avatar={<FiBox />} name={projectName} />
      )}
    >
      <div className="wbs-and-members-blocks-wrapper">
        <ReportPage.ReportBlock className="wbs-and-members-blocks">
          <Paging totalElementsCount={wbs.WBSItems.length}>
            <WbsTable wbs={wbs} />
          </Paging>
        </ReportPage.ReportBlock>
        <ReportPage.ReportBlock className="wbs-and-members-blocks">
          <Paging totalElementsCount={projectMembers.foundUsers.length}>
            <ProjectMemberTable projectMembers={projectMembers} />
          </Paging>
        </ReportPage.ReportBlock>
      </div>
      <ReportPage.ReportBlock>
        <TasksTable WbsTasksID={wbsTasksID} />
      </ReportPage.ReportBlock>
    </ReportPage>
  );
};
