import { Canvas, useFrame } from "@react-three/fiber";
import { useFBX, useTexture } from "@react-three/drei";
import styled from "styled-components";
import { useRef } from "react";
import { Link } from "react-router-dom";

const WIPPage = () => {
  return (
    <Main>
      <CanvasWrapper>
        <Canvas>
          {/* 조명 설정 */}
          <ambientLight intensity={0.3} />
          <directionalLight position={[5, 10, 5]} intensity={1.0} />
          <Scene />
        </Canvas>
      </CanvasWrapper>
      <Absolute>
        <WIPText>WORKING IN PROGRESS</WIPText>
        <Description>
          현재 인포팀 소개 페이지는 새롭게 단장 중에 있습니다. 조만간 다시
          찾아뵙겠습니다.
        </Description>
        <VisitLink>
          <Link to="/home">기존 페이지 방문하기</Link>
        </VisitLink>
      </Absolute>
    </Main>
  );
};

const Scene = () => {
  const fbx = useFBX("/assets/mesh/Traffic easel.fbx");
  const [albedo, metallicSmoothness, normal] = useTexture([
    "/assets/mesh/easel_AlbedoTransparency.png",
    "/assets/mesh/easel_MetallicSmoothness.png",
    "/assets/mesh/easel_Normal.png",
  ]);
  const modelRef = useRef();

  // Z축 회전 애니메이션
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01; // 천천히 Z축 회전
    }
  });

  // FBX 모델에 텍스처 적용
  fbx.traverse((child) => {
    if (child.isMesh) {
      child.material.map = albedo; // 색상 텍스처
      child.material.metalnessMap = metallicSmoothness; // 금속성 텍스처
      child.material.roughnessMap = metallicSmoothness; // 매끄러움 텍스처
      child.material.normalMap = normal; // 노멀 맵 텍스처

      // 금속성과 매끄러움 값 활성화
      child.material.metalness = 1.0; // 기본 금속성 값
      child.material.roughness = 0.5; // 기본 매끄러움 값 (조금 부드럽게 조정)
    }
  });

  return (
    <primitive
      object={fbx}
      ref={modelRef}
      scale={0.013}
      position={[0, -0.2, 0]}
    />
  );
};

const Main = styled.main`
  width: 100vw;
  height: 100dvh; /* viewport height */
  background-color: black;
  position: relative;
`;

const CanvasWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #111;
`;

const Absolute = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 20vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 0 24px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    bottom: 15vh; /* 작은 화면에서 텍스트 위치 조정 */
  }

  @media (max-width: 480px) {
    bottom: 10vh;
  }
`;

const WIPText = styled.h1`
  font-family: "League Gothic";
  color: white;
  font-size: 80px;
  margin-top: 20px;

  @media (max-width: 768px) {
    font-size: 60px; /* 태블릿 화면 크기 */
  }

  @media (max-width: 480px) {
    font-size: 40px; /* 모바일 화면 크기 */
    text-align: left;
  }
`;

const Description = styled.p`
  font-family: "Noto Sans KR", sans-serif;
  color: white;
  font-size: 16px;
  margin-top: 10px;
  text-align: center;

  line-height: 20px;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    text-align: left;
  }
`;

const VisitLink = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  a {
    color: rgb(75, 75, 75);
  }
  font-size: 14px;
  margin-top: 24px;

  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (max-width: 480px) {
    font-size: 10px;
  }
`;

export default WIPPage;
