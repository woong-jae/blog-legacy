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
        flex-direction: row;
        width: auto;
    }
    @media screen and (max-width: ${props => props.theme.responsive.small}) {
        padding: 1.3em 1em;
        flex-direction: column;   
    }
`

const BioHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
`;

const BioName = styled.div`
  margin-left: 10px;
  font-weight: 600;
  letter-spacing: 1px;
  font-size: 1.3em;
  margin-bottom: 10px;
  color: #fff;
`;

const BioMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 1em;
  @media screen and (max-width: ${props => props.theme.responsive.large}) {
    margin-left: 1em;
  }
  @media screen and (max-width: ${props => props.theme.responsive.small}) {
    margin-left: 0em;
  }
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
      transform: scale(1.3);
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
                style={{width: '183.5px', height: '183.5px', borderRadius: '30px'}}
                />
            </BioHeader>
            <BioMain>
                <BioName>
                    {author}
                </BioName>
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