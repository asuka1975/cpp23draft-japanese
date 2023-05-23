import Field from "@/components/Field"
import HeadItem from "@/components/HeadItem"
import { ReactNode } from "react";

type Props = {
    inner: boolean;
};

const content: ReactNode = <>
    <p>{"<library>"} C++標準ライブラリの一部でなく、実装によっては定義されていない明示的なテンプレート特殊化、または部分特殊化</p>
</>

const DefnsProgDefSpec: React.FC<Props> = ({ inner = false }) => {
    return (
        <div id="defns.prog.def.spec">
        {
            inner ? 
                <div>
                    <HeadItem level={4} index="3.42" title="program-defined specialization" link="/intro.defs/defns.prog.def.spec" linkString="defns.prog.def.spec" />
                    {content}
                </div> :
                <Field>
                    <HeadItem level={1} index="3" title="Terms and definitions" link="/" linkString="intro.defs" />
                    <HeadItem level={4} index="3.42" title="program-defined specialization" link="/intro.defs/defns.prog.def.spec" linkString="defns.prog.def.spec" />
                    {content}
                </Field>
        }
        </div>
    )
}

export default DefnsProgDefSpec;