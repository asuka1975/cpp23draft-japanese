import Field from "@/components/Field"
import HeadItem from "@/components/HeadItem"
import { ReactNode } from "react";

type Props = {
    inner: boolean;
};

const content: ReactNode = <>

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