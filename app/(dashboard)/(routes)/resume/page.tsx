import { GetStaticProps } from "next";
import fs from 'fs'
import path from "path";
import MarkdownRender from "@/components/MardownRedner";
import React from "react";

interface Props {
    markdown: string
}

const Resume: React.FC<Props> = ({markdown}) => {
    return(
        <div className=" prose mx-auto my-10">
            <MarkdownRender markdown={markdown}/>
        </div>
    )
}

export const getStaticProps: GetStaticProps = async() => {
    const filepath = path.join(process.cwd(),'data','resume.md')
    const markdown = fs.readFileSync(filepath, 'utf-8')
    return {
        props: {
            markdown,
        },
    }
}

export default Resume