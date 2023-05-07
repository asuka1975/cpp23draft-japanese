import Field from "@/components/Field"
import HeadItem from "@/components/HeadItem"
import { ReactNode } from "react";

type Props = {
    inner: boolean;
};

const content: ReactNode = <>

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