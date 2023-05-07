import Field from "@/components/Field"
import HeadItem from "@/components/HeadItem"
import { ReactNode } from "react";

type Props = {
    inner: boolean;
};

const content: ReactNode = <>
    <p>conditional-expression CE のサブ式として評価しても、CEがコアの定数式であることを妨げない式</p>
</>

const DefnsConstSubexpr: React.FC<Props> = ({ inner = false }) => {
    return (
        <div id="defns.defns.const.subexpr">
        {
            inner ? 
                <div>
                    <HeadItem level={4} index="3.14" title="constant subexpression" link="/intro.defs/defns.const.subexpr" linkString="defns.const.subexpr" />
                    {content}
                </div> :
                <Field>
                    <HeadItem level={1} index="3" title="Terms and definitions" link="/" linkString="intro.defs" />
                    <HeadItem level={4} index="3.14" title="constant subexpression" link="/intro.defs/defns.const.subexpr" linkString="defns.const.subexpr" />
                    {content}
                </Field>
        }
        </div>
    )
}

export default DefnsConstSubexpr;