import React from "react";
import marked from 'marked'

interface Props {
    markdown: string
}

const MarkdownRender: React.FC<Props> = ({markdown}) => {
    const htmlContent = marked(markdown)
    return <div dangerouslySetInnerHTML={{ __html: htmlContent}}/>
}

export default MarkdownRender

