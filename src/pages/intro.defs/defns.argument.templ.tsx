import Field from "@/components/Field"
import HeadItem from "@/components/HeadItem"
import { ReactNode } from "react";

type Props = {
    inner: boolean;
};

const content: ReactNode = <>
    <p>{"<テンプレートの実体化>"} 三角括弧で囲まれた, カンマにより区切られたリストの中の<a href="/expr.const#constant-expression">constant-expression</a>, <a href="/dcl.name#type-id">type-id</a>, または<a href="/expr.prim.id.general#id-expression">id-expression</a></p>
</>

const DefnsArgumentTempl: React.FC<Props> = ({ inner = false }) => {
    return (
        <div id="defns.argument.templ">
        {
            inner ? 
                <div>
                    <HeadItem level={4} index="3.6" title="argument" link="/intro.defs/defns.argument.templ" linkString="defns.argument.templ" />
                    {content}
                </div> :
                <Field>
                    <HeadItem level={1} index="3" title="Terms and definitions" link="/" linkString="intro.defs" />
                    <HeadItem level={4} index="3.6" title="argument" link="/intro.defs/defns.argument.templ" linkString="defns.argument.templ" />
                    {content}
                </Field>
        }
        </div>
    )
}

export default DefnsArgumentTempl;