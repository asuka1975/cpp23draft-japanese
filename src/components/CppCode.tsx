import hljs from "highlight.js";
import cpp from "highlight.js/lib/languages/cpp";
import 'highlight.js/styles/github.css';
hljs.registerLanguage("cpp", cpp);
import { ReactNode, useEffect } from "react";

type Props = {
    children: ReactNode
};

const CppCode: React.FC<Props> = ({ children }) => {
    useEffect(() => {
        hljs.initHighlighting();
    })
    return (
        <pre>
            <code className="cpp">
                {children}
            </code>
        </pre>
    )
};

export default CppCode;