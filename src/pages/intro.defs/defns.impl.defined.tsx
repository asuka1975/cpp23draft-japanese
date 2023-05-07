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
        <div id="defns.impl.defined">
        {
            inner ? 
                <div>
                    <HeadItem level={4} index="3.26" title="implementation-defined behavior" link="/intro.defs/defns.impl.defined" linkString="defns.impl.defined" />
                    {content}
                </div> :
                <Field>
                    <HeadItem level={1} index="3" title="Terms and definitions" link="/" linkString="intro.defs" />
                    <HeadItem level={4} index="3.26" title="implementation-defined behavior" link="/intro.defs/defns.impl.defined" linkString="defns.impl.defined" />
                    {content}
                </Field>
        }
        </div>
    )
}

export default DefnsImplDefined;