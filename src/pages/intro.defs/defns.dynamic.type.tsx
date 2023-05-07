import Field from "@/components/Field"
import HeadItem from "@/components/HeadItem"
import { ReactNode } from "react";

type Props = {
    inner: boolean;
};

const content: ReactNode = <>
    <p>{"<glvalue>"} glvalueが指し示す最も下位の派生オブジェクトの型</p>
    <p>[Example 1: もしその静的型が「クラスBへの<a href="/dcl.ptr">pointer</a>」であるpointer pがBから派生しているクラスD型のオブジェクトを参照しているなら、式*pのdynamic typeはDです。<a href="/dcl.ref">References</a>も同様に扱います。]</p>
</>

const DefnsDynamicType: React.FC<Props> = ({ inner = false }) => {
    return (
        <div id="defns.defns.dynamic.type">
        {
            inner ? 
                <div>
                    <HeadItem level={4} index="3.19" title="dynamic type" link="/intro.defs/defns.dynamic.type" linkString="defns.dynamic.type" />
                    {content}
                </div> :
                <Field>
                    <HeadItem level={1} index="3" title="Terms and definitions" link="/" linkString="intro.defs" />
                    <HeadItem level={4} index="3.19" title="dynamic type" link="/intro.defs/defns.dynamic.type" linkString="defns.dynamic.type" />
                    {content}
                </Field>
        }
        </div>
    )
}

export default DefnsDynamicType;