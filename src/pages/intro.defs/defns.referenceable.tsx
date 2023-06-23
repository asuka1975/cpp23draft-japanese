import Field from "@/components/Field"
import HeadItem from "@/components/HeadItem"
import { ReactNode } from "react";

type Props = {
    inner: boolean;
};

const content: ReactNode = <>
    <p>オブジェクト型かcv修飾・参照修飾を持たない関数型、あるいは参照型のどれかの型</p>
    <p>[Note 1: この用語は参照型を含めて生成可能なそれのものに対する参照型を生成できる型を表している]</p>
</>

const DefnsReferenceable: React.FC<Props> = ({ inner = false }) => {
    return (
        <div id="defns.referenceable">
        {
            inner ? 
                <div>
                    <HeadItem level={4} index="3.45" title="referenceable type" link="/intro.defs/defns.referenceable" linkString="defns.referenceable" />
                    {content}
                </div> :
                <Field>
                    <HeadItem level={1} index="3" title="Terms and definitions" link="/" linkString="intro.defs" />
                    <HeadItem level={4} index="3.45" title="referenceable type" link="/intro.defs/defns.referenceable" linkString="defns.referenceable" />
                    {content}
                </Field>
        }
        </div>
    )
}

export default DefnsReferenceable;