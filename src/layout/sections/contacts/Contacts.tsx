import { SectionTitle } from "../../../components/SectionTitle";
import { Container } from "../../../components/Container";
import React, { ElementRef, useRef } from "react";
import { S } from "./Contacts_Styles";
import emailjs from "@emailjs/browser";

export const Contacts: React.FC = () => {
  const form = useRef<ElementRef<"form">>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm("service_vkqlsdv", "template_49twceb", form.current, {
        publicKey: "gUMC8NN3-HCHbMZ_9",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );

    e.target.reset();
  };
  return (
    <S.Contacts id="contacts">
      <Container>
        <SectionTitle>Contacts</SectionTitle>
        <S.Form ref={form} onSubmit={sendEmail}>
          <S.Label>
            Name
            <S.Field required name="name" type="text" placeholder="Name" />
          </S.Label>
          <S.Label>
            Email
            <S.Field required name="email" type="email" placeholder="Email" />
          </S.Label>
          <S.Label>
            Phone
            <S.Field
              required
              name="phone"
              type="tel"
              placeholder="+ 00 000 00 00"
            />
          </S.Label>
          <S.Label>
            Preferred contact method
            <S.Field required as={"select"} name="method" id="method">
              <S.Option selected disabled>
                Choose the best way to contact you
              </S.Option>
              <S.Option value="email">Email</S.Option>
              <S.Option value="telegram">Telegram</S.Option>
              <S.Option value="whatsapp">WhatsApp</S.Option>
              <S.Option value="phone">Phone Call</S.Option>
            </S.Field>
          </S.Label>
          <S.Label>
            Mensaje
            <S.Field
              required
              name="message"
              as={"textarea"}
              placeholder="Hi, i will ..."
            />
          </S.Label>
          <S.FormButton type="submit">Submit</S.FormButton>
        </S.Form>
      </Container>
    </S.Contacts>
  );
};
