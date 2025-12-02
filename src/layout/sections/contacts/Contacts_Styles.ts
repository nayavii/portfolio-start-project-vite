import styled from "styled-components";
import { theme } from "../../../styles/Theme";

const Contacts = styled.section`
  padding-bottom: 190px;
`;

const Form = styled.form`
  max-width: 532px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin: 0 auto;

  textarea {
    height: 165px;
    resize: none;
  }
`;

const Label = styled.label`
  font-size: 15px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: ${theme.colors.text};

`;

const Field = styled.input`
  padding: 16px 20px 16px 18px;
  background-color: ${theme.colors.cardBg};
  border: 1px solid ${theme.colors.accent};
  border-radius: 6px;
  color: ${theme.colors.text};

  &::placeholder {
    font-weight: 300;
    font-size: 13px;
    color: #8c819f;
  }
`;

const Option = styled.option`
  color: ${theme.colors.text};
  font-size: 10px;
  width: fit-content;
`;

const FormButton = styled.button`
  background: ${theme.colors.gradient};
  padding: 14px 0;
  border-radius: 6px;
  color: ${theme.colors.bg};
  font-weight: 500;
  font-family: inherit;
  cursor: pointer;
  transition: ${theme.animations.transition};

  &:hover {
    opacity: 0.65;
  }
`;

export const S = {
  Contacts,
  Form,
  Label,
  Field,
  FormButton,
  Option,
};
