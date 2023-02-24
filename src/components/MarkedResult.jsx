import React, { useContext } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import styled from "styled-components";
import { EditorContext } from "../context/EditorContext";
import remarkGfm from "remark-gfm";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Container = styled.div`
  width: 50%;
  height: 100%;
  padding: 13px;
  border-right: 1px solid rgba(15, 15, 15, 0.4);
  font-family: "Lato", sans-serif;
`;

const Title = styled.div`
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 1em;
  padding: 8px 0;
  border-bottom: 1px solid rgba(15, 15, 15, 0.3);
`;

const ResultArea = styled.div`
  width: 100%;
  height: 100%;
  border: none;
  font-size: 17px;
`;

const MarkedResult = () => {
  const { markdownText } = useContext(EditorContext);
  return (
    <Container>
      <Title>Converted Text</Title>
      <ResultArea>
        <ReactMarkdown
          children={markdownText}
          remarkPlugins={[remarkGfm]}
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || "");
              return !inline && match ? (
                <SyntaxHighlighter
                  children={String(children).replace(/\n$/, "")}
                  style={docco}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                />
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
          }}
        />
      </ResultArea>
    </Container>
  );
};

export default MarkedResult;
