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
        <div id="defns.default behavior">
        {
            inner ? 
                <div>
                    <HeadItem level={4} index="3.16" title="defns.default.behavior.impl" link="/intro.defs/default behavior" linkString="default behavior" />
                    {content}
                </div> :
                <Field>
                    <HeadItem level={1} index="3" title="Terms and definitions" link="/" linkString="intro.defs" />
                    <HeadItem level={4} index="3.16" title="defns.default.behavior.impl" link="/intro.defs/default behavior" linkString="default behavior" />
                    {content}
                </Field>
        }
        </div>
    )
}

export default DefnsDefaultBehaviorImpl;