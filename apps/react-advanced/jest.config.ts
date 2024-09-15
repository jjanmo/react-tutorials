const config = {
  preset: 'ts-jest', // TypeScript를 Jest와 함께 사용하기 위한 설정
  testEnvironment: 'jsdom', // React 컴포넌트 테스트에 필요한 환경 설정
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'], // 테스트 환경 설정 파일
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest', // TypeScript 파일 변환
  },
  testPathIgnorePatterns: ['/node_modules/', '/dist/'], // 테스트에서 제외할 폴더
  collectCoverage: true, // 코드 커버리지 수집 활성화
  coverageDirectory: 'coverage', // 커버리지 보고서 출력 디렉토리
  coverageReporters: ['text', 'lcov'], // 커버리지 보고서 형식
};

export default config;
