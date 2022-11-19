import HomePage from './HomePage';
import { Route, Routes as ReactRouterRoutes, Navigate } from 'react-router-dom';
import ProjectDetailPage from './ProjectDetailPage';
import EditPage from './EditPage';
import ArchivePage from './ArchivePage';
import ContestPage from './ContestPage';
import MyPage from './MyPage';
import LoginPage from './LoginPage';
import LogoutPage from './LogoutPage';

const Routes = () => {
  return (
    <ReactRouterRoutes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/archive" element={<ArchivePage />} />
      <Route path="/contest" element={<ContestPage />} />
      <Route path="/project/:id" element={<ProjectDetailPage />} />
      <Route path="/edit" element={<EditPage />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/logout" element={<LogoutPage />} />
      <Route path="*" element={<Navigate replace to="/home" />} />
    </ReactRouterRoutes>
  );
};

export default Routes;
