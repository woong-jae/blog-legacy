import * as React from 'react'
import { FaGithub, FaInstagram } from 'react-icons/fa';
import { MdMail } from 'react-icons/md';
import { StaticImage } from "gatsby-plugin-image";

import styled from 'styled-components';

const BioContainer = styled.div`
    position: sticky;
    top: 0;
    display: flex;
    flex-direction: column;
    width: ${props => props.theme.sizes.bioWidth};
    padding: 1.5em;
    font-size: 15.5px;
    background: ${props => props.theme.colors.blackLight};
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
    @media screen and (max-width: ${props => props.theme.responsive.large}) {
        position: relative;
        width: auto;
    }
    @media screen and (max-width: ${props => props.theme.responsive.small}) {
        padding: 1.3em 1em;
    }
`

const BioHeader = styled.div`
  display: flex;
  align-items: center;
`;

const BioName = styled.div`
  margin-left: 10px;
  font-weight: 600;
  letter-spacing: 1px;
  font-size: 1.1em;
  color: #fff;
`;

const BioMain = styled.div`
  margin-top: 1em;
`;

const BioText = styled.p`
  margin: 0;
  margin-left: 5px;
  color: #fff;
  font-size: 0.92em;
`;

const BioLinks = styled.div`
  margin-top: 1.5em;
  display: flex;
  color: #fff;
  text-align: center;
  max-width: 244px;
  img {
    display: block;
    margin: 0 auto;
    width: 40px;
    height: 33px;
  }
  a {
    color: #FFF;
    &:hover {
      color: ${(props) => props.theme.colors.silver};
    }
  }
`;
const BioLink = styled.a`
  width: 33.3%;
  display: block;
  font-weight: 700;
  font-size: 0.9em;
  line-height: 30px;
  letter-spacing: 0.5px;
`;

const Bio = ({ author, socials }) => {
    return (
        <BioContainer>
            <BioHeader>
              <StaticImage 
                src="../images/woong.png" 
                alt="avatar" 
                placeholder="blurred" 
                style={{width: '80px', height: '80px', borderRadius: '10px'}}
                />
                <BioName>
                    {author}
                </BioName>
            </BioHeader>
            <BioMain>
                <BioText>
                  이것 저것 공부하고 발전하는 대학생.
                </BioText>
                <BioLinks>
                    <BioLink href={`mailto:${socials.email}`}>
                      <MdMail className="bio-icon" size={32} />
                    </BioLink>
                    <BioLink href={`https://github.com/${socials.github}`}>
                        <FaGithub size={32} />
                    </BioLink>
                    <BioLink href={`https://instagram.com/${socials.instagram}`}>
                        <FaInstagram size={32} />
                    </BioLink>
                </BioLinks>
            </BioMain>
        </BioContainer>
    )
}


export default Bio