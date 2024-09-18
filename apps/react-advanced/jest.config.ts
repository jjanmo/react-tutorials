import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest', // TypeScript를 Jest와 함께 사용하기 위한 설정
  testEnvironment: 'jsdom', // React 컴포넌트 테스트에 필요한 환경 설정
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'], // 테스트 환경 설정 파일
  transform: {
    '^.+\\.(ts|tsx)$': [
      'ts-jest',
      {
        tsconfig: 'tsconfig.test.json',
      },
    ],
  },
  testMatch: ['<rootDir>/src/**/*.spec.{js,jsx,ts,tsx}'],
  moduleNameMapper: {
    '\\.module\\.css$': 'identity-obj-proxy',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/'], // 테스트에서 제외할 폴더
  collectCoverage: true, // 코드 커버리지 수집 활성화
  coverageDirectory: '<rootDir>/coverage',
  coverageReporters: ['text', 'lcov'], // 커버리지 보고서 형식
};

export default config;
