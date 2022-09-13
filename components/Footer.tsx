import React from "react";
import Link from "next/link";

import Image from "next/image";
import styled from "styled-components";

const FooterLinks = () => {
  return (
    <Wrapper>
      <SocialWrapper>
        {IconList.map((item, idx) => (
          <Link href={item.to} target="_blank" key={idx}>
            <a target="_blank">
              <Image src={item.src} alt="social" width={25} height={25} />
            </a>
          </Link>
        ))}
      </SocialWrapper>
    </Wrapper>
  );
};

export default FooterLinks;

const Wrapper = styled.footer`
  display: flex;
  justify-content: center;
`;

const SocialWrapper = styled.ul`
  display: flex;
  gap: 40px;
  list-style: none;
  padding-left: 0;
  a {
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    opacity: 0.7;
    &:hover {
      transform: translateY(-3px);
      opacity: 1;
    }
  }
`;

const IconList = [
  {
    to: "https://twitter.com/NearlendDao",
    src: "/twiter.svg",
  },
  {
    to: "https://t.me/+gYhnDfknkRdhMjQ1",
    src: "/telegram.svg",
  },
  {
    to: "https://discord.gg/pXvHhT9rwM",
    src: "/discord.svg",
  },
  {
    to: "https://medium.com/@Nearlend_DAO",
    src: "/medium.svg",
  },
];
