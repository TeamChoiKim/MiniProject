import React from 'react';
import { Container, Row, Col, Button, Form, InputGroup } from 'react-bootstrap';
import { FaArrowLeft, FaPlus, FaStar, FaExclamationCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router';

const GameRoom = () => {
  // 플레이어 슬롯 데이터 (총 12개 슬롯 예시)
  const players = [
    { id: 1, name: '닉네임', isMe: true, isHost: true, isDead: false },
    ...Array(11).fill({ id: null, name: null }), // 빈 슬롯들
  ];
  const nav = useNavigate()

  return (
    <Container fluid className="p-0 vh-100 d-flex flex-column" style={{ border: '4px solid black' }}>

      {/* 상단 헤더 */}
      <header className="border-bottom border-2 border-dark p-3 d-flex justify-content-between align-items-center">
        <Button variant="outline-dark" className="fw-bold border-2 px-4">방제목</Button>
        <Button variant="outline-dark" className="border-2" onClick={() => nav('/')}><FaArrowLeft /></Button>
      </header>

      <Row className="flex-grow-1 g-0">
        {/* 왼쪽 섹션: 채팅 및 타이머 */}
        <Col md={7} className="d-flex flex-column border-end border-2 border-dark p-4 bg-white">

          {/* 타이머 영역 */}
          <div className="d-flex justify-content-center mb-5">
            <div className="border border-2 border-dark rounded-pill px-5 py-2 fw-bold d-flex gap-4 fs-5">
              <span>타이머</span>
              <span>00 : 59</span>
            </div>
          </div>

          {/* 채팅창 내역 */}
          <div className="flex-grow-1 overflow-auto d-flex flex-column gap-3 mb-4 p-2">
            <div className="d-flex align-items-start gap-2">
              <div className="border border-dark rounded-pill px-4 py-2 bg-light">야야 백빵 쟤가 여우야</div>
              <div className="border border-dark rounded px-2 py-1 text-xs mt-1">닉네임</div>
            </div>
            <div className="border border-dark rounded-pill px-4 py-2 bg-light align-self-start" style={{ maxWidth: '70%' }}>
              나도 쟤가 좀 수상해
            </div>
            <div className="border border-dark rounded-pill px-4 py-2 align-self-end bg-white" style={{ maxWidth: '70%', borderStyle: 'solid' }}>
              나 말하는 거야? 나 아냐 나 토끼야~
            </div>
            <div className="border border-dark rounded-pill px-4 py-2 bg-light align-self-start">
              에이~ 하나도 믿음이 안가네~~
            </div>
          </div>

          {/* 채팅 입력창 */}
          <InputGroup className="gap-2">
            <Form.Control
              placeholder="아 나 여우 아니라고 이것들아!!!!"
              className="border-2 border-dark rounded-3 bg-light p-3"
            />
            <Button variant="outline-dark" className="border-2 rounded-3 px-4 fw-bold">send</Button>
          </InputGroup>
        </Col>

        {/* 오른쪽 섹션: 참가 인원 및 플레이어 그리드 */}
        <Col md={5} className="p-4 d-flex flex-column gap-3 bg-white">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <div className="border border-dark rounded px-3 py-1 fw-bold">참가인원 : 01 명</div>
            <Button variant="outline-dark" className="border-2 fw-bold px-4">게임 시작</Button>
          </div>

          {/* 플레이어 그리드 (4열 구성) */}
          <div className="flex-grow-1 d-grid" style={{
            gridTemplateColumns: 'repeat(4, 1fr)',
            gridAutoRows: '1fr',
            gap: '15px'
          }}>
            {players.map((player, index) => (
              <div key={index} className="border border-dark rounded-3 d-flex flex-column overflow-hidden shadow-sm" style={{ aspectRatio: '3/4' }}>
                <div className="flex-grow-1 d-flex flex-column justify-content-center align-items-center position-relative">
                  {player.name ? (
                    <>
                      <FaStar className="text-warning mb-1 fs-4" />
                      <FaExclamationCircle className="text-danger fs-5" />
                    </>
                  ) : (
                    <FaPlus className="text-muted fs-3" />
                  )}
                  {/* {player.isHost && <div className="position-absolute top-0 end-0 p-1 text-xs fw-bold">친구 추가</div>} */}
                </div>
                <div className={`border-top border-dark p-1 text-center text-xs fw-bold ${player.name ? 'bg-light' : ''}`}>
                  {player.name || ''}
                </div>
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default GameRoom;