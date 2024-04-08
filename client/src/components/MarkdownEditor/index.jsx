import { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import ReactMarkdown from "react-markdown";

import './styles.css'

const MarkdownEditor = () => {
  const [markdown, setMarkdown] = useState('');
  const [isPreviewEnabled, setIsPreviewEnabled] = useState(false);

  const handleMarkdownChange = (event) => {
    setMarkdown(event.target.value);
  };

  const switchWritePreview = () => {
    setIsPreviewEnabled(!isPreviewEnabled);
  }

  return (
    <div className="MarkdownEditor">
      <div className="MarkdownEditor-selection-header">
        <div className="MarkdownEditor-tabs">
          <button className={`MarkdownEditor-button ${!isPreviewEnabled && "MarkdownEditor-button-selected"}`} onClick={switchWritePreview}>Write</button>
          <button className={`MarkdownEditor-button ${isPreviewEnabled && "MarkdownEditor-button-selected"}`} onClick={switchWritePreview}>Preview</button>
        </div>
      </div>
      <div className="MarkdownEditor-write-preview-area">
      {
        !isPreviewEnabled ? 
          <>
            <div className="MarkdownEditor-markdown-input">
              <TextareaAutosize
                className="MarkdownEditor-Textarea"
                minRows={11}
                maxRows={21}
                value={markdown}
                onChange={handleMarkdownChange}
                placeholder="Write your Markdown here..."
              />
            </div>
            <div className="MarkdownEditor-markdown-suported">
              <p>Markdown is supported, <a href="#">what's Markdown?</a></p>
            </div>
          </>
        :
          <div className="MarkdownEditor-markdown-preview">
            <ReactMarkdown>{markdown || "Nothing to preview"}</ReactMarkdown>
          </div>
      }
      </div>
    </div>
  );
}

export default MarkdownEditor;