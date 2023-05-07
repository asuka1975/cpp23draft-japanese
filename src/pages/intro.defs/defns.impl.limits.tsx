import Field from "@/components/Field"
import HeadItem from "@/components/HeadItem"
import { ReactNode } from "react";

type Props = {
    inner: boolean;
};

const content: ReactNode = <>

</>

const DefnsImplLimits: React.FC<Props> = ({ inner = false }) => {
    return (
        <div id="defns.implementation limits">
        {
            inner ? 
                <div>
                    <HeadItem level={4} index="3.28" title="defns.impl.limits" link="/intro.defs/implementation limits" linkString="implementation limits" />
                    {content}
                </div> :
                <Field>
                    <HeadItem level={1} index="3" title="Terms and definitions" link="/" linkString="intro.defs" />
                    <HeadItem level={4} index="3.28" title="defns.impl.limits" link="/intro.defs/implementation limits" linkString="implementation limits" />
                    {content}
                </Field>
        }
        </div>
    )
}

export default DefnsImplLimits;