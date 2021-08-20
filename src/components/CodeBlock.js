import React from 'react'
import Highlight, {defaultProps} from 'prism-react-renderer'
import oceanicNext from 'prism-react-renderer/themes/oceanicNext';

const CodeBlock = ({children, className}) => {
  const language = className.replace(/language-/, '')

  return (
    <Highlight {...defaultProps} code={children} language={language} theme={oceanicNext}>
      {({className, style, tokens, getLineProps, getTokenProps}) => (
        tokens.pop() && // 마지막 줄 공백 제거
        <pre className={className} style={{...style, padding: '20px'}}>
          {tokens.map((line, i) => (    
            <div key={i} {...getLineProps({line, key: i})}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({token, key})} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}

export default CodeBlock