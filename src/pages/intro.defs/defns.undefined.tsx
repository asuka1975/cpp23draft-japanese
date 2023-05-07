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
        <div id="defns.undefined">
        {
            inner ? 
                <div>
                    <HeadItem level={4} index="3.65" title="undefined behavior" link="/intro.defs/defns.undefined" linkString="defns.undefined" />
                    {content}
                </div> :
                <Field>
                    <HeadItem level={1} index="3" title="Terms and definitions" link="/" linkString="intro.defs" />
                    <HeadItem level={4} index="3.65" title="undefined behavior" link="/intro.defs/defns.undefined" linkString="defns.undefined" />
                    {content}
                </Field>
        }
        </div>
    )
}

export default DefnsUndefined;