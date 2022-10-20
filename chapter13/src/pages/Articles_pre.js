import { NavLink, Outlet } from "react-router-dom";
/* NavLink : 링크에서 사용하는 경로가 현재 라우트의 경로와
일치하는 경우 특정 스타일 혹은 CSS 클래스를 적용하는 컴포넌트 */

const Articles = () => {
  const activeStyle = {
    color: "green",
    fontSize: 21,
  };
  return (
    <div>
      <Outlet />
      <ul>
        <li>
          <NavLink
            to="/articles/1"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >게시글 1</NavLink>
        </li>
        <li>
          <NavLink
            to="/articles/2"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >게시글 2</NavLink>
        </li>
        <li>
          <NavLink
            to="/articles/3"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >게시글 3</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Articles;
