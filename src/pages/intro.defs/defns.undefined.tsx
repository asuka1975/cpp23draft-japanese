import Field from "@/components/Field"
import HeadItem from "@/components/HeadItem"
import { ReactNode } from "react";

type Props = {
    inner: boolean;
};

const content: ReactNode = <>

</>

const DefnsUndefined: React.FC<Props> = ({ inner = false }) => {
    return (
        <div id="defns.undefined behavior">
        {
            inner ? 
                <div>
                    <HeadItem level={4} index="3.65" title="defns.undefined" link="/intro.defs/undefined behavior" linkString="undefined behavior" />
                    {content}
                </div> :
                <Field>
                    <HeadItem level={1} index="3" title="Terms and definitions" link="/" linkString="intro.defs" />
                    <HeadItem level={4} index="3.65" title="defns.undefined" link="/intro.defs/undefined behavior" linkString="undefined behavior" />
                    {content}
                </Field>
        }
        </div>
    )
}

export default DefnsUndefined;