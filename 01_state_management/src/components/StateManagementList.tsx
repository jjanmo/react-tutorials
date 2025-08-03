import { css } from '@emotion/react'
import { FaGithub } from 'react-icons/fa'
import { IoDocumentOutline } from 'react-icons/io5'
import type { FC } from 'react'
import { STATE_MANAGEMENTS } from '@/constants/common'

const StateManagementList: FC = () => {
  return (
    <section css={sectionStyle}>
      <ul css={listStyle}>
        {STATE_MANAGEMENTS.map(({ id, name, url, github, docs }) => {
          return (
            <li key={id}>
              <a href={url} css={titleStyle}>
                {name}
              </a>
              <div css={linksStyle}>
                <a
                  title="Github"
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
                <a
                  title="Docs"
                  href={docs}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IoDocumentOutline />
                </a>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default StateManagementList

const sectionStyle = css`
  width: 100%;
  height: 100vh;
  padding-top: 200px;
  display: flex;
  justify-content: center;
  background-color: #e8e5dd;
`
const listStyle = css`
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 0 auto;
`

const titleStyle = css`
  display: inline-block;
  position: relative;
  padding-right: 30px;
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: 800;
  letter-spacing: 0.2em;
  color: #282828;
  z-index: 2;

  &:hover::after {
    transform: scaleX(0.8);
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 125%;
    background-color: #d4c6e6;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s ease;
    z-index: -1;
    border-radius: 0 10px 10px 0;
  }
`
const linksStyle = css`
  display: flex;
  align-items: center;
  gap: 4px;
`
