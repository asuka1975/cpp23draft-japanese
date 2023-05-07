import Field from "@/components/Field"
import HeadItem from "@/components/HeadItem"
import { ReactNode } from "react";

type Props = {
    inner: boolean;
};

const content: ReactNode = <>

</>

const DefnsImplDefined: React.FC<Props> = ({ inner = false }) => {
    return (
        <div id="defns.implementation-defined behavior">
        {
            inner ? 
                <div>
                    <HeadItem level={4} index="3.26" title="defns.impl.defined" link="/intro.defs/implementation-defined behavior" linkString="implementation-defined behavior" />
                    {content}
                </div> :
                <Field>
                    <HeadItem level={1} index="3" title="Terms and definitions" link="/" linkString="intro.defs" />
                    <HeadItem level={4} index="3.26" title="defns.impl.defined" link="/intro.defs/implementation-defined behavior" linkString="implementation-defined behavior" />
                    {content}
                </Field>
        }
        </div>
    )
}

export default DefnsImplDefined;