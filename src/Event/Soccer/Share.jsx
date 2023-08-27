import "./share.css";

export function Share() {
  return (
    <div className="wrapper">
      <div className="header_vote">
        <div className="crop"><img src="images/share_eagle.svg" alt=""/></div>
        <div className="header_text">투표 현황</div>
        <div className="crop"><img src="images/share_tiger.svg" alt=""/></div>
      </div>
      <div className="versus" style={{ background: "linear-gradient(90deg, rgba(0, 102, 255, 0.90) 0%, rgba(255, 0, 0, 0.90) 100%)", boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset, 0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}>
          <div className="versus_text">11,220</div>
          <img src="images/share_lightning.svg" alt="" />
          <div className="versus_text">11,110</div>
      </div>
      <div className="body">
        <div className="body_text">이대로 연세대 승...?</div>
        <div className="crop_soccer"><img src="images/share_soccer.svg" alt="" /></div>
      </div>
      <div className="share">
        <div className="share_text">공유해서 우리 학교 응원하기</div>
        <div className="share_kakao">
          <img src="images/share_kakao.svg" alt="" className="share_kakao_logo"/>
          <div className="share_kakao_text">카카오로 공유하기</div>
        </div>
      </div>
    </div>
  );
}