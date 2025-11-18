import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";

export const Contacts = () => {
  return (
    <StyledContacts>
      <Container>
        <SectionTitle>Contacts</SectionTitle>
        <StyledForm>
          <Label>
            Name
            <Field type="text" placeholder="Name" />
          </Label>
          <Label>
            Email
            <Field type="email" placeholder="Email" />
          </Label>
          <Label>
            Mensaje
            <Field as={"textarea"} placeholder="Hi, i will ..." />
          </Label>
          <FormButton type="submit">Submit</FormButton>
        </StyledForm>
      </Container>
    </StyledContacts>
  );
};

const StyledContacts = styled.section`
  padding-bottom: 190px;
`;

const StyledForm = styled.form`
  max-width: 532px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin: 0 auto;
`;

const Label = styled.label`
  font-size: 15px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: ${theme.colors.text};
`;

const Field = styled.input`
  padding: 16px 0px 16px 18px;
  background-color: transparent;
  border: 1px solid ${theme.colors.accent};
  border-radius: 6px;

  &:not([type]) {
    height: 165px;
    resize: none;
  }

  &::placeholder {
    font-weight: 300;
    font-size: 13px;
    color: ${theme.colors.accent};
  }
`;

const FormButton = styled.button`
  background: ${theme.colors.gradient};
  padding: 14px 0;
  border-radius: 6px;
  color: ${theme.colors.bg};
  font-weight: 500;
  font-family: inherit;
  cursor: pointer;

  &:hover {
    opacity: 0.65;
  }
`;
