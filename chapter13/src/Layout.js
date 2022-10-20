import { Outlet, useNavigate } from "react-router-dom";

const Layout = () => {
  // navigate => Link컴포넌트를 사용하지 않고
  // 다른 페이지로 이동할 수 있는 Hook
  const navigate = useNavigate();

  function goBack() {
    // 이전 페이지로 이동
    navigate(-1);
  };

  function goArticles() {
    // articles 경로로 이동
    // replace true : 페이지를 이동할 때 
    // 현재 페이지를 기록에 남기지 않음
    navigate("/articles", {replace:true});
  };

  return (
    <div>
      <header style={{ background: "lightgray", padding: 16, fontSize: 24 }}>
        <button onClick={goBack}>뒤로가기</button>
        <button onClick={goArticles}>게시글 목록</button>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
