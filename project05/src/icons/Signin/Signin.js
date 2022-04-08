import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

function Signin() {
  return <StyledIcon icon={faArrowRightToBracket} />;
}

export default Signin;

const StyledIcon = styled(FontAwesomeIcon)`
  position: absolute;
  top: 0;
  left: 0;
  width: 15%;
  height: 100%;
  padding: 0 1rem;
  background-color: #d79a93;
  z-index: 10;
`;
