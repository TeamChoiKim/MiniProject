import React from 'react';
import { Container, Row, Col, Button, Card, ListGroup, Badge } from 'react-bootstrap';
import { FaLock, FaLockOpen, FaSignOutAlt, FaCog, FaTrophy, FaBook, FaBullhorn } from 'react-icons/fa';
import { useNavigate } from 'react-router'


const Main = () => {
  // 샘플 데이터
  const rooms = [
    { id: 1, title: '마피아 다 죽었어', status: '게임중', locked: true },
    { id: 2, title: '시민도 다 죽었어', status: '게임중', locked: false },
    { id: 3, title: '너희 다 죽었어', status: '게임중', locked: false },
    { id: 4, title: '그럼 게임은 누가 해?', status: '게임중', locked: false },
    { id: 5, title: '몰라 임마', status: '게임중', locked: false },
    { id: 6, title: '몰라 임마', status: '게임중', locked: false },
    { id: 7, title: '몰라 임마', status: '게임중', locked: false },
    { id: 8, title: '몰라 임마', status: '게임중', locked: false },
    { id: 9, title: '몰라 임마', status: '게임중', locked: false },
    { id: 10, title: '몰라 임마', status: '게임중', locked: false },
    { id: 11, title: '몰라 임마', status: '게임중', locked: false },
    { id: 12, title: '몰라 임마', status: '게임중', locked: false },
  ];

  const nav = useNavigate()

  return (
    <Container fluid className="p-0 vh-100 d-flex flex-column overflow-hidden" id="Main" style={{ border: '4px solid black' }}>
      <Row className="flex-grow-1 g-0">

        {/* 사이드바 (왼쪽) */}
        <Col md={3} className="border-end border-2 border-dark p-4 d-flex flex-column gap-4">
          <h2 className="fw-bold italic">로고</h2>
          {/* vh-100 */}
          {/* 프로필 섹션 */}
          <Card className="border-2 border-dark rounded-3 p-3">
            <div className="d-flex gap-3 align-items-center">
              <div className="border border-dark rounded p-2 text-center" style={{ width: '80px', height: '100px', fontSize: '12px' }}>
                프로필<br />이미지
              </div>
              <div className="flex-grow-1">
                <div className="border border-dark rounded text-center fw-bold py-1 mb-2">닉네임</div>
                <div className="fw-bold">LV. 1</div>
              </div>
            </div>
          </Card>

          <div className="fw-bold">
            <p className="mb-1">플레이 :</p>
            <p>승률 :</p>
          </div>

          {/* 친구 목록 */}
          <Card className="flex-grow-1 border-2 border-dark rounded-3 p-3">
            <Card.Title className="fw-bold fs-6">친구목록</Card.Title>
            <div className="flex-grow-1 border border-dark rounded bg-light"></div>
          </Card>
        </Col>

        {/* 메인 콘텐츠 (오른쪽) */}
        <Col md={9} className="d-flex flex-column vh-100">

          {/* 상단 네비게이션 */}
          <div className="border-bottom border-2 border-dark p-3 d-flex justify-content-between align-items-center">
            <div className="d-flex gap-3">
              <Button variant="outline-dark" className="rounded-pill px-4 fw-bold border-2">빠른시작</Button>
              <Button variant="outline-dark" className="rounded-pill px-4 fw-bold border-2">방만들기</Button>
            </div>
            <div className="d-flex gap-2 align-items-center">
              <Button variant="outline-dark" className="rounded-circle p-2 border-2"><FaBullhorn title="공지" /></Button>
              <Button variant="outline-dark" className="rounded-pill px-3 border-2 fw-bold">튜토리얼</Button>
              <Button variant="outline-dark" className="rounded-circle p-2 border-2"><FaTrophy title="랭킹" /></Button>
              <Button variant="outline-dark" className="rounded-circle p-2 border-2"><FaCog title="설정" /></Button>
              <Button variant="outline-dark" className="ms-3 border-2"><FaSignOutAlt /></Button>
            </div>
          </div>

          {/* 방 리스트 영역 */}
          <div className="p-4 overflow-auto room_list">
            {rooms.map((room) => (
              <Card key={room.id} className="mb-3 border-2 border-dark rounded-4 shadow-sm hover-shadow user-select-none" onClick={() => nav('/game')} style={{ cursor: 'pointer' }}>
                <Card.Body className="d-flex justify-content-between align-items-center p-4">
                  <div className="d-flex align-items-center gap-5">
                    <span className="fw-bold text-secondary">room {room.id}</span>
                    <span className="fw-bold fs-5">{room.title}</span>
                  </div>
                  <div className="d-flex align-items-center gap-4 fw-bold">
                    <span>인원</span>
                    <span className="fs-4 text-warning">
                      {room.locked ? <FaLock /> : <FaLockOpen />}
                    </span>
                    <span className="text-muted">{room.status}</span>
                  </div>
                </Card.Body>
              </Card>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Main;