import React from 'react'
import Highlight, {defaultProps} from 'prism-react-renderer'
import oceanicNext from 'prism-react-renderer/themes/oceanicNext';
import styled from "styled-components"

const Pre = styled.pre`
  text-align: left;
  padding: 1em;
`;

const Line = styled.div`
  display: table-row;
`;

const LineNo = styled.span`
  display: table-cell;
  text-align: right;
  padding-right: 1.6em;
  user-select: none;
  opacity: 0.5;
`;

const LineContent = styled.span`
  display: table-cell;
`;

const CodeBlock = ({children, className}) => {
  const language = className.replace(/language-/, '')

  return (
    <Highlight {...defaultProps} code={children} language={language} theme={oceanicNext}>
      {({className, style, tokens, getLineProps, getTokenProps}) => (
        tokens.pop() && // 마지막 줄 공백 제거
        <Pre className={className} style={style}>
          {tokens.map((line, i) => (
            <Line key={i} {...getLineProps({ line, key: i })}>
              <LineNo>{i + 1}</LineNo>
              <LineContent>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </LineContent>
            </Line>
          ))}
        </Pre>
      )}
    </Highlight>
  )
}

export default CodeBlock