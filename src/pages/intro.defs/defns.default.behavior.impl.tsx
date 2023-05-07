import Field from "@/components/Field"
import HeadItem from "@/components/HeadItem"
import { ReactNode } from "react";

type Props = {
    inner: boolean;
};

const content: ReactNode = <>
    <p>{"<library implementation>"} 要求される振る舞いの範囲内で, 実装によって提供される特定の振る舞い</p>
</>

const DefnsDefaultBehaviorImpl: React.FC<Props> = ({ inner = false }) => {
    return (
        <div id="defns.defns.default.behavior.impl">
        {
            inner ? 
                <div>
                    <HeadItem level={4} index="3.16" title="default behavior" link="/intro.defs/defns.default.behavior.impl" linkString="defns.default.behavior.impl" />
                    {content}
                </div> :
                <Field>
                    <HeadItem level={1} index="3" title="Terms and definitions" link="/" linkString="intro.defs" />
                    <HeadItem level={4} index="3.16" title="default behavior" link="/intro.defs/defns.default.behavior.impl" linkString="defns.default.behavior.impl" />
                    {content}
                </Field>
        }
        </div>
    )
}

export default DefnsDefaultBehaviorImpl;