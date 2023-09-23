import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

function Signup() {
  return <StyledIcon icon={faUserPlus} />;
}

export default Signup;

const StyledIcon = styled(FontAwesomeIcon)`
  position: absolute;
  top: 0;
  left: 0;
  width: 15%;
  height: 100%;
  padding: 0 1rem;
  background-color: #a0d1ce;
  z-index: 10;
`;
