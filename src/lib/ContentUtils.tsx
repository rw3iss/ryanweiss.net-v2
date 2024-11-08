import Markdown from 'react-markdown'
//import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'

import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import prism from 'react-syntax-highlighter/dist/esm/styles/prism/prism';

SyntaxHighlighter.registerLanguage('jsx', jsx);

import { oneDark as dark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { truncate } from "./utils/StrUtils";

// dark['code[class*="language-"]'] = '8bit';
// console.log(`theme`, dark);

export const renderContentByType = (type, content, options?) => {

    const shorten = options?.shorten ? true : false;
    return (
        <div className="content-wrap">
            {type == 'html' ? <div className="html-content" dangerouslySetInnerHTML={{ __html: content }} /> :
                type == 'markdown' ? <div className="markdown-content">{renderMarkdown(content)}</div> :
                    <div className="plain-content">{shorten ? truncate(content, 200) : content}</div>
            }
        </div>
    )
}

export const renderMarkdown = (markdown) => {
    return (
        <Markdown
            children={markdown}
            components={{
                code(props) {
                    const { children, className, node, ...rest } = props
                    const match = /language-(\w+)/.exec(className || '')
                    return match ? (
                        <SyntaxHighlighter
                            {...rest}
                            PreTag="div"
                            children={String(children).replace(/\n$/, '')}
                            language={match[1]}
                            style={dark}
                        />
                    ) : (
                        <code {...rest} className={className}>
                            {children}
                        </code>
                    )
                }
            }}
        />
    )
}
