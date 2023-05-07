import Field from "@/components/Field"
import HeadItem from "@/components/HeadItem"
import { ReactNode } from "react";

type Props = {
    inner: boolean;
};

const content: ReactNode = <>
    <p>{"<library>"} 全て同等効果を持ち, すべて例外を投げ得るかまたはすべて例外を投げないかのどちらかであり, そして全てが定数サブ式であるかまたは全てが定数サブ式ではない式群</p>
</>

const DefnsExpressionEquivalent: React.FC<Props> = ({ inner = false }) => {
    return (
        <div id="defns.defns.expression.equivalent">
        {
            inner ? 
                <div>
                    <HeadItem level={4} index="3.21" title="expression-equivalent" link="/intro.defs/defns.expression.equivalent" linkString="defns.expression.equivalent" />
                    {content}
                </div> :
                <Field>
                    <HeadItem level={1} index="3" title="Terms and definitions" link="/" linkString="intro.defs" />
                    <HeadItem level={4} index="3.21" title="expression-equivalent" link="/intro.defs/defns.expression.equivalent" linkString="defns.expression.equivalent" />
                    {content}
                </Field>
        }
        </div>
    )
}

export default DefnsExpressionEquivalent;