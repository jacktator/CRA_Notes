import styled, {css} from 'styled-components';

export const NoteEditorWrapper = styled.div`
  background: #fff;
  border: ${props => props.theme.sizeExtraSmall} solid ${props => props.theme.colors.border};
  font-family: 'Georgia', serif;
  font-size: 14px;
  padding: ${props => props.theme.space4};
`;

export const EditorWrapper = styled.div`
  border-top: ${props => props.theme.sizeExtraSmall} solid ${props => props.theme.colors.border};
  cursor: text;
  font-size: 16px;
  margin-top: ${props => props.theme.space3};
  
  .public-DraftEditorPlaceholder-root, .public-DraftEditor-content {
    margin: 0 -15px -15px;
    padding: 15px;
  };
  
  .public-DraftEditor-content {
    min-height: 100px;
  }
  
  .RichEditor-blockquote {
    border-left: 5px solid #eee;
    color: #666;
    font-family: 'Hoefler Text', 'Georgia', serif;
    font-style: italic;
    margin: 16px 0;
    padding: 10px 20px;
  }
  
  .public-DraftStyleDefault-pre {
    background-color: rgba(0, 0, 0, 0.05);
    font-family: 'Inconsolata', 'Menlo', 'Consolas', monospace;
    font-size: 16px;
    padding: 20px;
  }
  
  ${props => props.hidePlaceholder && css`
    display: none;
  `};
`;

export const RichEditorControls = styled.div`
  font-family: 'Helvetica', sans-serif;
  font-size: 14px;
  margin-bottom: ${props => props.theme.space1};
  user-select: none;
`;

export const RichEditorStyleButton = styled.div`
  color: #999;
  cursor: pointer;
  margin-right: 16px;
  padding: 2px 0;
  display: inline-block;
  
  ${props => props.active && css`
    color: #5890ff;
  `};
`;
